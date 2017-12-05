## Modules

<dl>
<dt><a href="#module_TfLUnified/api">TfLUnified/api</a></dt>
<dd><p>The TfLUnified/api module acts as an abstracton layer for accessing the various TfL APIs</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#MetaMode">MetaMode</a> : <code>Object</code></dt>
<dd><p>a response object for detailing TfL transport Meta Modes</p>
</dd>
<dt><a href="#MetaSeverity">MetaSeverity</a> : <code>Object</code></dt>
<dd><p>a response object for detailing TfL severity codes</p>
</dd>
</dl>

<a name="module_TfLUnified/api"></a>

## TfLUnified/api
The TfLUnified/api module acts as an abstracton layer for accessing the various TfL APIs

**See**: [https://api.tfl.gov.uk/](https://api.tfl.gov.uk/)  

* [TfLUnified/api](#module_TfLUnified/api)
    * [.Line](#module_TfLUnified/api.Line) ⇐ [<code>TfLUnified</code>](#module_TfLUnified/api.TfLUnified)
        * [~listValidModes()](#module_TfLUnified/api.Line..listValidModes) ⇒ [<code>Array.&lt;MetaMode&gt;</code>](#MetaMode)
        * [~listSeverityCodes()](#module_TfLUnified/api.Line..listSeverityCodes) ⇒ [<code>Array.&lt;MetaSeverity&gt;</code>](#MetaSeverity)
        * [~listDisruptionCategories()](#module_TfLUnified/api.Line..listDisruptionCategories) ⇒ <code>Array.&lt;String&gt;</code>
        * [~listServiceTypes()](#module_TfLUnified/api.Line..listServiceTypes) ⇒ <code>Array.&lt;String&gt;</code>
        * [~getLinesById(ids)](#module_TfLUnified/api.Line..getLinesById) ⇒ <code>Array.&lt;Object&gt;</code>
        * [~getLineById(id)](#module_TfLUnified/api.Line..getLineById) ⇒ <code>Array.&lt;Object&gt;</code>
        * [~getLinesByModes(modes)](#module_TfLUnified/api.Line..getLinesByModes) ⇒ <code>Array.&lt;Object&gt;</code>
        * [~getLinesByMode(mode)](#module_TfLUnified/api.Line..getLinesByMode) ⇒ <code>Array.&lt;Object&gt;</code>
        * [~getLinesByServiceTypes(types)](#module_TfLUnified/api.Line..getLinesByServiceTypes) ⇒ <code>Array.&lt;Object&gt;</code>
        * [~getLinesByServiceType(mode)](#module_TfLUnified/api.Line..getLinesByServiceType) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.TfLUnified](#module_TfLUnified/api.TfLUnified)
        * [new TfLUnified(options)](#new_module_TfLUnified/api.TfLUnified_new)


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
    * [~getLinesById(ids)](#module_TfLUnified/api.Line..getLinesById) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~getLineById(id)](#module_TfLUnified/api.Line..getLineById) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~getLinesByModes(modes)](#module_TfLUnified/api.Line..getLinesByModes) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~getLinesByMode(mode)](#module_TfLUnified/api.Line..getLinesByMode) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~getLinesByServiceTypes(types)](#module_TfLUnified/api.Line..getLinesByServiceTypes) ⇒ <code>Array.&lt;Object&gt;</code>
    * [~getLinesByServiceType(mode)](#module_TfLUnified/api.Line..getLinesByServiceType) ⇒ <code>Array.&lt;Object&gt;</code>


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

<a name="module_TfLUnified/api.Line..getLinesById"></a>

#### Line~getLinesById(ids) ⇒ <code>Array.&lt;Object&gt;</code>
Gets information about the lines supplied by ids [GET]

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: <code>Array.&lt;Object&gt;</code> - an array of specified line information  
**See**

- [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Get](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Get)
- {Pmodule:TfLUnified/api.Line~getLinesById}


| Param | Type | Description |
| --- | --- | --- |
| ids | <code>Array.&lt;String&gt;</code> | An array of line ids e.g. circle, northern, ect |


* * *

<a name="module_TfLUnified/api.Line..getLineById"></a>

#### Line~getLineById(id) ⇒ <code>Array.&lt;Object&gt;</code>
Gets information about the lines supplied by id [GET]

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: <code>Array.&lt;Object&gt;</code> - an array of specified line information  
**See**

- [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Get](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Get)
- {Pmodule:TfLUnified/api.Line~getLinesById}


| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | a single line id to get information for e.g. circle, northern, ect |


* * *

<a name="module_TfLUnified/api.Line..getLinesByModes"></a>

#### Line~getLinesByModes(modes) ⇒ <code>Array.&lt;Object&gt;</code>
Gets information about the lines supplied by modes [GET]

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: <code>Array.&lt;Object&gt;</code> - an array of specified line information  
**See**

- [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_GetByMode](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_GetByMode)
- {module:TfLUnified/api.Line~listValidModes}


| Param | Type | Description |
| --- | --- | --- |
| modes | <code>Array.&lt;String&gt;</code> | An array of line modes e.g. tube, bus, ect |


* * *

<a name="module_TfLUnified/api.Line..getLinesByMode"></a>

#### Line~getLinesByMode(mode) ⇒ <code>Array.&lt;Object&gt;</code>
Gets information about the lines supplied by mode [GET]

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: <code>Array.&lt;Object&gt;</code> - an array of specified line information  
**See**

- [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_GetByMode](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_GetByMode)
- {module:TfLUnified/api.Line~listValidModes}


| Param | Type | Description |
| --- | --- | --- |
| mode | <code>String</code> | a single line id to get information for e.g. tube, bus, ect |


* * *

<a name="module_TfLUnified/api.Line..getLinesByServiceTypes"></a>

#### Line~getLinesByServiceTypes(types) ⇒ <code>Array.&lt;Object&gt;</code>
Gets information about the lines supplied by modes [GET]

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: <code>Array.&lt;Object&gt;</code> - an array of specified line information  
**See**

- [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Route](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Route)
- {module:TfLUnified/api.Line~listServiceTypes}


| Param | Type | Description |
| --- | --- | --- |
| types | <code>Array.&lt;String&gt;</code> | An array of line service types e.g. regular, night, ect |


* * *

<a name="module_TfLUnified/api.Line..getLinesByServiceType"></a>

#### Line~getLinesByServiceType(mode) ⇒ <code>Array.&lt;Object&gt;</code>
Gets information about the lines supplied by a service type [GET]

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: <code>Array.&lt;Object&gt;</code> - an array of specified line information  
**See**

- [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Route](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Route)
- {module:TfLUnified/api.Line~listServiceTypes}


| Param | Type | Description |
| --- | --- | --- |
| mode | <code>String</code> | a single line id to get information for e.g. regular, night, ect |


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

