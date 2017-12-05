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
     * @description Lists all of the valid line transportation modes [GET]
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaModes}
     * @returns {MetaMode[]} an array of objects contianing the transportation modes 
     */
    listValidModes() {
      return this.sendRequest('/Line/Meta/Modes', {}, 'GET');
    }

    /**
     * @method module:TfLUnified/api.Line~listSeverityCodes
     * @description Lists all of the valid line severity codes [GET]
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaSeverity}
     * @returns {MetaSeverity[]} an array of objects contianing the severity code 
     */
    listSeverityCodes() {
      return this.sendRequest('/Line/Meta/Severity', {}, 'GET');
    }
    
    /**
     * @method module:TfLUnified/api.Line~listDisruptionCategories
     * @description Lists all of the valid line disruption categories [GET]
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaDisruptionCategories}
     * @returns {String[]} an array of strings contianing the disruption categories
     */
    listDisruptionCategories() {
      return this.sendRequest('/Line/Meta/DisruptionCategories', {}, 'GET');
    }
    
    /**
     * @method module:TfLUnified/api.Line~listServiceTypes
     * @description Lists all of the valid line service types [GET]
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaServiceTypes}
     * @returns {String[]} an array of strings contianing the service types
     */
    listServiceTypes() {
      return this.sendRequest('/Line/Meta/ServiceTypes', {}, 'GET');
    }

    /**
     * @method module:TfLUnified/api.Line~getLinesById
     * @description Gets information about the lines supplied by ids [GET]
     * @param {String[]|String} ids An array of line ids e.g. circle, northern, ect
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Get}
     * @see {Pmodule:TfLUnified/api.Line~getLinesById}
     * @returns {Object[]} an array of specified line information
     */
    getLinesById(ids) {
      return this.sendRequest(`/Line/${this.serialiseArray(ids)}`, 'GET');
    }

    /**
     * @method module:TfLUnified/api.Line~getLinesByModes
     * @description Gets information about the lines supplied by modes [GET]
     * @param {String[]|String} modes An array of line modes e.g. tube, bus, ect
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_GetByMode}
     * @see {module:TfLUnified/api.Line~listValidModes}
     * @returns {Object[]} an array of specified line information
     */
    getLinesByModes(modes) {
      return this.sendRequest(`/Line/Mode/${this.serialiseArray(modes)}`, 'GET');
    }
    
    /**
     * @method module:TfLUnified/api.Line~getLinesByServiceTypes
     * @description Gets information about the lines supplied by modes [GET]
     * @param {String[]|String} types An array of line service types e.g. regular, night, ect
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Route}
     * @see {module:TfLUnified/api.Line~listServiceTypes}
     * @returns {Object[]} an array of specified line information
     */
    getLinesByServiceTypes(types) {
      return this.sendRequest(`/Line/Route/${this.serialiseArray(types)}`, 'GET');
    }

    /**
     * @method module:TfLUnified/api.Line~getLinesByIdsAndServiceTypes
     * @description Gets information about the lines supplied by ids and service types [GET]
     * @param {String[]|String} ids An array of line ids e.g. circle, northern, ect
     * @param {String[]|String} types An array of line service types e.g. regular, night, ect
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Route}
     * @see {module:TfLUnified/api.Line~listServiceTypes}
     * @returns {Object[]} an array of specified line information
     */
    getLinesByIdsAndServiceTypes(ids, types) {
      return this.sendRequest(`/Line/${this.serialiseArray(ids)}/Route/${this.serialiseArray(types)}`, 'GET');
    }
    
    /**
     * @method module:TfLUnified/api.Line~getLinesByModesAndServiceTypes
     * @description Gets information about the lines supplied by modes and service types [GET]
     * @param {String[]|String} modess An array of line modes e.g. tube, bus, ect
     * @param {String[]|String} types An array of line service types e.g. regular, night, ect
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_RouteByMode}
     * @see {module:TfLUnified/api.Line~listServiceTypes}
     * @returns {Object[]} an array of specified line information
     */
    getLinesByModesAndServiceTypes(modes, types) {
      return this.sendRequest(`/Line/Mode/${this.serialiseArray(modes)}/Route/${this.serialiseArray(types)}`, 'GET');
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
