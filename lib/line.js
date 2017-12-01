'use strict';

/**
 * @method LineMixin
 * @private
 * @param {Class} SuperClass a superclass to apply the mixin too
 */
const LineMixin = (SuperClass) => { 
  /**
   * @class
   * @memberof module:TfLUnified/api
   * @augments module:TfLUnified/api.TfLUnified
   * @see {@link https://api.tfl.gov.uk}
   */
  const Line = class extends SuperClass {
    /**
     * @method module:TfLUnified/api.Line~listValidModes
     * @description Lists all of the valid line transportation modes
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaModes}
     * @returns {MetaMode[]} an array of objects contianing the transportation modes 
     */
    listValidModes() {
      return this.sendRequest('/Line/Meta/Modes', {});
    }

    /**
     * @method module:TfLUnified/api.Line~listSeverityCodes
     * @description Lists all of the valid line severity codes
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaSeverity}
     * @returns {MetaSeverity[]} an array of objects contianing the severity code 
     */
    listSeverityCodes() {
      return this.sendRequest('/Line/Meta/Severity', {});
    }
    
    /**
     * @method module:TfLUnified/api.Line~listDisruptionCategories
     * @description Lists all of the valid line disruption categories
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaDisruptionCategories}
     * @returns {String[]} an array of strings contianing the disruption categories
     */
    listDisruptionCategories() {
      return this.sendRequest('/Line/Meta/DisruptionCategories', {});
    }
    
    /**
     * @method module:TfLUnified/api.Line~listServiceTypes
     * @description Lists all of the valid line service types
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaServiceTypes}
     * @returns {String[]} an array of strings contianing the service types
     */
    listServiceTypes() {
      return this.sendRequest('/Line/Meta/ServiceTypes', {});
    }
  };
  return Line;
}

module.exports = LineMixin;

/**
 * @typedef {Object} MetaMode
 * @global
 * @description a response object for detailing TfL transport Meta Modes
 *
 * @property {Boolean} isTflService
 * @property {Boolean} isFarePaying
 * @property {Boolean} isScheduledService
 * @property {String} modeName
 */

/**
 * @typedef {Object} MetaSeverity
 * @global
 * @description a response object for detailing TfL severity codes
 *
 * @property {String} modeName
 * @property {Number} severityLevel
 * @property {String} description
 */
