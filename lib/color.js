'use strict';

const lineColors = require('../db/lineColors.json');

/**
 * @method ColorMixin
 * @private
 * @param {Class} SuperClass a superclass to apply the mixin too
 */
const ColorMixin = (SuperClass) => {
  /**
   * @class
   * @memberof module:TfLUnified/api
   * @augments module:TfLUnified/api.TfLUnified
   * @see {@link http://content.tfl.gov.uk/tfl-colour-standards-issue04.pdf}
   */
  const Color = class extends SuperClass {
    /**
     * @method module:TfLUnified/api.Color~getValue
     * @description gets the line colour object from the linecolor db
     * @param {String} lineId the string id of the line to get the colour for
     * @private
     * @returns {Object}
     */
    getValue(lineId) {
      return (lineId && lineColors[lineId]) ? lineColors[lineId] : {};
    }

    /**
     * @method module:TfLUnified/api.Color~getLineColor
     * @description gets the color of a line from its associated ID
     * @param {LineId|String} lineId a stirng containing the line id e.g. bakerloo, circle, ect
     * @see {@link http://content.tfl.gov.uk/tfl-colour-standards-issue04.pdf}
     * @returns {ColorObj} an object containing various colour codes in different formats
     */
    getLineColor(lineId) {
      return this.getValue(lineId);
    }

    /**
     * @method module:TfLUnified/api.Color~getLineCMYKColor
     * @description gets the cmyk color of a line from its associated ID
     * @param {LineId|String} lineId a stirng containing the line id e.g. bakerloo, circle, ect
     * @see {@link http://content.tfl.gov.uk/tfl-colour-standards-issue04.pdf}
     * @returns {Objct} an object containing the cmyk colour values for this line
     */
    getLineCMYKColor(lineId) {
      return this.getValue(lineId).cmyk || null;
    }

    /**
     * @method module:TfLUnified/api.Color~getLineRGBColor
     * @description gets the rgb color of a line from its associated ID
     * @param {LineId|String} lineId a stirng containing the line id e.g. bakerloo, circle, ect
     * @see {@link http://content.tfl.gov.uk/tfl-colour-standards-issue04.pdf}
     * @returns {Object} a rgb colour code for this line
     */
    getLineRGBColor(lineId) {
      return this.getValue(lineId).rgb || null;
    }

    /**
     * @method module:TfLUnified/api.Color~getLineHexColor
     * @description gets the hex color of a line from its associated ID
     * @param {LineId|String} lineId a stirng containing the line id e.g. bakerloo, circle, ect
     * @see {@link http://content.tfl.gov.uk/tfl-colour-standards-issue04.pdf}
     * @returns {String} a hex colour code for this line
     */
    getLineHexColor(lineId) {
      return this.getValue(lineId).hex || null;
    }
  };
  return Color;
};

module.exports = ColorMixin;

/**
 * @typedef {Object} ColorObj
 * @global
 * @description an object containing various colour codes
 *
 * @property {Object} cmyk a cymk colour value
 * @property {Number} cmyk.c the cyan numerical amount
 * @property {Number} cmyk.m the majenta numerical amount
 * @property {Number} cmyk.y the yellow numerical amount
 * @property {Number} cmyk.k the key numerical amount
 *
 * @property {RGB} rgb the rgb colour code as an { r: ) object
 *
 * @property {String} hex the hex colour code
 */
