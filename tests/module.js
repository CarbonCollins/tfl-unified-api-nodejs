'use strict';
const Mocha = require('mocha');
const Chai = require('chai');
const jsdocx = require('jsdoc-x');
const fs = require('fs-extra');
const path = require('path');
const jsdoc2md = require('jsdoc-to-markdown');
const diff = require('diff');
const rewire = require('rewire');
const http = require('http');
const EventEmitter = require('events');
const qs = require('querystring');

const packageJSON = require('../package.json');

const Test = Mocha.Test;
const Suite = Mocha.Suite;
const expect = Chai.expect;

const OWM = require('../index');

const serverEmitter = new EventEmitter();
const serverPort = 3335;
const serverHost = '127.0.0.1';
const serverValidKey = 'validKey';
const serverValidId = 'validId';
let server;

// ----- module export tests ----- //

function getModuleStatics() {
  return jsdocx.parse(['./index.js', './lib/*.js'])
    .then((docs) => {
      return docs
      .slice(0)
        .filter((doc) => {
          return doc.memberof && doc.memberof === 'module:TfLUnified/api'
            && doc.kind && doc.kind === 'class'
        })
        .map((member) => { return member.name; })
        .filter((elem, pos, arr) => {
          return arr.indexOf(elem) == pos;
        });
    })
}

const moduleSuite = new Suite('TfLUnified module tests');

module.exports = () => {
  return getModuleStatics()
    .then((moduleNames) => {

      const packageSuite = new Suite('Package tests');
      packageSuite.timeout(15000);

      packageSuite.beforeAll('Test Endpoint setup', (done) => {
        server = http.createServer((req, res) => {
          let data = '';

          req.on('data', (chunk) => { data += chunk; });

          req.on('end', () => {
            serverEmitter.emit('receivedRequest', {
              req,
              body: qs.parse(data) || {},
              params: (req.url.includes('?'))
                ? qs.parse(req.url.split('?')[1]) || {}
                : {}
            });

            res.writeHead(200);
            res.end();
          });
        });

        server.on('listening', () => {
          done();
        });

        server.listen(serverPort, serverHost);
      });

      moduleSuite.afterAll('Test Endpoint destroy', (done) => {
        server.close((err) => {
          done(err);
        })
      });

      packageSuite.addTest(new Test('package.json details', () => {
        expect(packageJSON.name).to.be.equal('tfl-unified-api', 'tests not being run on the correct package. Needs to be run on the npm package for tfl-unified-api');
        expect(packageJSON.description).to.not.be.empty;
        expect(packageJSON.version).to.not.be.empty;
        expect(packageJSON.main).to.be.equal('./index.js', 'package should have an entry point of index.js')
      }));

      packageSuite.addTest(new Test('main entry point present', (done) => {
        const mainEntryPath = path.join(__dirname, '../', packageJSON.main);
        fs.pathExists(mainEntryPath)
          .then((exists) => {
            done((exists) ? null : new Error(`Main entry point "${mainEntryPath}" does not exist`));
          })
          .catch((err) => {
            done(err);
          })
      }))

      packageSuite.addTest(new Test('README.md is present', (done) => {
        fs.pathExists(path.join(__dirname, '../README.md'))
          .then((exists) => {
            done((exists) ? null : new Error('README.md is missing from package'));
          })
          .catch((err) => {
            done(err);
          })
      }));

      packageSuite.addTest(new Test('API docs present and up-to-date', (done) => {
        const apiDocPath = path.join(__dirname, '../docs/api.md');
        fs.pathExists(apiDocPath)
          .then((exists) => {
            if (exists) {
              return jsdoc2md.render({ 
                'no-cache': true,
                separators: true,
                files: [path.join(__dirname, '../lib/*.js')]
                // source: files
              });
            } else {
              return Promise.reject(new Error('api.md is not present in documentation folder'));
            }
          })
          .then((output) => {
            fs.readFile(apiDocPath, 'utf-8')
              .then((fileString) => {
                const diffs = diff.diffLines(fileString, output, { ignoreWhitespace: true })
                  .filter((change) => {
                    return (change.added || change.removed);
                  });
                if (diffs.length === 0) {
                  done(null);
                } else {
                  console.log(JSON.stringify({ d: diffs }));
                  done(new Error('Existing api.md is not up to date with current code'));
                }
              })
              .catch((err) => {
                done(err);
              })
          })
          .catch((err) => {
            done(err);
          })
      }));

      packageSuite.addTest(new Test('parseParameters functional', () => {
        const MUT = rewire('../lib/main');
        const parseParameters = MUT.__get__('parseParameters');
        expect(parseParameters).to.be.an('function', 'parseParameters is missing from main.js');
        const emptyResponse = parseParameters();
        const blankResponse = parseParameters({});
        const popResponse = parseParameters({ testParm: true });
        expect(emptyResponse).to.be.an('object', 'parseParameters should return an object (param null)');
        expect(emptyResponse).to.be.deep.equal({}, 'parseParameters should return an empty object');
        expect(blankResponse).to.be.an('object', 'parseParameters should return an object (param {})');
        expect(blankResponse).to.be.deep.equal({}, 'parseParameters should return an empty object');
        expect(popResponse).to.be.an('object', 'parseParameters should return an object (param { testParm: true })');
        expect(popResponse).to.be.deep.equal({ testParm: true }, 'parseParameters should return a populated object');
      }));

      packageSuite.addTest(new Test('sendRequest functional', (done) => {
        const MUT = rewire('../lib/main');
        const TfLUnified = MUT.__get__('TfLUnified');
        expect(TfLUnified).to.be.an('function', 'TfLUnified class constructor should be present');
        const CUT = new TfLUnified({ app_key: serverValidKey, app_id: serverValidId, host: serverHost, port: serverPort });
        expect(CUT).to.be.an('object', 'TfLUnified class should have been constructed');

        serverEmitter.once('receivedRequest', (payload) => {
          expect(payload.params).to.have.all.keys(['app_id', 'app_key', 'testParm']);
          expect(payload.params.app_key).to.be.equal(serverValidKey);
          expect(payload.params.app_id).to.be.equal(serverValidId);
          expect(payload.params.testParm).to.be.equal('true');
          done();
        });
        CUT.sendRequest('/test/url', { testParm: true })
          .catch((err) => { console.error(err); done(err); });
      }));

      moduleSuite.addSuite(packageSuite);

      const exportSuite = new Suite('Export tests');
      
      exportSuite.addTest(new Test('module exports class constructor', () => {
        expect(OWM).to.be.an('function', 'module should export a constructor');
      }));
          
      for (let i= 0, iLength = moduleNames.length; i < iLength; i += 1) {
        exportSuite.addTest(new Test(`module exports ${moduleNames[i]} constructor`, () => {
          const MUT = require('../index');
          expect(MUT[moduleNames[i]]).to.be.an('function', 'module should export a constructor');
          expect(new MUT[moduleNames[i]]({})).to.be.an('object', 'module should export a constructor');
        }));
      }

      moduleSuite.addSuite(exportSuite);

      return moduleSuite;
    });
}
