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


* * *

<a name="module_TfLUnified/api.Line..listValidModes"></a>

#### Line~listValidModes() ⇒ [<code>Array.&lt;MetaMode&gt;</code>](#MetaMode)
Lists all of the valid line transportation modes

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: [<code>Array.&lt;MetaMode&gt;</code>](#MetaMode) - an array of objects contianing the transportation modes  
**See**: [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaModes](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaModes)  

* * *

<a name="module_TfLUnified/api.Line..listSeverityCodes"></a>

#### Line~listSeverityCodes() ⇒ [<code>Array.&lt;MetaSeverity&gt;</code>](#MetaSeverity)
Lists all of the valid line severity codes

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: [<code>Array.&lt;MetaSeverity&gt;</code>](#MetaSeverity) - an array of objects contianing the severity code  
**See**: [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaSeverity](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaSeverity)  

* * *

<a name="module_TfLUnified/api.Line..listDisruptionCategories"></a>

#### Line~listDisruptionCategories() ⇒ <code>Array.&lt;String&gt;</code>
Lists all of the valid line disruption categories

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: <code>Array.&lt;String&gt;</code> - an array of strings contianing the disruption categories  
**See**: [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaDisruptionCategories](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaDisruptionCategories)  

* * *

<a name="module_TfLUnified/api.Line..listServiceTypes"></a>

#### Line~listServiceTypes() ⇒ <code>Array.&lt;String&gt;</code>
Lists all of the valid line service types

**Kind**: inner method of [<code>Line</code>](#module_TfLUnified/api.Line)  
**Returns**: <code>Array.&lt;String&gt;</code> - an array of strings contianing the service types  
**See**: [https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaServiceTypes](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_MetaServiceTypes)  

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

