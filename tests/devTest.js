'use strict';

const path = require('path');
const TFL = require('../index');

require('dotenv').config({ path: path.join(__dirname, '../.env.ini') });

const client = new TFL({
  app_id: process.env.TUBE_APPID,
  app_key: process.env.TUBE_APPKEY
});

client.listServiceTypes()
  .then((result) => {
    console.log('pass');
    console.log(result);
  })
  .catch((err) => {
    console.error('fail');
    console.error(err);
  });