## Modules

<dl>
<dt><a href="#module_TfLUnified/api">TfLUnified/api</a></dt>
<dd><p>The TfLUnified/api module acts as an abstracton layer for accessing the various TfL APIs</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ColorObj">ColorObj</a> : <code>Object</code></dt>
<dd><p>an object containing various colour codes</p>
</dd>
<dt><a href="#MetaMode">MetaMode</a> : <code>Object</code></dt>
<dd><p>a response object for detailing TfL transport Meta Modes</p>
</dd>
<dt><a href="#MetaSeverity">MetaSeverity</a> : <code>Object</code></dt>
<dd><p>a response object for detailing TfL severity codes</p>
</dd>
<dt><a href="#DateRanges">DateRanges</a> : <code>Object</code></dt>
<dd><p>an object containing a start and end date for date range serches</p>
</dd>
</dl>

<a name="module_TfLUnified/api"></a>

## TfLUnified/api
The TfLUnified/api module acts as an abstracton layer for accessing the various TfL APIs

**See**: [https://api.tfl.gov.uk/](https://api.tfl.gov.uk/)  

* [TfLUnified/api](#module_TfLUnified/api)
    * [.Color](#module_TfLUnified/api.Color) ⇐ [<code>TfLUnified</code>](#module_TfLUnified/api.TfLUnified)
        * [~getLineColor()](#module_TfLUnified/api.Color..getLineColor) ⇒ [<code>ColorObj</code>](#ColorObj)
        * [~getLineCMYKColor()](#module_TfLUnified/api.Color..getLineCMYKColor) ⇒ <code>Objct</code>
        * [~getLineRGBColor()](#module_TfLUnified/api.Color..getLineRGBColor) ⇒ <code>RGB</code>
        * [~getLineHexColor()](#module_TfLUnified/api.Color..getLineHexColor) ⇒ <code>String</code>
    * [.Line](#module_TfLUnified/api.Line) ⇐ [<code>TfLUnified</code>](#module_TfLUnified/api.TfLUnified)
        * [~listValidModes()](#module_TfLUnified/api.Line..listValidModes) ⇒ [<code>Array.&lt;MetaMode&gt;</code>](#MetaMode)
        * [~listSeverityCodes()](#module_TfLUnified/api.Line..listSeverityCodes) ⇒ [<code>Array.&lt;MetaSeverity&gt;</code>](#MetaSeverity)
        * [~listDisruptionCategories()](#module_TfLUnified/api.Line..listDisruptionCategories) ⇒ <code>Array.&lt;String&gt;</code>
        * [~listServiceTypes()](#module_TfLUnified/api.Line..listServiceTypes) ⇒ <code>Array.&lt;String&gt;</code>
        * [~getRoutesById(ids, [options])](#module_TfLUnified/api.Line..getRoutesById) ⇒ <code>Array.&lt;Object&gt;</code>
        * [~getRoutesByMode(modes, [options])](#module_TfLUnified/api.Line..getRoutesByMode) ⇒ <code>Array.&lt;Object&gt;</code>
        * [~getRoutesByServiceType(types, [options])](#module_TfLUnified/api.Line..getRoutesByServiceType) ⇒ <code>Array.&lt;Object&gt;</code>
        * [~getLineStatusById(ids, [options])](#module_TfLUnified/api.Line..getLineStatusById) ⇒ <code>Array.&lt;Object&gt;</code>
        * [~getLineStatusByMode(modes, [options])](#module_TfLUnified/api.Line..getLineStatusByMode) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.TfLUnified](#module_TfLUnified/api.TfLUnified)
        * [new TfLUnified(options)](#new_module_TfLUnified/api.TfLUnified_new)


* * *

<a name="module_TfLUnified/api.Color"></a>

### TfLUnified/api.Color ⇐ [<code>TfLUnified</code>](#module_TfLUnified/api.TfLUnified)
**Kind**: static class of [<code>TfLUnified/api</code>](#module_TfLUnified/api)  
**Extends**: [<code>TfLUnified</code>](#module_TfLUnified/api.TfLUnified)  
**See**: [https://api.tfl.gov.uk](https://api.tfl.gov.uk)  

* [.Color](#module_TfLUnified/api.Color) ⇐ [<code>TfLUnified</code>](#module_TfLUnified/api.TfLUnified)
    * [~getLineColor()](#module_TfLUnified/api.Color..getLineColor) ⇒ [<code>ColorObj</code>](#ColorObj)
    * [~getLineCMYKColor()](#module_TfLUnified/api.Color..getLineCMYKColor) ⇒ <code>Objct</code>
    * [~getLineRGBColor()](#module_TfLUnified/api.Color..getLineRGBColor) ⇒ <code>RGB</code>
    * [~getLineHexColor()](#module_TfLUnified/api.Color..getLineHexColor) ⇒ <code>String</code>


* * *

<a name="module_TfLUnified/api.Color..getLineColor"></a>

#### Color~getLineColor() ⇒ [<code>ColorObj</code>](#ColorObj)
gets the color of a line from its associated ID

**Kind**: inner method of [<code>Color</code>](#module_TfLUnified/api.Color)  
**Returns**: [<code>ColorObj</code>](#ColorObj) - an object containing various colour codes in different formats  

* * *

<a name="module_TfLUnified/api.Color..getLineCMYKColor"></a>

#### Color~getLineCMYKColor() ⇒ <code>Objct</code>
gets the cmyk color of a line from its associated ID

**Kind**: inner method of [<code>Color</code>](#module_TfLUnified/api.Color)  
**Returns**: <code>Objct</code> - an object containing the cmyk colour values for this line  

* * *

<a name="module_TfLUnified/api.Color..getLineRGBColor"></a>

#### Color~getLineRGBColor() ⇒ <code>RGB</code>
gets the rgb color of a line from its associated ID

**Kind**: inner method of [<code>Color</code>](#module_TfLUnified/api.Color)  
**Returns**: <code>RGB</code> - a rgb colour code for this line  

* * *

<a name="module_TfLUnified/api.Color..getLineHexColor"></a>

#### Color~getLineHexColor() ⇒ <code>String</code>
gets the hex color of a line from its associated ID

**Kind**: inner method of [<code>Color</code>](#module_TfLUnified/api.Color)  
**Returns**: <code>String</code> - a hex colour code for this line  

* * *

<a name="module_TfLUnified/api.Line"></a>

### TfLUnified/api.Line ⇐ [<code>TfLUnified</code>](#module_TfLUnified/api.TfLUnified)
**Kind**: static class of [<code>TfLUnified/api</code>](#module_TfLUnified/api)  
**Extends**: [<code>TfLUnified</code>](#module_TfLUnified/api.TfLUnified)  
**See**: [https://api.tfl.gov.uk](https://api.tfl.gov.uk)  

* [.Line](#module_TfLUnified/api.Line) ⇐ [<code>TfLUnified</code>](#module_TfLUnified/api.TfLUnified)
    * [~listValidModes()](#module_TfLUnified/api.Line..listValidModes) ⇒ [<code>Array.&lt;MetaMode&gt;</code>](#MetaMode)
    * [~listSeverityCodes()](#module_TfLUnified/api.Line..listSeverityCodes) ⇒ [<code>Array.&lt;MetaSeverity&gt;</code>](#MetaSeverity)
    * [~listDisruptionCategories()](#module_TfLUnified/api.Line..listDisruptionCategories) ⇒ <code>Array.&lt;String&gt;</code>
    * [~listServiceTypes()](#module_TfLUnified/api.Line..listServiceTypes) ⇒ <code>Array.&lt;String&gt;</code>
    * [~getRoutesById(ids, [options])](#module_TfLUnified/api.Line..getRoutesById) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~getRoutesByMode(modes, [options])](#module_TfLUnified/api.Line..getRoutesByMode) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~getRoutesByServiceType(types, [options])](#module_TfLUnified/api.Line..getRoutesByServiceType) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~getLineStatusById(ids, [options])](#module_TfLUnified/api.Line..getLineStatusById) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~getLineStatusByMode(modes, [options])](#module_TfLUnified/api.Line..getLineStatusByMode) ⇒ <code>Array.&lt;Object&gt;</code>


* * *

<a name="module_TfLUnified/api.Line..listValidModes"></a>

#### Line~listValidModes() ⇒ [<code>Array.&lt;MetaMode&gt;</code>](#MetaMode)
Lists all of the valid line transportation modes [GET]

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: [<code>Array.&lt;MetaMode&gt;</code>](#MetaMode) - an array of objects contianing the transportation modes  
**See**: [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaModes](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaModes)  

* * *

<a name="module_TfLUnified/api.Line..listSeverityCodes"></a>

#### Line~listSeverityCodes() ⇒ [<code>Array.&lt;MetaSeverity&gt;</code>](#MetaSeverity)
Lists all of the valid line severity codes [GET]

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: [<code>Array.&lt;MetaSeverity&gt;</code>](#MetaSeverity) - an array of objects contianing the severity code  
**See**: [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaSeverity](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaSeverity)  

* * *

<a name="module_TfLUnified/api.Line..listDisruptionCategories"></a>

#### Line~listDisruptionCategories() ⇒ <code>Array.&lt;String&gt;</code>
Lists all of the valid line disruption categories [GET]

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: <code>Array.&lt;String&gt;</code> - an array of strings contianing the disruption categories  
**See**: [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaDisruptionCategories](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaDisruptionCategories)  

* * *

<a name="module_TfLUnified/api.Line..listServiceTypes"></a>

#### Line~listServiceTypes() ⇒ <code>Array.&lt;String&gt;</code>
Lists all of the valid line service types [GET]

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: <code>Array.&lt;String&gt;</code> - an array of strings contianing the service types  
**See**: [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaServiceTypes](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaServiceTypes)  

* * *

<a name="module_TfLUnified/api.Line..getRoutesById"></a>

#### Line~getRoutesById(ids, [options]) ⇒ <code>Array.&lt;Object&gt;</code>
Gets information about the Routes supplied by ids [GET]

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: <code>Array.&lt;Object&gt;</code> - an array of specified line information  
**See**

- [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Get](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Get)
- [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_LineRoutesByIds](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_LineRoutesByIds)
- [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_RouteSequence](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_RouteSequence)


| Param | Type | Description |
| --- | --- | --- |
| ids | <code>Array.&lt;String&gt;</code> \| <code>String</code> | An array of line ids e.g. circle, northern, ect |
| [options] | <code>Object</code> | optional parameters to be added to the request |
| [options.serviceTypes] | <code>Array.&lt;String&gt;</code> \| <code>String</code> | An array or string of line service types e.g. regular, night, ect |
| [options.direction] | <code>String</code> | a direction in which to sequence the stations can be either: inbound, outbound, all |
| [options.excludeCrowd] | <code>Boolean</code> | should crowd line disruptions be exlcuded from the request |


* * *

<a name="module_TfLUnified/api.Line..getRoutesByMode"></a>

#### Line~getRoutesByMode(modes, [options]) ⇒ <code>Array.&lt;Object&gt;</code>
Gets information about the Routes supplied by modes [GET]

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: <code>Array.&lt;Object&gt;</code> - an array of specified line information  
**See**

- [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_GetByMode](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_GetByMode)
- {module:TfLUnified/api.Line~listValidModes}


| Param | Type | Description |
| --- | --- | --- |
| modes | <code>Array.&lt;String&gt;</code> \| <code>String</code> | An array of line modes e.g. tube, bus, ect |
| [options] | <code>Object</code> | optional parameters to be added to the request |
| [options.serviceTypes] | <code>Array.&lt;String&gt;</code> \| <code>String</code> | An array or string of line service types e.g. regular, night, ect |


* * *

<a name="module_TfLUnified/api.Line..getRoutesByServiceType"></a>

#### Line~getRoutesByServiceType(types, [options]) ⇒ <code>Array.&lt;Object&gt;</code>
Gets information about the Routes supplied by modes [GET]

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: <code>Array.&lt;Object&gt;</code> - an array of specified line information  
**See**

- [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Route](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Route)
- {module:TfLUnified/api.Line~listServiceTypes}


| Param | Type | Description |
| --- | --- | --- |
| types | <code>Array.&lt;String&gt;</code> \| <code>String</code> | An array of line service types e.g. regular, night, ect |
| [options] | <code>Object</code> | optional parameters to be added to the request |


* * *

<a name="module_TfLUnified/api.Line..getLineStatusById"></a>

#### Line~getLineStatusById(ids, [options]) ⇒ <code>Array.&lt;Object&gt;</code>
Gets line status information using a lines id [GET]

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: <code>Array.&lt;Object&gt;</code> - an array of specified line information  
**See**: [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Status](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Status)  

| Param | Type | Description |
| --- | --- | --- |
| ids | <code>Array.&lt;String&gt;</code> \| <code>String</code> | An array or a single string of line ids e.g. circle, northern, ect |
| [options] | <code>Object</code> | optional parameters to be added to the request |
| [options.detail] | <code>Boolean</code> | include details of any disruptions |
| [options.dateRange] | [<code>DateRanges</code>](#DateRanges) | an object containing date ranges for getting line status for |


* * *

<a name="module_TfLUnified/api.Line..getLineStatusByMode"></a>

#### Line~getLineStatusByMode(modes, [options]) ⇒ <code>Array.&lt;Object&gt;</code>
Gets line status information using a lines mode [GET]

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: <code>Array.&lt;Object&gt;</code> - an array of specified line information  
**See**

- [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_StatusByMode](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_StatusByMode)
- {module:TfLUnified/api.Line~listValidModes}


| Param | Type | Description |
| --- | --- | --- |
| modes | <code>Array.&lt;String&gt;</code> \| <code>String</code> | An array or a single string of line modes e.g. tube, bus, ect |
| [options] | <code>Object</code> | optional parameters to be added to the request |


* * *

<a name="module_TfLUnified/api.TfLUnified"></a>

### TfLUnified/api.TfLUnified
**Kind**: static class of [<code>TfLUnified/api</code>](#module_TfLUnified/api)  

* * *

<a name="new_module_TfLUnified/api.TfLUnified_new"></a>

#### new TfLUnified(options)

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 


* * *

<a name="ColorObj"></a>

## ColorObj : <code>Object</code>
an object containing various colour codes

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cmyk | <code>Object</code> | a cymk colour value |
| cmyk.c | <code>Number</code> | the cyan numerical amount |
| cmyk.m | <code>Number</code> | the majenta numerical amount |
| cmyk.y | <code>Number</code> | the yellow numerical amount |
| cmyk.k | <code>Number</code> | the key numerical amount |
| rgb | <code>RGB</code> | the rgb colour code as an { r: ) object |
| hex | <code>String</code> | the hex colour code |


* * *

<a name="MetaMode"></a>

## MetaMode : <code>Object</code>
a response object for detailing TfL transport Meta Modes

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| isTflService | <code>Boolean</code> | 
| isFarePaying | <code>Boolean</code> | 
| isScheduledService | <code>Boolean</code> | 
| modeName | <code>String</code> | 


* * *

<a name="MetaSeverity"></a>

## MetaSeverity : <code>Object</code>
a response object for detailing TfL severity codes

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| modeName | <code>String</code> | 
| severityLevel | <code>Number</code> | 
| description | <code>String</code> | 


* * *

<a name="DateRanges"></a>

## DateRanges : <code>Object</code>
an object containing a start and end date for date range serches

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| startDate | <code>Moment</code> \| <code>Date</code> \| <code>String</code> | a moment, native js date or ISO 8601 TZ time string |
| endDate | <code>Moment</code> \| <code>Date</code> \| <code>String</code> | a moment, native js date or ISO 8601 TZ time string |


* * *

