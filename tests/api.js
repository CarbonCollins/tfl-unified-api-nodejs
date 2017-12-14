'use strict';
const Mocha = require('mocha');
const Chai = require('chai');
const EventEmitter = require('events');
const jsdocx = require('jsdoc-x');
const rewire = require('rewire');
const http = require('http');
const qs = require('querystring');
const moment = require('moment');

const Test = Mocha.Test;
const Suite = Mocha.Suite;
const expect = Chai.expect;

const TfLUnified = require('../index');

const serverEmitter = new EventEmitter();
const serverPort = 3334;
const serverHost = '127.0.0.1';
const serverValidKey = 'validKey';
const serverValidId = 'validId';
let server;

// ----- module export tests ----- //

function generateArgsFromParams(params) {
  const parameters = ((Array.isArray(params)) ? params : [])
    .slice(0)
    .map((param) => {
      return param.type.names[0];
    })
    .map((param) => {
      if (param.includes('Array.<')) {
        switch(param.substr(7, (param.length - 8))) {
          case 'String':
            return ['test1', 'test2', 'test3'];
          case 'Number':
            return [5, 7, 9];
          case 'Object':
            return [{ test: true }, { test: false }];
          default:
            return [];
        }
      } else {
        switch(param) {
          case 'LineId':
            return 'bakerloo';
          case 'DateRange':
            return { startDate: moment(), endDate: moment().add(1, 'day') };
          case 'String':
            return 'test1';
          case 'Number':
            return 5;
          case 'Object':
            return { test: true };
          default:
            return null;
        }
      }
    });

  return parameters;
}

function getModuleStatics() {
  return jsdocx.parse(['./index.js', './lib/*.js'])
    .then((docs) => {
      return {
        docs,
        moduleNames: docs
          .slice(0)
          .filter((doc) => {
            return doc.memberof && doc.memberof === 'module:TfLUnified/api'
              && doc.kind && doc.kind === 'class'
          })
          .map((member) => { return member.name; })
          .filter((elem, pos, arr) => {
            return arr.indexOf(elem) == pos;
          })
          .map((moduleName) => {
            return {
              moduleName,
                docs: docs
                .slice(0)
                .filter((doc) => {
                  return doc.memberof && doc.memberof === `module:TfLUnified/api.${moduleName}`
                    && doc.kind && doc.kind === 'function'
                    && doc.scope && doc.scope === 'inner';
                })
            };
          })
      };
    })
}

const moduleSuite = new Suite('TfLUnified api tests');

