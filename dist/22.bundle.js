(function(){(this||window).webpackJsonp.registerAbsMids({"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/WMSLayer":485,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/support/ExportWMSImageParameters":1658,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/support/wmsUtils":1754,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/support/WMSSublayer":2028})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1658:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(11),r(2),r(0),r(4),r(16),r(1),r(1754)],void 0===(a=function(e,t,r,n,a,i,o,s,l){var p={visible:"visibleSublayers"},u=[102100,3857,102113,900913],y=[3395,54004];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._layerHandles=new o,t.extent=null,t}return n(t,e),Object.defineProperty(t.prototype,"layer",{set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new o),this._layerHandles.add([e.sublayers.on("change",function(){return t.notifyChange("visibleSublayers")}),e.on("wms-sublayer-update",function(e){return t.notifyChange(p[e.propertyName])})])))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layers",{get:function(){return this.visibleSublayers.map(function(e){return e.name}).join(",")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},set:function(e){this._set("version",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visibleSublayers",{get:function(){var e=this.layer.sublayers,t=[],r=function(e){e.visible&&(e.sublayers?e.sublayers.forEach(r):t.unshift(e))};return e&&e.forEach(r),t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"wkid",{get:function(){var e=this.extent,t=this.layer.spatialReferences,r=e.spatialReference&&e.spatialReference.wkid;t&&-1===t.indexOf(r)&&e.spatialReference.latestWkid&&(r=e.spatialReference.latestWkid);var n=u.some(function(e){return e===r});if(!t)return r;if(n){var a=[];t.forEach(function(e){u.indexOf(e)>-1&&a.push(e)}),a.length||t.forEach(function(e){y.indexOf(e)>-1&&a.push(e)}),r=a.length>0?a[0]:u[0]}return r},enumerable:!0,configurable:!0}),t.prototype.toJSON=function(){var e=this.layer,t=this.extent,n=this.wkid;e.spatialReferences&&-1===e.spatialReferences.indexOf(n)&&t.spatialReference.latestWkid&&(n=t.spatialReference.latestWkid);var a={bbox:"1.3.0"===e.version&&l.coordsReversed(n)?t.ymin+","+t.xmin+","+t.ymax+","+t.xmax:t.xmin+","+t.ymin+","+t.xmax+","+t.ymax,format:e.imageFormat,request:"GetMap",service:"WMS",styles:"",transparent:e.imageTransparency,version:e.version};return isNaN(n)||("1.3.0"===e.version?a.crs="EPSG:"+n:a.srs="EPSG:"+n),r({},a,{layers:this.layers})},a([s.property()],t.prototype,"extent",void 0),a([s.property()],t.prototype,"layer",null),a([s.property({readOnly:!0,dependsOn:["visibleSublayers"]})],t.prototype,"layers",null),a([s.property({dependsOn:["layers","layer.imageTransparency"]})],t.prototype,"version",null),a([s.property({readOnly:!0,dependsOn:["layer.sublayers"]})],t.prototype,"visibleSublayers",null),a([s.property()],t.prototype,"wkid",null),a([s.subclass("esri.layers.support.ExportWMSImageParameters")],t)}(s.declared(i))}.apply(null,n))||(e.exports=a)},1754:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(8),r(19),r(18),r(20)],void 0===(a=function(e,t,r,n,a,i){function o(e){return m.some(function(t){var r=t[0],n=t[1];return e>=r&&e<=n})}function s(e,t){var r=t&&t.getElementsByTagName(e);return r&&r.length>0?r[0]:null}function l(e,t,r){var n=s(e,t);return n?n.textContent:r}function p(e,t,r){if(!e)return null;var n,o,s,l,p=parseFloat(e.getAttribute("minx")),u=parseFloat(e.getAttribute("miny")),y=parseFloat(e.getAttribute("maxx")),f=parseFloat(e.getAttribute("maxy"));r?(n=isNaN(u)?-Number.MAX_VALUE:u,o=isNaN(p)?-Number.MAX_VALUE:p,s=isNaN(f)?Number.MAX_VALUE:f,l=isNaN(y)?Number.MAX_VALUE:y):(n=isNaN(p)?-Number.MAX_VALUE:p,o=isNaN(u)?-Number.MAX_VALUE:u,s=isNaN(y)?Number.MAX_VALUE:y,l=isNaN(f)?Number.MAX_VALUE:f);var c=new i({wkid:t});return new a({xmin:n,ymin:o,xmax:s,ymax:l,spatialReference:c})}function u(e,t){var r=s("DCPType",s(t,e));if(r){var n=s("HTTP",r);if(n){var a=s("Get",n);if(a){var i=function(e,t,r,n){var a=s(e,r);return a?a.getAttribute(t):n}("OnlineResource","xlink:href",a,null);if(i)return i.indexOf("&")===i.length-1&&(i=i.substring(0,i.length-1)),c(i,["service","request"])}}}return null}function y(e,t){var r=e.getElementsByTagName("Operation");if(r&&r.length){var n=[];return Array.prototype.slice.call(r).forEach(function(e){if(e.getAttribute("name")===t){var r=e.getElementsByTagName("Format");Array.prototype.slice.call(r).forEach(function(e){n.push(e.textContent)})}}),n}var a=s(t,e).getElementsByTagName("Format");return Array.prototype.slice.call(a).map(function(e){return e.textContent})}function f(e,t,r){if(!e)return null;var n={id:d++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},u=s("LatLonBoundingBox",e),y=s("EX_GeographicBoundingBox",e),c=null;u&&(c=p(u,4326)),y&&((c=new a(0,0,0,0,new i({wkid:4326}))).xmin=parseFloat(l("westBoundLongitude",y,0)),c.ymin=parseFloat(l("southBoundLatitude",y,0)),c.xmax=parseFloat(l("eastBoundLongitude",y,0)),c.ymax=parseFloat(l("northBoundLatitude",y,0))),u||y||(c=new a(-180,-90,180,90,new i({wkid:4326})));var m=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(function(e){if("Name"===e.nodeName)n.name=e.textContent||"";else if("Title"===e.nodeName)n.title=e.textContent||"";else if("Abstract"===e.nodeName)n.description=e.textContent||"";else if("BoundingBox"===e.nodeName){var a=e.getAttribute(m);if(a&&0===a.indexOf("EPSG:"))0===(l=parseInt(a.substring(5),10))||isNaN(l)||c||(c="1.3.0"===t?p(e,l,o(l)):p(e,l));var i=a&&a.indexOf(":");if(i&&i>-1){var l;0===(l=parseInt(a.substring(i+1,a.length),10))||isNaN(l)||(l=h[l]?h[l]:l);var u="1.3.0"===t?p(e,l,o(l)):p(e,l);n.fullExtents.push(u)}}else if(e.nodeName===m){e.textContent.split(" ").forEach(function(e){0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(h[e]&&(e=h[e]),-1===n.spatialReferences.indexOf(e)&&n.spatialReferences.push(e))})}else if("Style"!==e.nodeName||n.legendURL){if("Layer"===e.nodeName){var y=f(e,t,r);y&&(y.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(y))}}else{var d=s("LegendURL",e);if(d){var b=s("OnlineResource",d);b&&(n.legendURL=b.getAttribute("xlink:href"),r&&(n.legendURL=n.legendURL.replace(/^http:/i,"https:")))}}}),n.extent=c&&c.toJSON(),n}function c(e,t){var r=[],a=n.urlToObject(e);for(var i in a.query)a.query.hasOwnProperty(i)&&-1===t.indexOf(i.toLowerCase())&&r.push(i+"="+a.query[i]);return a.path+(r.length?"?"+r.join("&"):"")}Object.defineProperty(t,"__esModule",{value:!0});var d,m=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],h={84:4326,83:4269,27:4267};t.parseCapabilities=function(e,t){if(e){d=-1,"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));var n=e.documentElement;if("ServiceExceptionReport"===n.nodeName){var i=Array.prototype.slice.call(n.childNodes).map(function(e){return e.textContent}).join("\r\n");throw new r("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",i)}var o=s("Layer",n);if(o){var p="WMS_Capabilities"===n.nodeName||"WMT_MS_Capabilities"===n.nodeName?n.getAttribute("version"):"1.3.0",c=s("Service",n),m=l("Title",c,"")||l("Name",c,""),h=l("AccessConstraints",c,""),b=l("Abstract",c,""),g=parseInt(l("MaxWidth",c,5e3),10),v=parseInt(l("MaxHeight",c,5e3),10),x=s("Capability",n),w=y(n,"GetMap"),E=t&&t.toLowerCase().indexOf("https")>-1,O=u(n,"GetMap");E&&(O=O.replace(/^http:/i,"https:"));var N,S=f(o,p,E),I=0;if(Array.prototype.slice.call(x.childNodes).forEach(function(e){"Layer"===e.nodeName&&(0===I?N=e:1===I?(S.name&&(S.name="",S.sublayers.push(f(N,p,E))),S.sublayers.push(f(e,p,E))):S.sublayers.push(f(e,p,E)),I++)}),!S)return null;var _,R,P=[],U=S.fullExtents;if((P=S.sublayers)||(P=[]),0===P.length&&P.push(S),!(_=S.extent)){var L=new a(P[0].extent);S.extent=L.toJSON(),_=S.extent}if(!(R=S.spatialReferences).length&&P.length>0){var j=function(e){var t=[];return e.sublayers.forEach(function(e){!t.length&&e.spatialReferences.length&&(t=e.spatialReferences||j(e))}),t};P.forEach(function(e){R.length||(R=e.spatialReferences||j(e))})}var A,F=u(n,"GetFeatureInfo");if(F){var M=y(n,"GetFeatureInfo");M.indexOf("text/html")>-1?A="text/html":M.indexOf("text/plain")>-1&&(A="text/plain"),E&&(F=F.replace(/^http:/i,"https:"))}if(!A){var C=function(e){e&&(e.queryable=!1,e.sublayers&&e.sublayers.forEach(function(e){C(e)}))};C(S)}return{copyright:h,description:b,extent:_,fullExtents:U,featureInfoFormat:A,featureInfoUrl:F,mapUrl:O,maxImageWidth:g,maxImageHeight:v,layers:function e(t){var r=[];return t.forEach(function(t){r.push(t),t.sublayers&&t.sublayers.length&&(r=r.concat(e(t.sublayers)),delete t.sublayers)}),r}(P),spatialReferences:R,supportedImageFormatTypes:w,title:m,version:p}}}},t.coordsReversed=o,t.getPopupLayers=function(e){return e.length?e.filter(function(e){return e.popupEnabled&&e.name&&e.queryable}).map(function(e){return e.name}).join(","):""}}.apply(null,n))||(e.exports=a)},2028:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(2),r(0),r(92),r(17),r(16),r(115),r(1),r(38),r(18)],void 0===(a=function(e,t,r,n,a,i,o,s,l,p,u){var y=0;return function(e){function t(t){var r=e.call(this)||this;return r._sublayersHandles=new o,r.fullExtents=null,r.featureInfoFormat=null,r.featureInfoUrl=null,r.legendUrl=null,r.legendEnabled=!0,r.popupEnabled=!1,r.queryable=!1,r.spatialReferences=null,r}var a;return r(t,e),a=t,Object.defineProperty(t.prototype,"description",{get:function(){return this._get("description")},set:function(e){this._set("description",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullExtent",{get:function(){return this._get("fullExtent")},set:function(e){this._set("fullExtent",e)},enumerable:!0,configurable:!0}),t.prototype.readExtent=function(e,t,r){return(e=t.extent)?u.fromJSON(e):null},Object.defineProperty(t.prototype,"id",{get:function(){var e=this._get("id");return null==e?y++:e},set:function(e){this._set("id",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layer",{set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(function(t){return t.layer=e})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._get("name")},set:function(e){this._set("name",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sublayers",{set:function(e){var t=this,r=this._get("sublayers");r&&(r.forEach(function(e){e.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach(function(e){e.parent=t,e.layer=t.layer}),this._sublayersHandles.add([e.on("after-add",function(e){var r=e.item;r.parent=t,r.layer=t.layer}),e.on("after-remove",function(e){var t=e.item;t.parent=null,t.layer=null})])),this._set("sublayers",e)},enumerable:!0,configurable:!0}),t.prototype.castSublayers=function(e){return p.default(i.ofType(a),e)},Object.defineProperty(t.prototype,"title",{get:function(){return this._get("title")},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return this._get("visible")},set:function(e){this._setAndNotifyLayer("visible",e)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){var e=new a;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map(function(e){return e.clone()})),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map(function(e){return e.clone()})),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map(function(e){return e})),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e},t.prototype._setAndNotifyLayer=function(e,t){var r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))},n([l.property()],t.prototype,"description",null),n([l.property({value:null})],t.prototype,"fullExtent",null),n([l.reader("fullExtent",["extent"])],t.prototype,"readExtent",null),n([l.property()],t.prototype,"fullExtents",void 0),n([l.property()],t.prototype,"featureInfoFormat",void 0),n([l.property()],t.prototype,"featureInfoUrl",void 0),n([l.property({type:String,json:{write:{ignoreOrigin:!0}}})],t.prototype,"id",null),n([l.property({type:String,json:{origins:{"web-document":{read:{source:"legendUrl"},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],t.prototype,"legendUrl",void 0),n([l.property({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],t.prototype,"legendEnabled",void 0),n([l.property({value:null})],t.prototype,"layer",null),n([l.property({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],t.prototype,"name",null),n([l.property()],t.prototype,"parent",void 0),n([l.property({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],t.prototype,"popupEnabled",void 0),n([l.property({type:Boolean,json:{write:{ignoreOrigin:!0}}})],t.prototype,"queryable",void 0),n([l.property()],t.prototype,"sublayers",null),n([l.cast("sublayers")],t.prototype,"castSublayers",null),n([l.property({type:[Number],json:{read:{source:"spatialReferences"}}})],t.prototype,"spatialReferences",void 0),n([l.property({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],t.prototype,"title",null),n([l.property({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],t.prototype,"visible",null),a=n([l.subclass("esri.layers.support.WMSSublayer")],t)}(l.declared(s))}.apply(null,n))||(e.exports=a)},485:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(11),r(2),r(0),r(91),r(425),r(27),r(17),r(446),r(16),r(6),r(1),r(85),r(18),r(20),r(75),r(110),r(109),r(417),r(205),r(1658),r(2028),r(1754)],void 0===(a=function(e,t,n,a,i,o,s,l,p,u,y,f,c,d,m,h,b,g,v,x,w,E,O,N){function S(e,t){return e.some(function(e){for(var r in e)if(d.willPropertyWrite(e,r,null,t))return!0;return!1})}function I(e,t,r){var n=[],a=new Map;return e.forEach(function(e){var i=new O;if(i.read(e,t),r&&-1===r.indexOf(i.name)&&(i.visible=!1),a[i.id]=i,null!=e.parentLayerId&&-1!==e.parentLayerId){var o=a[e.parentLayerId];o.sublayers||(o.sublayers=[]),o.sublayers.unshift(i)}else n.unshift(i)}),n}return function(e){function t(t,r){var n=e.call(this)||this;return n._sublayersHandles=new y,n.allSublayers=new u({root:n,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),n.customParameters=null,n.customLayerParameters=null,n.copyright=null,n.description=null,n.fullExtent=null,n.fullExtents=null,n.featureInfoFormat=null,n.featureInfoUrl=null,n.imageFormat=null,n.imageMaxHeight=2048,n.imageMaxWidth=2048,n.imageTransparency=!0,n.legendEnabled=!0,n.mapUrl=null,n.operationalLayerType="WMS",n.spatialReference=null,n.spatialReferences=null,n.sublayers=null,n.type="wms",n.version=null,n.watch("sublayers",function(e,t){t&&(t.forEach(function(e){e.layer=null}),n._sublayersHandles.removeAll(),n._sublayersHandles=null),e&&(e.forEach(function(e){e.parent=n,e.layer=n}),n._sublayersHandles||(n._sublayersHandles=new y),n._sublayersHandles.add([e.on("after-add",function(e){var t=e.item;t.parent=n,t.layer=n}),e.on("after-remove",function(e){var t=e.item;t.parent=null,t.layer=null})]))},!0),n}return a(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?n({url:e},t):e},t.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]}).then(function(){return e._fetchService()})),this.when()},t.prototype.readFullExtentFromItemOrMap=function(e,t,r){var n=t.extent,a=t.spatialReferences;return new m(a&&a.length>0?{xmin:n[0][0],ymin:n[0][1],xmax:n[1][0],ymax:n[1][1],spatialReference:a[0]}:{xmin:n[0][0],ymin:n[0][1],xmax:n[1][0],ymax:n[1][1]})},t.prototype.writeFullExtent=function(e,t,r,n){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]},t.prototype.readImageFormat=function(e,t){var r=t.supportedImageFormatTypes;return r&&r.indexOf("image/png")>-1?"image/png":r&&r[0]},t.prototype.readSpatialReferenceFromItemOrDocument=function(e,t,r){return new h(t.spatialReferences[0])},t.prototype.writeSpatialReferences=function(e,t,r,n){var a=this.spatialReference&&this.spatialReference.wkid;e&&a?(t.spatialReferences=e.filter(function(e){return e!==a}),t.spatialReferences.unshift(a)):t.spatialReferences=e},t.prototype.readSublayersFromItemOrMap=function(e,t,r){return I(t.layers,r,t.visibleLayers)},t.prototype.readSublayers=function(e,t,r){return I(t.layers,r)},t.prototype.writeSublayers=function(e,t,r,a){t.layers=[];var i=new Map,o=e.flatten(function(e){var t=e.sublayers;return t&&t.toArray()}).toArray();o.forEach(function(e){"number"==typeof e.parent.id&&(i.has(e.parent.id)?i.get(e.parent.id).push(e.id):i.set(e.parent.id,[e.id]))}),o.forEach(function(e){var r=n({sublayer:e},a),o=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},r);if(i.has(e.id)&&(o.sublayerIds=i.get(e.id)),!e.sublayers&&e.name){var s=e.write({},r);delete s.id,t.layers.push(s)}}),t.visibleLayers=o.filter(function(e){return e.visible&&!e.sublayers}).map(function(e){return e.name})},t.prototype.createExportImageParameters=function(e){return this._exportWMSImageParameters=new E({layer:this,extent:e}),this._exportWMSImageParameters.toJSON()},t.prototype.fetchImage=function(e,t,r,a){var i=this.mapUrl,o={responseType:"image",allowImageDataAccess:a&&a.allowImageDataAccess||!1,query:this._mixCustomParameters(n({width:t,height:r},this.createExportImageParameters(e)))};return a&&a.timestamp&&(o.query=n({_ts:a.timestamp},o.query)),l(i,o).then(function(e){return e.data})},t.prototype.fetchFeatureInfo=function(e,t,r,a,i){var p=this,u=N.getPopupLayers(this._exportWMSImageParameters.visibleSublayers);if(!this.featureInfoUrl||!u)return null;var y="1.3.0"===this.version?{I:a,J:i}:{x:a,y:i},f=n({query_layers:u,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r},y),c=n({},this.createExportImageParameters(e),f);return c=this._mixCustomParameters(c),l(this.featureInfoUrl,{query:c,responseType:"text"}).then(function(e){var t=p.featureInfoUrl;for(var r in t+=-1===t.indexOf("?")?"?":"",c)t+="?"===t.substring(t.length-1,t.length)?"":"&",t+=r+"="+c[r];return new o({sourceLayer:p,popupTemplate:new s({title:p.title,content:'<iframe src="'+t+'" frameborder="0" marginwidth="0" marginheight="0">'+e.data+"</iframe>"})})})},t.prototype.findSublayerById=function(e){return this.allSublayers.find(function(t){return t.id===e})},t.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return f.create(function(e){return r.e(60).then(function(){var t=[r(2165)];e.apply(null,t)}.bind(this)).catch(r.oe)});case"3d":return f.create(function(e){return Promise.all([r.e(1),r.e(2),r.e(3),r.e(5),r.e(61)]).then(function(){var t=[r(2166)];e.apply(null,t)}.bind(this)).catch(r.oe)})}},t.prototype._fetchService=function(){var e=this;return f.resolve().then(function(){return e.resourceInfo?{ssl:!1,data:e.resourceInfo}:(e.parsedUrl.query&&e.parsedUrl.query.service&&(e.parsedUrl.query.SERVICE=e.parsedUrl.query.service,delete e.parsedUrl.query.service),e.parsedUrl.query&&e.parsedUrl.query.request&&(e.parsedUrl.query.REQUEST=e.parsedUrl.query.request,delete e.parsedUrl.query.request),l(e.parsedUrl.path,{query:n({SERVICE:"WMS",REQUEST:"GetCapabilities"},e.parsedUrl.query,e.customParameters),responseType:"xml"}))}).then(function(t){t.ssl&&(e.url=e.url.replace(/^http:/i,"https:")),e.resourceInfo||(t.data=N.parseCapabilities(t.data,e.url)),t.data&&e.read(t.data,{origin:"service"})})},t.prototype._mixCustomParameters=function(e){if(!this.customLayerParameters&&!this.customParameters)return e;var t=n({},this.customParameters,this.customLayerParameters);for(var r in t)e[r.toLowerCase()]=t[r];return e},i([c.property({readOnly:!0})],t.prototype,"allSublayers",void 0),i([c.property({json:{write:!0}})],t.prototype,"customParameters",void 0),i([c.property({json:{write:!0}})],t.prototype,"customLayerParameters",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"copyright",void 0),i([c.property()],t.prototype,"description",void 0),i([c.property({json:{origins:{service:{read:{source:"extent"}}}}})],t.prototype,"fullExtent",void 0),i([c.reader(["web-document","portal-item"],"fullExtent",["extent"])],t.prototype,"readFullExtentFromItemOrMap",null),i([c.writer(["web-document","portal-item"],"fullExtent")],t.prototype,"writeFullExtent",null),i([c.property()],t.prototype,"fullExtents",void 0),i([c.property({type:String,json:{write:{ignoreOrigin:!0}}})],t.prototype,"featureInfoFormat",void 0),i([c.property({type:String,json:{write:{ignoreOrigin:!0}}})],t.prototype,"featureInfoUrl",void 0),i([c.property({type:String,json:{origins:{"web-document":{read:{source:"format"},write:{target:"format"}}}}})],t.prototype,"imageFormat",void 0),i([c.reader("imageFormat",["supportedImageFormatTypes"])],t.prototype,"readImageFormat",null),i([c.property({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],t.prototype,"imageMaxHeight",void 0),i([c.property({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],t.prototype,"imageMaxWidth",void 0),i([c.property()],t.prototype,"imageTransparency",void 0),i([c.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),i([c.property({type:String,json:{write:{ignoreOrigin:!0}}})],t.prototype,"mapUrl",void 0),i([c.property()],t.prototype,"operationalLayerType",void 0),i([c.property({type:h,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],t.prototype,"spatialReference",void 0),i([c.reader(["web-document","portal-item"],"spatialReference",["spatialReferences"])],t.prototype,"readSpatialReferenceFromItemOrDocument",null),i([c.property({type:[Number],json:{read:{source:"spatialReferences"},write:{ignoreOrigin:!0}}})],t.prototype,"spatialReferences",void 0),i([c.writer(["web-document","portal-item"],"spatialReferences")],t.prototype,"writeSpatialReferences",null),i([c.property({type:p.ofType(O),json:{write:{overridePolicy:function(e,t,r){if(S(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],t.prototype,"sublayers",void 0),i([c.reader(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],t.prototype,"readSublayersFromItemOrMap",null),i([c.reader("service","sublayers",["layers"])],t.prototype,"readSublayers",null),i([c.writer("sublayers")],t.prototype,"writeSublayers",null),i([c.property({json:{read:!1},readOnly:!0,value:"wms"})],t.prototype,"type",void 0),i([c.property({type:String,json:{write:{ignoreOrigin:!0}}})],t.prototype,"version",void 0),i([c.subclass("esri.layers.WMSLayer")],t)}(c.declared(b,g,v,x,w))}.apply(null,n))||(e.exports=a)}}]);