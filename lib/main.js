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
    this.appKey = options.appKey || options.app_key || '';
    this.appID = options.appId || options.app_id || '';
    this.host = options.host || options.hostname || '';
    this.port = options.port || 80;
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