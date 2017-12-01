
'use strict';
const Mocha = require('mocha');
const Suite = Mocha.Suite;

const moduleUnitTests = require('./module');
const apiUnitTests = require('./api');


const mocha = new Mocha();

const fullSuite = Suite.create(mocha.suite, 'OpenWeatherMap full test suite');

Promise.resolve()
  .then(() => { return moduleUnitTests(); })
  .then((suite) => { return fullSuite.addSuite(suite); })
  .then(() => { return apiUnitTests(); })
  .then((suite) => { return fullSuite.addSuite(suite); })
  .then(() => { 
    return mocha.run((failures) => {
      process.on('exit', () => {
        process.exit(failures);
      });
    });
  })
  .catch((err) => {
    console.error(err);
  });