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
     * @param {String[]} ids An array of line ids e.g. circle, northern, ect
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Get}
     * @see {Pmodule:TfLUnified/api.Line~getLinesById}
     * @returns {Object[]} an array of specified line information
     */
    getLinesById(ids) {
      return this.joinParams(ids, '/Line', 'GET');
    }
    
    /**
     * @method module:TfLUnified/api.Line~getLineById
     * @description Gets information about the lines supplied by id [GET]
     * @param {String} id a single line id to get information for e.g. circle, northern, ect
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Get}
     * @see {Pmodule:TfLUnified/api.Line~getLinesById}
     * @returns {Object[]} an array of specified line information
     */
    getLineById(id) {
      return this.getLinesById([id])
        .then((response) => {
          return (response && Array.isArray(response) ? response[0] : response);
        });
    }

    /**
     * @method module:TfLUnified/api.Line~getLinesByModes
     * @description Gets information about the lines supplied by modes [GET]
     * @param {String[]} modes An array of line modes e.g. tube, bus, ect
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_GetByMode}
     * @see {module:TfLUnified/api.Line~listValidModes}
     * @returns {Object[]} an array of specified line information
     */
    getLinesByModes(modes) {
      return this.joinParams(modes, '/Line/Mode', 'GET');
    }
    
    /**
     * @method module:TfLUnified/api.Line~getLinesByMode
     * @description Gets information about the lines supplied by mode [GET]
     * @param {String} mode a single line id to get information for e.g. tube, bus, ect
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_GetByMode}
     * @see {module:TfLUnified/api.Line~listValidModes}
     * @returns {Object[]} an array of specified line information
     */
    getLinesByMode(mode) {
      return this.getLinesByModes([mode])
        .then((response) => {
          return (response && Array.isArray(response) ? response[0] : response);
        });
    }
    
    /**
     * @method module:TfLUnified/api.Line~getLinesByServiceTypes
     * @description Gets information about the lines supplied by modes [GET]
     * @param {String[]} types An array of line service types e.g. regular, night, ect
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Route}
     * @see {module:TfLUnified/api.Line~listServiceTypes}
     * @returns {Object[]} an array of specified line information
     */
    getLinesByServiceTypes(types) {
      return this.joinParams(types, '/Line/Route', 'GET');
    }
    
    /**
     * @method module:TfLUnified/api.Line~getLinesByServiceType
     * @description Gets information about the lines supplied by a service type [GET]
     * @param {String} mode a single line id to get information for e.g. regular, night, ect
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Route}
     * @see {module:TfLUnified/api.Line~listServiceTypes}
     * @returns {Object[]} an array of specified line information
     */
    getLinesByServiceType(type) {
      return this.getLinesByServiceTypes([type])
        .then((response) => {
          return (response && Array.isArray(response) ? response[0] : response);
        });
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
