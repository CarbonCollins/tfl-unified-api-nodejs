'use strict'

const request = require('request-promise-native');
const moment = require('moment');

const LineMixin = require('./line.js');

/**
 * @module TfLUnified/api
 * @description The TfLUnified/api module acts as an abstracton layer for accessing the various TfL APIs
 * @see {@link https://api.tfl.gov.uk/}
 * @exports external:TfL
 */

/**
 * @class
 * @memberof module:TfLUnified/api
 */
class TfLUnified {
  /**
   * @constructor
   * @param {Object} options
   */
  constructor(options) {
    this.appKey = options.app_key || '';
    this.appID = options.app_id || '';
    this.host = options.host || 'api.tfl.gov.uk';
    this.port = options.port || ((options.useHttp) ? 80 : 443);
    this.protocol = (options.useHttp) ? 'http' : 'https';
  }

  /**
   * @method module:TfLUnified/api.TfLUnified~sendRequest
   * @description builds and sends the request to the TfL API
   * @param {String} uri the uri to send the request too
   * @param {Object} params
   * @param {String} method specifies the type of request to make e.g GET or POST
   * @returns {Promise} the http request promise
   * @private
   */
  sendRequest(uri, params, method) {
    const options = {
      uri: `${this.protocol}://${this.host}:${this.port}${uri}`,
      headers: {
        Accept: 'application/json'
      },
      qs: Object.assign(
        {
          app_id: `${this.appID}`,
          app_key: `${this.appKey}`
        },
        params
      ),
      json: true,
      method
    };
    return request(options);
  }
  
  /**
   * @method module:TfLUnified/api.TfLUnified~serialiseParam
   * @description serialises a parameter in the apropriate manor
   * @param {String[]|Number[]|String|Number|Boolean|Moment|Date} array input array to serialise
   * @returns {String} the serialised parameter
   * @private 
   */
  serialiseParam(param) {
    if (Array.isArray(param)) {
      return this.serialiseArray(param);
    } else if (typeof param === 'boolean') {
      return this.serialiseBoolean(param);
    } else if (moment.isMoment(param) || param instanceof Date) {
      return this.serialiseDate(param);
    } else {
      return `${param}`;
    }
  }

  /**
   * @method module:TfLUnified/api.TfLUnified~serialiseArray
   * @description serialises an array into a string with each element seperated by a ','
   * @param {String[]|Number[]} array input array to serialise
   * @returns {String} a comma seperated string of all the array elements
   * @private 
   */
  serialiseArray(array) {
    return (array && Array.isArray(array))
      ? array.join(',')
      : array || '';
  }
  
  /**
   * @method module:TfLUnified/api.TfLUnified~serialiseBoolean
   * @description serialises a boolean into a string
   * @param {Boolean} boolean input array to serialise
   * @returns {String} a boolean string of true or false
   * @private 
   */
  serialiseBoolean(boolean) {
    return (boolean === true)
      ? 'true'
      : 'false';
  }
  
  /**
   * @method module:TfLUnified/api.TfLUnified~serialiseDate
   * @description serialises a moment/ js date into a string
   * @param {Moment|Date|String} date input array to serialise
   * @returns {String} a boolean string of true or false
   * @private 
   */
  serialiseDate(date) {
    if (moment.isMoment(date)) {
      return moment.toISOString()
    } else {
      return moment(date).toISOString();
    }
  }

  /**
   * @method module:TfLUnified/api.TfLUnified~parseParams
   * @description parses the optional parameters to sort arrays
   * @param {Object} params
   * @returns {Object} returns a query object with the correct formatting when sending the search query
   * @private
   */
  parseParams(params) {
    const keys = Object.keys(Object.assign({}, params));
    const options = {};
  
    for (let i = 0, iLength = keys.length; i < iLength; i += 1) {
      options[keys[i]] = this.serialiseParam(params[keys[i]]);
    }
  
    return options;
  }
}

/**
 * @method mix
 * @description mixes a superclass using the MixinBuilder
 * @param {Class} Superclass 
 * @returns {MixinBuilder} returns a MixinBuilder ready to apply mixins
 * @private
 */
const mix = (Superclass) => {
  return new MixinBuilder(Superclass);
};

/**
 * @class
 * @classdesc a helper class for constructing a class with mixins
 * @private
 */
class MixinBuilder {
  /**
   * @constructor
   * @param {Class} Superclass the parent class to have the mixins applied too
   * @private
   */
  constructor(Superclass) {
    this.superclass = Superclass;
  }
  
  /**
   * @method MixinBuilder~with
   * @description specifies whch mixins to apply to the super class
   * @param {...Function} mixins 
   * @returns {Class} returns the superclass with the mixins applied
   * @private
   */
  with(...mixins) {
    return mixins.reduce((c, mixin) => { return mixin(c); }, this.superclass);
  }
}

module.exports = mix(TfLUnified).with(LineMixin);
module.exports.TfLUnified = mix(TfLUnified).with(LineMixin);

module.exports.Line = mix(TfLUnified).with(LineMixin);
