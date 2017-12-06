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
     * @method module:TfLUnified/api.Line~getRoutesById
     * @description Gets information about the Routes supplied by ids [GET]
     * @param {String[]|String} ids An array of line ids e.g. circle, northern, ect
     * @param {Object} [options] optional parameters to be added to the request
     * @param {String[]|String} [options.serviceTypes] An array or string of line service types e.g. regular, night, ect
     * @param {String} [options.direction] a direction in which to sequence the stations can be either: inbound, outbound, all
     * @param {Boolean} [options.excludeCrowd] should crowd line disruptions be exlcuded from the request
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Get}
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_LineRoutesByIds}
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_RouteSequence}
     * @returns {Object[]} an array of specified line information
     */
    getRoutesById(ids, options) {
      return this.sendRequest((options && options.direction && options.direction !== '')
        ? `/Line/${this.serialiseArray(ids)}/Route/Sequence/${options.direction}`
        : `/Line/${this.serialiseArray(ids)}/Route`
      , options, 'GET');
    }

    /**
     * @method module:TfLUnified/api.Line~getRoutesByMode
     * @description Gets information about the Routes supplied by modes [GET]
     * @param {String[]|String} modes An array of line modes e.g. tube, bus, ect
     * @param {Object} [options] optional parameters to be added to the request
     * @param {String[]|String} [options.serviceTypes] An array or string of line service types e.g. regular, night, ect
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_GetByMode}
     * @see {module:TfLUnified/api.Line~listValidModes}
     * @returns {Object[]} an array of specified line information
     */
    getRoutesByMode(modes, options) {
      return this.sendRequest(`/Line/Mode/${this.serialiseArray(modes)}`, options, 'GET');
    }
    
    /**
     * @method module:TfLUnified/api.Line~getRoutesByServiceType
     * @description Gets information about the Routes supplied by modes [GET]
     * @param {String[]|String} types An array of line service types e.g. regular, night, ect
     * @param {Object} [options] optional parameters to be added to the request
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Route}
     * @see {module:TfLUnified/api.Line~listServiceTypes}
     * @returns {Object[]} an array of specified line information
     */
    getRoutesByServiceType(types, options) {
      return this.sendRequest(`/Line/Route/${this.serialiseArray(types)}`, options, 'GET');
    }
    
    /**
     * @method module:TfLUnified/api.Line~getLineStatusById
     * @description Gets line status information using a lines id [GET]
     * @param {String[]|String} types An array or a single string of line ids e.g. circle, northern, ect
     * @param {Object} [options] optional parameters to be added to the request
     * @param {Boolean} [options.detail] include details of any disruptions
     * @param {DateRanges} [options.dateRange] an object containing date ranges for getting line status for
     * @see {@link https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Status}
     * @returns {Object[]} an array of specified line information
     */
    getLineStatusById(ids, options) {
      return this.sendRequest((options && options.dateRange)
        ? `/Line/${this.serialiseArray(ids)}/Status/${this.serialiseDate(options.dateRange.startDate)}/to/${this.serialiseDate(options.dateRange.endDate)}`
        : `/Line/${this.serialiseArray(ids)}/Status`
      , options, 'GET');
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

 /**
  * @typedef {Object} DateRanges
  * @global
  * @description an object containing a start and end date for date range serches
  *
  * @property {Moment|Date|String} startDate a moment, native js date or ISO 8601 TZ time string
  * @property {Moment|Date|String} endDate a moment, native js date or ISO 8601 TZ time string
  */