module.exports = () => {
  return getModuleStatics()
    .then((jsdocDetails) => {

      moduleSuite.timeout(5000);

      moduleSuite.beforeAll('Test Endpoint setup', (done) => {
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

      const apiSuite = new Suite('Functional tests');

      for (let i = 0, iLength = jsdocDetails.moduleNames.length; i < iLength; i += 1) { 
        const moduleAPISuite = new Suite(`${jsdocDetails.moduleNames[i].moduleName} tests`);

        for (let j = 0, jLength = jsdocDetails.moduleNames[i].docs.length; j < jLength; j += 1) {
          const moduleAPIFunctionSuite = new Suite(`${jsdocDetails.moduleNames[i].docs[j].name} functional tests`);
          
          moduleAPIFunctionSuite.timeout(15000);

          moduleAPIFunctionSuite.addTest(new Test('Function accessable', () => {
            const MUT = new TfLUnified({ app_key: serverValidKey, app_id: serverValidId, host: serverHost, port: serverPort, useHttp: true });
            expect(MUT[jsdocDetails.moduleNames[i].docs[j].name]).to.be.an('function', 'Function should be exposed with module');
            expect()
          }));

          moduleAPIFunctionSuite.addTest(new Test('Function has description', () => {
            expect(jsdocDetails.moduleNames[i].docs[j].description).to.not.be.undefined;
            expect(jsdocDetails.moduleNames[i].docs[j].description).to.not.be.empty;
          }));

          moduleAPIFunctionSuite.addTest(new Test('Function has see link to tfl.gov.uk', () => {
            expect(jsdocDetails.moduleNames[i].docs[j].see).to.not.be.undefined;
            expect(jsdocDetails.moduleNames[i].docs[j].see).to.be.an('array');
            expect(jsdocDetails.moduleNames[i].docs[j].see).to.have.lengthOf.at.least(1);
            expect(jsdocDetails.moduleNames[i].docs[j].see).to.include.to.match(/{@link https:\/\/api\.tfl\.gov.uk\/swagger\/ui\/index\.html|{@link http:\/\/content\.tfl\.gov\.uk\/tfl-colour-standards-issue04\.pdf/);
          }));

          if (jsdocDetails.moduleNames[i].docs[j].description.includes('[GET]')) {
            moduleAPIFunctionSuite.addTest(new Test('Function calls API endpoint', (done) => {
              const MUTT = new TfLUnified({ app_key: serverValidKey, app_id: serverValidId, host: serverHost, port: serverPort, useHttp: true });
              serverEmitter.once('receivedRequest', (payload) => {
                expect(payload.params).to.include.keys(['app_id', 'app_key']);
                expect(payload.params.app_key).to.be.equal(serverValidKey);
                expect(payload.params.app_id).to.be.equal(serverValidId);
                expect(payload.req.headers).to.deep.include({ accept: 'application/json' });
                expect(payload.req.method).to.be.equal('GET');
                done();
              });

              MUTT[jsdocDetails.moduleNames[i].docs[j].name]
                .apply(MUTT, generateArgsFromParams(jsdocDetails.moduleNames[i].docs[j].params))
                .catch((err) => { console.error(err); done(err); });
            }));
          } else {
            moduleAPIFunctionSuite.addTest(new Test('Function can be called', (done) => {
              const MUTT = new TfLUnified({ app_key: serverValidKey, app_id: serverValidId, host: serverHost, port: serverPort, useHttp: true });

              const funcResult = MUTT[jsdocDetails.moduleNames[i].docs[j].name]
                .apply(MUTT, generateArgsFromParams(jsdocDetails.moduleNames[i].docs[j].params));

              expect(funcResult).to.not.be.equal(undefined);

              done();
            }));
          }

          moduleAPISuite.addSuite(moduleAPIFunctionSuite);

        }

        apiSuite.addSuite(moduleAPISuite);
      }

      moduleSuite.addTest(new Test('parseParams functional', () => {
        const MUT = rewire('../lib/main');
        const TfLUnified = MUT.__get__('TfLUnified');
        expect(TfLUnified).to.be.an('function', 'TfLUnified class constructor should be present');
        const CUT = new TfLUnified({ app_key: serverValidKey, app_id: serverValidId, host: serverHost, port: serverPort, useHttp: true });
        expect(CUT).to.be.an('object', 'TfLUnified class should have been constructed');

        expect(CUT.parseParams).to.be.an('function');
        const emptyResult = CUT.parseParams();
        const emptyObjResult = CUT.parseParams({});
        const fullObjBoolResult = CUT.parseParams({ test: true });
        const fullObjStringResult = CUT.parseParams({ test: 'test1' });
        const fullObjArrResult = CUT.parseParams({ test: ['test1','test2'] });
        const fullMomentResult = CUT.parseParams({ test: moment('2017-12-07T07:02:22.000Z') });
        const fullDateResult = CUT.parseParams({ test: new Date('2017-12-07T07:02:22.000Z') });

        expect(emptyResult).to.be.an('object', 'should return an object');
        expect(emptyResult).to.be.deep.equal({}, 'should return an empty object');
        expect(emptyObjResult).to.be.an('object', 'should return an object');
        expect(emptyObjResult).to.be.deep.equal({}, 'should return an empty object');
        expect(fullObjBoolResult).to.be.an('object', 'should return an object');
        expect(fullObjBoolResult).to.be.deep.equal({ test: 'true' }, 'should return a populated object');
        expect(fullObjStringResult).to.be.an('object', 'should return an object');
        expect(fullObjStringResult).to.be.deep.equal({ test: 'test1' }, 'should return a populated object');
        expect(fullObjArrResult).to.be.an('object', 'should return an object');
        expect(fullObjArrResult).to.be.deep.equal({ test: 'test1,test2' }, 'should return a populated object');
        expect(fullMomentResult).to.be.an('object', 'should return an object');
        expect(fullMomentResult).to.be.deep.equal({ test: '2017-12-07T07:02:22.000Z' }, 'should return a populated object');
        expect(fullDateResult).to.be.an('object', 'should return an object');
        expect(fullDateResult).to.be.deep.equal({ test: '2017-12-07T07:02:22.000Z' }, 'should return a populated object');
      }));

      moduleSuite.addTest(new Test('sendRequest functional', (done) => {
        const MUT = rewire('../lib/main');
        const TfLUnified = MUT.__get__('TfLUnified');
        expect(TfLUnified).to.be.an('function', 'TfLUnified class constructor should be present');
        const CUT = new TfLUnified({ app_key: serverValidKey, app_id: serverValidId, host: serverHost, port: serverPort, useHttp: true });
        expect(CUT).to.be.an('object', 'TfLUnified class should have been constructed');

        serverEmitter.once('receivedRequest', (payload) => {
          expect(payload.params).to.have.all.keys(['app_id', 'app_key', 'testParm']);
          expect(payload.params.app_key).to.be.equal(serverValidKey);
          expect(payload.params.app_id).to.be.equal(serverValidId);
          expect(payload.params.testParm).to.be.equal('true'); 
          expect(payload.req.headers).to.deep.include({ accept: 'application/json' });
          expect(payload.req.method).to.be.equal('GET');
          done();
        });
        CUT.sendRequest('/test/url', { testParm: true })
          .catch((err) => { console.error(err); done(err); });
      }));
      
      moduleSuite.addTest(new Test('serialiseArray functional', () => {
        const MUT = rewire('../lib/main');
        const TfLUnified = MUT.__get__('TfLUnified');
        expect(TfLUnified).to.be.an('function', 'TfLUnified class constructor should be present');
        const CUT = new TfLUnified({ app_key: serverValidKey, app_id: serverValidId, host: serverHost, port: serverPort, useHttp: true });
        expect(CUT).to.be.an('object', 'TfLUnified class should have been constructed');

        expect(CUT.serialiseArray).to.be.an('function');
        const emptyResult = CUT.serialiseArray();
        const emptyArrResult = CUT.serialiseArray([]);
        const fullStringArrResult = CUT.serialiseArray(['test1', 'test2']);
        const fullNumArrResult = CUT.serialiseArray([1, 2]);

        expect(emptyResult).to.be.an('string', 'should return a string');
        expect(emptyResult).to.be.equal('', 'should return an empty string');
        expect(emptyArrResult).to.be.an('string', 'should return a string');
        expect(emptyArrResult).to.be.equal('', 'should return an empty string');
        expect(fullStringArrResult).to.be.an('string', 'should return a string');
        expect(fullStringArrResult).to.be.equal('test1,test2', 'should return a joined string');
        expect(fullNumArrResult).to.be.an('string', 'should return a string');
        expect(fullNumArrResult).to.be.equal('1,2', 'should return a joined string');
      }));

      moduleSuite.addSuite(apiSuite);

      return moduleSuite;
    });
}
