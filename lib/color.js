'use strict';

const lineColors = {
  bakerloo: {
    cmyk: { c: 26, m: 67, y: 89, k: 19 },
    rgb: rgb(178, 99, 0),
    hex: '#B26300'
  },
  central: {
    cmyk: { c: 0, m: 95, y: 100, k: 0 },
    rgb: rgb(220, 36, 31),
    hex: '#DC241F'
  },
  circle: {
    cmyk: { c: 0, m: 20, y: 96, k: 0 },
    rgb: rgb(255, 211, 41),
    hex: '#FFD329'
  },
  district: {
    cmyk: { c: 95, m: 24, y: 100, k: 12 },
    rgb: rgb(0, 125, 50),
    hex: '#007D32'
  },
  "hamersmith-city": {
    cmyk: { c: 2, m: 50, y: 17, k: 0 },
    rgb: rgb(244, 169, 190),
    hex: '#F4A9BE'
  },
  jubilee: {
    cmyk: { c: 53, m: 37, y: 34, k: 16 },
    rgb: rgb(161, 165, 167),
    hex: '#A1A5A7'
  },
  metropolitan: {
    cmyk: { c: 38, m: 100, y: 27, k: 27 },
    rgb: rgb(155, 0, 88),
    hex: '#9B0058'
  },
  northern: {
    cmyk: { c: 0, m: 0, y: 0, k: 100 },
    rgb: rgb(0, 0, 0),
    hex: '#000000'
  },
  piccadilly: {
    cmyk: { c: 100, m: 88, y: 0, k: 5 },
    rgb: rgb(0, 25, 168),
    hex: '#0019A8'
  },
  victoria: {
    cmyk: { c: 80, m: 15, y: 0, k: 0 },
    rgb: rgb(0, 152, 216),
    hex: '#0098D8'
  },
  "waterloo-city": {
    cmyk: { c: 57, m: 0, y: 40, k: 0 },
    rgb: rgb(147, 206, 186),
    hex: '#93CEBA'
  },
  elizabeth: {
    cmyk: { c: 73, m: 81, y: 0, k: 0 },
    rgb: rgb(147, 100, 204),
    hex: '#9364CC'
  },
  "london-overground": {
    cmyk: { c: 0, m: 61, y: 97, k: 0 },
    rgb: rgb(239, 123, 16),
    hex: '#EF7B10'
  },
  tram: {
    cmyk: { c: 57, m: 0, y: 100, k: 0 },
    rgb: rgb(0, 189, 25),
    hex: '#00BD19'
  },
  emerates: {
    cmyk: { c: 0, m: 100, y: 81, k: 4 },
    rgb: rgb(220, 36, 31),
    hex: '#DC241F'
  },
  cycles: {
    cmyk: { c: 0, m: 93, y: 100, k: 0 },
    rgb: rgb(220, 36, 31),
    hex: '#DC241F'
  },
  river: {
    cmyk: { c: 85, m: 19, y: 0, k: 0 },
    rgb: rgb(0, 160, 226),
    hex: '#00A0E2'
  },
  underground: {
    cmyk: { c: 100, m: 88, y: 0, k: 5 },
    rgb: rgb(0, 25, 168),
    hex: '#0019A8'
  },
  busses: {
    cmyk: { c: 0, m: 95, y: 100, k: 0 },
    rgb: rgb(220, 36, 31),
    hex: '#DC241F'
  },
  "dial-a-ride": {
    cmyk: { c: 57, m: 45, y: 0, k: 0 },
    rgb: rgb(132, 128, 215),
    hex: '#8480D7'
  },
  visitor: {
    cmyk: { c: 0, m: 100, y: 0, k: 0 },
    rgb: rgb(220, 0, 107),
    hex: '#DC006B'
  },
  coaches: {
    cmyk: { c: 0, m: 30, y: 100, k: 0 },
    rgb: rgb(241, 171, 0),
    hex: '#F1AB00'
  },
  dlr: {
    cmyk: { c: 87, m: 0, y: 38, k: 0 },
    rgb: rgb(0, 175, 173),
    hex: '#00AFAD'
  },
  dlr: {
    cmyk: { c: 87, m: 0, y: 38, k: 0 },
    rgb: rgb(0, 175, 173),
    hex: '#00AFAD'
  },
  "tfl-rail": {
    cmyk: { c: 100, m: 88, y: 38, k: 5 },
    rgb: rgb(0, 25, 168),
    hex: '#0019A8'
  }
};

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
   * @see {@link https://api.tfl.gov.uk}
   */
  const Color = class extends SuperClass {
    /**
     * @method module:TfLUnified/api.Color~getLineColor
     * @description gets the color of a line from its associated ID
     * @returns {ColorObj} an object containing various colour codes in different formats 
     */
    getLineColor(lineId) {
      return (lineId && lineColors[lineId])
        ? lineColors[lineId] || null
        : null;
    }
    
    /**
     * @method module:TfLUnified/api.Color~getLineCMYKColor
     * @description gets the cmyk color of a line from its associated ID
     * @returns {Objct} an object containing the cmyk colour values for this line 
     */
    getLineCMYKColor(lineId) {
      return (lineId && lineColors[lineId])
        ? lineColors[lineId].cmyk || null
        : null;
    }
    
    /**
     * @method module:TfLUnified/api.Color~getLineRGBColor
     * @description gets the rgb color of a line from its associated ID
     * @returns {RGB} a rgb colour code for this line 
     */
    getLineRGBColor(lineId) {
      return (lineId && lineColors[lineId])
        ? lineColors[lineId].rgb || null
        : null;
    }

    /**
     * @method module:TfLUnified/api.Color~getLineHexColor
     * @description gets the hex color of a line from its associated ID
     * @returns {String} a hex colour code for this line 
     */
    getLineHexColor(lineId) {
      return (lineId && lineColors[lineId])
        ? lineColors[lineId].hex || null
        : null;
    }
  };
  return Color;
}

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
  * @property {RGB} rgb the rgb colour code as an rgb() object
  *
  * @property {String} hex the hex colour code
  */