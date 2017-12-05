'use strict'

const request = require('request-promise-native');

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
        parseParameters(params)
      ),
      json: true,
      method
    };
    return request(options);
  }

  /**
   * @method module:TfLUnified/api.TfLUnified~serialiseArray
   * @description serialises an array into a string with each element seperated by a ','
   * @param {String[]|Number[]} array input array to serialise
   * @returns {String} a comma seperated string of all the array elements
   * @private 
   */
  serialiseArray(array) {
    return (array && Array.isArray(array)) ? array.join(',') : array || '';
  }
}

/**
 * @method parseParameters
 * @instance
 * @description parses the modules parameters into the api parameters
 * @param {RequestParameters} params
 * @returns {Object} returns a query object with the correct formatting when sending the search query
 * @private
 */
function parseParameters(params) {
  const finalParams = params || {}; // temp untill coded

  return finalParams;
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
