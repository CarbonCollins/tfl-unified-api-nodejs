# tfl-unified-api-nodejs

[![GitHub issues](https://img.shields.io/github/issues/CarbonCollins/tfl-unified-api-nodejs.svg?style=flat)](https://github.com/CarbonCollins/tfl-unified-api-nodejs/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/CarbonCollins/tfl-unified-api-nodejs/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/CarbonCollins/tfl-unified-api-nodejs/all.svg?style=flat)]()
[![David](https://img.shields.io/david/CarbonCollins/tfl-unified-api-nodejs.svg?style=flat)]()
[![David](https://img.shields.io/david/dev/CarbonCollins/tfl-unified-api-nodejs.svg?style=flat)]()
[![Maintainability](https://api.codeclimate.com/v1/badges/b56bc89cb71650e9ac1b/maintainability)](https://codeclimate.com/github/CarbonCollins/tfl-unified-api-nodejs/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b56bc89cb71650e9ac1b/test_coverage)](https://codeclimate.com/github/CarbonCollins/tfl-unified-api-nodejs/test_coverage)

An abstraction layer for accessing the TfL Unified API

Currently only some of th line api functions have been added

## install

```
npm install tfl-unified-api --save
```

## usage

To use this package you can either import an individual api or import all of the apis into your application. For an individual module you can use:

```
import Line from 'TfLUnified/api';
```
or 
```
const { Line } = require('tfl-unified-api);
```

If you want to import all of the modules just use:

```
const TfL = require('tfl-unified-api');
```

Once imported you need to create a client instance where wou would provide an api key for it to use:

```
const { Line } = require('tfl-unified-api');

const client = new Line({
  app_key: '{your app_key from https://api.tfl.gov.uk}',
  app_id: '{your app_id from https://api.tfl.gov.uk}'
});
```
The available APIs are listed in the [API Docs Page as all of the static members of the module](./docs/api.md#module_TfLUnified/api). If however you have imported all of the apis into a single object then you will have full access to all methods as if you had imported only a single one.

## api documentation

The documentation can be found on the [API Docs Page](./docs/api.md)
