(function(){(this||window).webpackJsonp.registerAbsMids({"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/WebTileLayer":441,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/WMTSLayer":1274,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/support/WMTSSublayer":2096,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/support/TileMatrixSet":2097,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/support/WMTSStyle":2098,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/support/wmtsUtils":2099})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[81,21],{1274:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(11),r(2),r(0),r(27),r(17),r(8),r(16),r(5),r(6),r(1),r(18),r(75),r(441),r(110),r(109),r(417),r(205),r(2096),r(2099)],void 0===(o=function(e,t,i,o,n,l,a,s,p,u,c,d,y,f,m,h,v,g,w,b,x){var T={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""};return function(e){function t(t,r){var i=e.call(this)||this;return i._sublayersHandles=new p,i.copyright=null,i.customParameters=null,i.customLayerParameters=null,i.fullExtent=null,i.operationalLayerType="WebTiledLayer",i.resourceInfo=null,i.serviceMode="RESTful",i.sublayers=null,i.type="wmts",i.version="1.0.0",i.watch("activeLayer",function(e,t){t&&(t.layer=null),e&&(e.layer=i)},!0),i.watch("sublayers",function(e,t){t&&(t.forEach(function(e){e.layer=null}),i._sublayersHandles.removeAll(),i._sublayersHandles=null),e&&(e.forEach(function(e){e.layer=i}),i._sublayersHandles||(i._sublayersHandles=new p),i._sublayersHandles.add([e.on("after-add",function(e){e.item.layer=i}),e.on("after-remove",function(e){e.item.layer=null})]))},!0),i}return o(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?i({url:e},t):e},t.prototype.load=function(){var e=this;return"KVP"!==this.serviceMode&&"RESTful"!==this.serviceMode?void console.error("WMTS mode could only be 'KVP' or 'RESTful'"):(this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]}).then(function(){return e._fetchService()}).catch(function(){return c.reject(new s("wmtslayer:unsupported-service-data","Invalid response from the WMTS service."))})),this.when())},Object.defineProperty(t.prototype,"activeLayer",{get:function(){return this._get("activeLayer")},set:function(e){this._set("activeLayer",e)},enumerable:!0,configurable:!0}),t.prototype.readActiveLayerFromService=function(e,t,r){var i,o=this;return this.activeLayer?t.layers.some(function(e){return e.id===o.activeLayer.id&&(i=e,!0)}):(this.activeLayer=new b,i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer},t.prototype.readActiveLayerFromItemOrWebDoc=function(e,t,r){return new b({id:t.wmtsInfo.layerIdentifier,tileMatrixSetId:t.wmtsInfo.tileMatrixSet})},t.prototype.writeActiveLayer=function(e,t){var r=this.activeLayer;t.templateUrl=this.getUrlTemplate(r.id,r.tileMatrixSetId,r.imageFormat,r.styleId),t.wmtsInfo=i({},t.wmtsInfo,{layerIdentifier:r.id,tileMatrixSet:r.tileMatrixSetId})},Object.defineProperty(t.prototype,"fullExtents",{get:function(){var e=[];return this.activeLayer.tileMatrixSets.forEach(function(t){t.fullExtent&&e.push(t.fullExtent)}),e},enumerable:!0,configurable:!0}),t.prototype.readServiceMode=function(e,t,r){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"},t.prototype.readSublayersFromService=function(e,t,r){return function(e,t){return e.map(function(e){var r=new b;return r.read(e,t),r})}(t.layers,r)},Object.defineProperty(t.prototype,"supportedSpatialReferences",{get:function(){return this.activeLayer.tileMatrixSets.map(function(e){return e.tileInfo.spatialReference}).toArray()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"title",{get:function(){return"Layer"===this._get("title")?this.activeLayer&&this.activeLayer.title:this._get("title")},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{get:function(){return this._get("url")},set:function(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)},enumerable:!0,configurable:!0}),t.prototype.createWebTileLayer=function(e){var t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,o={layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url};return this.customLayerParameters&&(o.customLayerParameters=this.customLayerParameters),this.customParameters&&(o.customParameters=this.customParameters),new m({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:o})},t.prototype.fetchTile=function(e,t,r){var i=this.getTileUrl(e,t,r);return l(i,{responseType:"image"}).then(function(e){return e.data})},t.prototype.findSublayerById=function(e){return this.sublayers.find(function(t){return t.id===e})},t.prototype.getTileUrl=function(e,t,r){var i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],o=i.levelValue?i.levelValue:String(i.level),n=this.resourceInfo?"":x.getTileUrlFromResourceUrls(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.styleId,e,t,r);return n||(n=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,o).replace(/\{row\}/gi,t).replace(/\{col\}/gi,r)),this._appendCustomLayerParameters(n)},t.prototype.getUrlTemplate=function(e,t,r,i){var o="";if(!this.resourceInfo&&(o=x.getTileUrlTemplateFromResourceUrls(e,t,r,i)))return o;if("KVP"===this.serviceMode)o=this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";else if("RESTful"===this.serviceMode){var n="";T[r.toLowerCase()]&&(n=T[r.toLowerCase()]),o=this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+n}return o},t.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return c.create(function(e){return r.e(77).then(function(){var t=[r(2176)];e.apply(null,t)}.bind(this)).catch(r.oe)});case"3d":return c.create(function(e){return r.e(66).then(function(){var t=[r(2177)];e.apply(null,t)}.bind(this)).catch(r.oe)})}},t.prototype._fetchService=function(){var e=this;return c.resolve().then(function(){if(e.resourceInfo)return"KVP"===e.resourceInfo.serviceMode&&(e.url+=e.url.indexOf("?")>-1?"":"?"),{ssl:!1,data:e.resourceInfo};var t=e._getCapabilitiesUrl(e.serviceMode);return l(t,{responseType:"text",callbackParamName:"callback"}).catch(function(r){var i="KVP"===e.serviceMode?"RESTful":"KVP";return t=e._getCapabilitiesUrl(i),l(t,{responseType:"text",callbackParamName:"callback"})})}).then(function(t){e.resourceInfo?t.data=x.parseResourceInfo(t.data):t.data=x.parseCapabilities(t.data,{serviceMode:e.serviceMode,url:e.url}),t.data&&e.read(t.data,{origin:"service"})})},t.prototype._getTileMatrixSetById=function(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find(function(t){return t.id===e})},t.prototype._appendCustomParameters=function(e){if(this.customParameters)for(var t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e},t.prototype._appendCustomLayerParameters=function(e){if(this.customLayerParameters||this.customParameters){var t=i({},u.clone(this.customParameters||{}),this.customLayerParameters);for(var r in t)e+=(-1===e.indexOf("?")?"?":"&")+r+"="+encodeURIComponent(t[r])}return e},t.prototype._getCapabilitiesUrl=function(e){var t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),this._appendCustomParameters(t)},n([d.property({type:b,dependsOn:["sublayers"],json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],t.prototype,"activeLayer",null),n([d.reader("service","activeLayer",["layers"])],t.prototype,"readActiveLayerFromService",null),n([d.reader(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],t.prototype,"readActiveLayerFromItemOrWebDoc",null),n([d.writer(["web-document","portal-item"],"activeLayer")],t.prototype,"writeActiveLayer",null),n([d.property()],t.prototype,"copyright",void 0),n([d.property({json:{origins:{"web-document":{read:{source:"wmtsInfo.customParameters"},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:"wmtsInfo.customParameters"},write:{target:"wmtsInfo.customParameters"}}}}})],t.prototype,"customParameters",void 0),n([d.property({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],t.prototype,"customLayerParameters",void 0),n([d.property({type:y,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],t.prototype,"fullExtent",void 0),n([d.property({readOnly:!0,dependsOn:["activeLayer"]})],t.prototype,"fullExtents",null),n([d.property()],t.prototype,"operationalLayerType",void 0),n([d.property()],t.prototype,"resourceInfo",void 0),n([d.property()],t.prototype,"serviceMode",void 0),n([d.reader(["portal-item","web-document"],"serviceMode",["templateUrl"])],t.prototype,"readServiceMode",null),n([d.property({type:a.ofType(b)})],t.prototype,"sublayers",void 0),n([d.reader("service","sublayers",["layers"])],t.prototype,"readSublayersFromService",null),n([d.property({readOnly:!0,dependsOn:["activeLayer"]})],t.prototype,"supportedSpatialReferences",null),n([d.property({dependsOn:["activeLayer"],json:{read:{source:"title"}}})],t.prototype,"title",null),n([d.property({json:{read:!1},readOnly:!0,value:"wmts"})],t.prototype,"type",void 0),n([d.property({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],t.prototype,"url",null),n([d.property()],t.prototype,"version",void 0),n([d.subclass("esri.layers.WMTSLayer")],t)}(d.declared(f,h,v,g,w))}.apply(null,i))||(e.exports=o)},2096:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(2),r(0),r(92),r(17),r(12),r(1),r(18),r(2097),r(2098)],void 0===(o=function(e,t,r,i,o,n,l,a,s,p,u){return function(e){function t(t){var r=e.call(this)||this;return r.fullExtent=null,r.imageFormats=null,r.id=null,r.layer=null,r.styles=null,r.tileMatrixSetId=null,r.tileMatrixSets=null,r}var o;return r(t,e),o=t,Object.defineProperty(t.prototype,"description",{get:function(){return this._get("description")},set:function(e){this._set("description",e)},enumerable:!0,configurable:!0}),t.prototype.readFullExtent=function(e,t,r){return(e=t.fullExtent)?s.fromJSON(e):null},Object.defineProperty(t.prototype,"imageFormat",{get:function(){var e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e},set:function(e){(e.indexOf("image/")>-1||-1===this.imageFormats.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),this.imageFormats&&-1===this.imageFormats.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"styleId",{get:function(){var e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e},set:function(e){this._set("styleId",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"title",{get:function(){return this._get("title")},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tileMatrixSet",{get:function(){var e=this;return this.tileMatrixSets.find(function(t){return t.id===e.tileMatrixSetId})},enumerable:!0,configurable:!0}),t.prototype.clone=function(){var e=new o;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e},i([a.property()],t.prototype,"description",null),i([a.property()],t.prototype,"fullExtent",void 0),i([a.reader("fullExtent",["fullExtent"])],t.prototype,"readFullExtent",null),i([a.property({dependsOn:["imageFormats"]})],t.prototype,"imageFormat",null),i([a.property({json:{read:{source:"formats"}}})],t.prototype,"imageFormats",void 0),i([a.property()],t.prototype,"id",void 0),i([a.property()],t.prototype,"layer",void 0),i([a.property()],t.prototype,"styleId",null),i([a.property({type:n.ofType(u),json:{read:{source:"styles"}}})],t.prototype,"styles",void 0),i([a.property({value:null,json:{write:{ignoreOrigin:!0}}})],t.prototype,"title",null),i([a.property()],t.prototype,"tileMatrixSetId",void 0),i([a.property({readOnly:!0,dependsOn:["tileMatrixSetId"]})],t.prototype,"tileMatrixSet",null),i([a.property({type:n.ofType(p),json:{read:{source:"tileMatrixSets"}}})],t.prototype,"tileMatrixSets",void 0),o=i([a.subclass("esri.layers.support.WMTSSublayer")],t)}(a.declared(l))}.apply(null,i))||(e.exports=o)},2097:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(2),r(0),r(92),r(12),r(1)],void 0===(o=function(e,t,r,i,o,n,l){return function(e){function t(t){var r=e.call(this)||this;return r.fullExtent=null,r.id=null,r.tileInfo=null,r}var o;return r(t,e),o=t,t.prototype.clone=function(){var e=new o;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e},i([l.property({json:{read:{source:"fullExtent"}}})],t.prototype,"fullExtent",void 0),i([l.property({json:{read:{source:"id"}}})],t.prototype,"id",void 0),i([l.property({json:{read:{source:"tileInfo"}}})],t.prototype,"tileInfo",void 0),o=i([l.subclass("esri.layer.support.TileMatrixSet")],t)}(l.declared(n))}.apply(null,i))||(e.exports=o)},2098:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(2),r(0),r(92),r(12),r(1)],void 0===(o=function(e,t,r,i,o,n,l){return function(e){function t(t){var r=e.call(this)||this;return r.id=null,r.title=null,r.description=null,r.legendUrl=null,r}var o;return r(t,e),o=t,t.prototype.clone=function(){var e=new o;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e},i([l.property({json:{read:{source:"id"}}})],t.prototype,"id",void 0),i([l.property({json:{read:{source:"title"}}})],t.prototype,"title",void 0),i([l.property({json:{read:{source:"abstract"}}})],t.prototype,"description",void 0),i([l.property({json:{read:{source:"legendUrl"}}})],t.prototype,"legendUrl",void 0),i([l.property({json:{read:{source:"isDefault"}}})],t.prototype,"isDefault",void 0),i([l.property({json:{read:{source:"keywords"}}})],t.prototype,"keywords",void 0),o=i([l.subclass("esri.layer.support.WMTSStyle")],t)}(l.declared(n))}.apply(null,i))||(e.exports=o)},2099:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(8),r(18),r(21),r(20),r(166),r(113)],void 0===(o=function(e,t,r,i,o,n,l,a){function s(e,t){var r=t.getElementsByTagName(e);return r&&r.length>0?r[0]:null}function p(e,t){return Array.prototype.slice.call(t.getElementsByTagName(e)).map(function(e){return e.textContent})}function u(e,t){return e.split(">").forEach(function(e){t=s(e,t)}),t&&t.textContent}function c(e,t,r,i){var o;return Array.prototype.slice.call(i.childNodes).some(function(i){if(i.nodeName.indexOf(e)>-1){var n=s(t,i),l=n&&n.textContent;return!!(l===r||r.split(":")&&r.split(":")[1]===l)&&(o=i,!0)}}),o}function d(e,t,r,i){var o=u("Abstract",t),n=p("Format",t);return{id:e,fullExtent:function(e){var t=s("WGS84BoundingBox",e),r=t?u("LowerCorner",t).split(" "):["-180","-90"],i=t?u("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}(t),description:o,formats:n,styles:function(e,t){return Array.prototype.slice.call(e.getElementsByTagName("Style")).map(function(e){var r=s("LegendURL",e),i=s("Keywords",e),o=i&&p("Keyword",i),n=r&&r.getAttribute("xlink:href");return t&&(n=n&&n.replace(/^http:/i,"https:")),{abstract:u("Abstract",e),id:u("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:o,legendUrl:n,title:u("Title",e)}})}(t,i),title:u("Title",t),tileMatrixSets:function(e,t){return p("TileMatrixSet",e).map(function(r){return function(e,t,r){var i=p("TileMatrix",c("TileMatrixSetLink","TileMatrixSet",e,t)),o=c("TileMatrixSet","Identifier",e,r),n=f(o),l=n.spatialReference,d=l.wkid,y=s("TileMatrix",o),v=[parseInt(u("TileWidth",y),10),parseInt(u("TileHeight",y),10)],g=[];i.length?i.forEach(function(t,r){var i=c("TileMatrix","Identifier",t,o);g.push(h(i,d,r,e))}):Array.prototype.slice.call(o.getElementsByTagName("TileMatrix")).forEach(function(t,r){g.push(h(t,d,r,e))});var w=m(o,n,v,g[0]);return{id:e,fullExtent:w,tileInfo:new a({dpi:96,spatialReference:l,size:v,origin:n,lods:g})}}(r,e,t)})}(t,r)}}function y(e){var t,r,i,o,n=[],l=x[e],a=Array.prototype.slice.call(l.getElementsByTagName("ResourceURL")),s=l.getElementsByTagName("Dimension");return s.length&&(t=u("Identifier",s[0]),r=p("Default",s[0])||p("Value",s[0])),s.length>1&&(i=u("Identifier",s[1]),o=p("Default",s[1])||p("Value",s[1])),b[e]={dimensions:r,dimensions2:o},a.forEach(function(e){var l=e.getAttribute("template");if(t&&r.length)if(l.indexOf("{"+t+"}")>-1)l=l.replace("{"+t+"}","{dimensionValue}");else{(a=l.toLowerCase().indexOf("{"+t.toLowerCase()+"}"))>-1&&(l=l.substring(0,a)+"{dimensionValue}"+l.substring(a+t.length+2))}if(i&&o.length)if(l.indexOf("{"+i+"}")>-1)l=l.replace("{"+i+"}","{dimensionValue2}");else{var a;(a=l.toLowerCase().indexOf("{"+i.toLowerCase()+"}"))>-1&&(l=l.substring(0,a)+"{dimensionValue2}"+l.substring(a+i.length+2))}n.push({template:l,format:e.getAttribute("fomrat"),resourceType:e.getAttribute("resourceType")})}),n}function f(e){var t=u("SupportedCRS",e);t&&(t=t.toLowerCase());var r=parseInt(t.split(":").pop(),10);900913!==r&&3857!==r||(r=102100);var i=!1;t.indexOf("crs84")>-1||t.indexOf("crs:84")>-1?(r=4326,i=!0):t.indexOf("crs83")>-1||t.indexOf("crs:83")>-1?(r=4269,i=!0):(t.indexOf("crs27")>-1||t.indexOf("crs:27")>-1)&&(r=4267,i=!0);var l,a=new n({wkid:r}),p=u("TopLeftCorner",s("TileMatrix",e)).split(" "),c=p[0].split("E").map(function(e){return Number(e)}),d=p[1].split("E").map(function(e){return Number(e)}),y=c[0],f=d[0];c.length>1&&(y=c[0]*Math.pow(10,c[1])),d.length>1&&(f=d[0]*Math.pow(10,d[1]));var m=i&&4326===r&&90===y&&-180===f;return w.some(function(e,n){var s=Number(t.split(":").pop());return s>=e[0]&&s<=e[1]||4326===r&&(!i||m)?(l=new o(f,y,a),!0):(n===w.length-1&&(l=new o(y,f,a)),!1)}),l}function m(e,t,r,o){var n,l,a,p,c,d,y=s("BoundingBox",e);if(y&&(n=u("LowerCorner",y).split(" "),l=u("UpperCorner",y).split(" ")),n&&n.length>1&&l&&l.length>1)a=parseFloat(n[0]),c=parseFloat(n[1]),p=parseFloat(l[0]),d=parseFloat(l[1]);else{var f=s("TileMatrix",e),m=parseFloat(u("MatrixWidth",f)),h=parseFloat(u("MatrixHeight",f));a=t.x,d=t.y,p=a+m*r[0]*o.resolution,c=d-h*r[1]*o.resolution}return new i(a,c,p,d,t.spatialReference)}function h(e,t,r,i){var o,n=u("Identifier",e),l=u("ScaleDenominator",e).split("E").map(function(e){return Number(e)}),a=v(t,o=l.length>1?l[0]*Math.pow(10,l[1]):l[0],i);return{level:r,levelValue:n,scale:o*=96/g,resolution:a}}function v(e,t,r){return 7*t/25e3/(l.hasOwnProperty(String(e))?l.values[l[e]]:"default028mm"===r?6370997*Math.PI/180:6378137*Math.PI/180)}Object.defineProperty(t,"__esModule",{value:!0});var g=90.71428571428571,w=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],b=new Map,x=new Map;t.parseCapabilities=function(e,t){e=e.replace(/ows:/gi,"");var i=(new DOMParser).parseFromString(e,"text/xml").documentElement,o=s("Contents",i);if(!o)throw new r("wmtslayer:wmts-capabilities-xml-is-not-valid");var n,l,a,p=s("OperationsMetadata",i),y=p&&p.querySelector("[name='GetTile']"),f=y&&y.getElementsByTagName("Get"),m=f&&Array.prototype.slice.call(f),h=t.url&&t.url.indexOf("https")>-1,v=t.serviceMode;if(m&&m.length&&m.some(function(e){var t=s("Constraint",e);return!t||c("AllowedValues","Value",v,t)?(l=e.attributes[0].nodeValue,!0):(!t||c("AllowedValues","Value","RESTful",t)||c("AllowedValues","Value","REST",t)?a=e.attributes[0].nodeValue:t&&!c("AllowedValues","Value","KVP",t)||(n=e.attributes[0].nodeValue),!1)}),!l)if(a)l=a,v="RESTful";else if(n)l=n,v="KVP";else{var g=s("ServiceMetadataURL",i);l=g.getAttribute("xlink:href")}var w=l.indexOf("1.0.0/");return-1===w&&"RESTful"===v?l+="/":w>-1&&(l=l.substring(0,w)),"KVP"===v&&(l+=w>-1?"":"?"),h&&(l=l.replace(/^http:/i,"https:")),{copyright:u("ServiceIdentification>AccessConstraints",i),layers:Array.prototype.slice.call(o.getElementsByTagName("Layer")).map(function(e){var t=u("Identifier",e);return x[t]=e,d(t,e,o,h)}),tileUrl:l,serviceMode:v}},t.parseResourceInfo=function(e){return e.layers.forEach(function(e){e.tileMatrixSets.forEach(function(e){var t=e.tileInfo;96!==t.dpi&&(t.lods.forEach(function(r){r.scale=96*r.scale/t.dpi,r.resolution=v(t.spatialReference.wkid,r.scale*g/96,e.id)}),t.dpi=96)})}),e},t.getTileUrlFromResourceUrls=function(e,t,r,i,o,n){var l=y(e),a=b[e].dimensions&&b[e].dimensions[0],s=b[e].dimensions2&&b[e].dimensions2[0],p="";return l&&l.length>0&&(p=l[o%l.length].template.replace(/\{Style\}/gi,r).replace(/\{TileMatrixSet\}/gi,t).replace(/\{TileMatrix\}/gi,i).replace(/\{TileRow\}/gi,o).replace(/\{TileCol\}/gi,n).replace(/\{dimensionValue\}/gi,a).replace(/\{dimensionValue2\}/gi,s)),p},t.getTileUrlTemplateFromResourceUrls=function(e,t,r,i){var o=y(e),n="";if(o&&o.length>0){var l=b[e].dimensions&&b[e].dimensions[0],a=b[e].dimensions2&&b[e].dimensions2[0];(n=o[0].template).indexOf(".xxx")===n.length-4&&(n=n.slice(0,n.length-4)),n=(n=(n=(n=(n=(n=(n=n.replace(/\{Style\}/gi,i)).replace(/\{TileMatrixSet\}/gi,t)).replace(/\{TileMatrix\}/gi,"{level}")).replace(/\{TileRow\}/gi,"{row}")).replace(/\{TileCol\}/gi,"{col}")).replace(/\{dimensionValue\}/gi,l)).replace(/\{dimensionValue2\}/gi,a)}return n}}.apply(null,i))||(e.exports=o)},441:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(11),r(2),r(0),r(153),r(160),r(29),r(27),r(8),r(5),r(115),r(6),r(19),r(1),r(75),r(110),r(109),r(417),r(205),r(423),r(164),r(113)],void 0===(o=function(e,t,i,o,n,l,a,s,p,u,c,d,y,f,m,h,v,g,w,b,x,T,S){return function(e){function t(t,r){var i=e.call(this)||this;return i.copyright="",i.fullExtent=new s.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,s.SpatialReference.WebMercator),i.legendEnabled=!0,i.operationalLayerType="WebTiledLayer",i.popupEnabled=!0,i.spatialReference=s.SpatialReference.WebMercator,i.subDomains=null,i.tileInfo=new S({size:256,dpi:96,format:"PNG8",compressionQuality:0,origin:new s.Point({x:-20037508.342787,y:20037508.342787,spatialReference:s.SpatialReference.WebMercator}),spatialReference:s.SpatialReference.WebMercator,lods:[new T({level:0,scale:591657527.591555,resolution:156543.033928}),new T({level:1,scale:295828763.795777,resolution:78271.5169639999}),new T({level:2,scale:147914381.897889,resolution:39135.7584820001}),new T({level:3,scale:73957190.948944,resolution:19567.8792409999}),new T({level:4,scale:36978595.474472,resolution:9783.93962049996}),new T({level:5,scale:18489297.737236,resolution:4891.96981024998}),new T({level:6,scale:9244648.868618,resolution:2445.98490512499}),new T({level:7,scale:4622324.434309,resolution:1222.99245256249}),new T({level:8,scale:2311162.217155,resolution:611.49622628138}),new T({level:9,scale:1155581.108577,resolution:305.748113140558}),new T({level:10,scale:577790.554289,resolution:152.874056570411}),new T({level:11,scale:288895.277144,resolution:76.4370282850732}),new T({level:12,scale:144447.638572,resolution:38.2185141425366}),new T({level:13,scale:72223.819286,resolution:19.1092570712683}),new T({level:14,scale:36111.909643,resolution:9.55462853563415}),new T({level:15,scale:18055.954822,resolution:4.77731426794937}),new T({level:16,scale:9027.977411,resolution:2.38865713397468}),new T({level:17,scale:4513.988705,resolution:1.19432856685505}),new T({level:18,scale:2256.994353,resolution:.597164283559817}),new T({level:19,scale:1128.497176,resolution:.298582141647617})]}),i.type="web-tile",i.urlTemplate=null,i}return o(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?c.mixin({urlTemplate:e},t||{}):e},t.prototype.load=function(){var e=this,t=this.loadFromPortal({supportedTypes:["WMTS"]}).then(function(){if(!e.urlTemplate)throw new u("layer:load","WebTileLayer (title: '"+e.title+"', id: '"+e.id+"') is missing the required 'urlTemplate' property value")});return this.addResolvingPromise(t),this.when()},Object.defineProperty(t.prototype,"levelValues",{get:function(){var e=[];if(!this.tileInfo)return null;for(var t=0,r=this.tileInfo.lods;t<r.length;t++){var i=r[t];e[i.level]=i.levelValue||i.level}return e},enumerable:!0,configurable:!0}),t.prototype.readSpatialReference=function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&s.SpatialReference.fromJSON(t.fullExtent.spatialReference)},Object.defineProperty(t.prototype,"tileServers",{get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,r=this.subDomains,i=new a(t),o=i.scheme?i.scheme+"://":"//",n=o+i.authority+"/";if(-1===i.authority.indexOf("{subDomain}"))e.push(n);else if(r&&r.length>0&&i.authority.split(".").length>1)for(var l=0,s=r;l<s.length;l++){var p=s[l];e.push(o+i.authority.replace(/\{subDomain\}/gi,p)+"/")}return e.map(function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"urlPath",{get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new a(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)},enumerable:!0,configurable:!0}),t.prototype.readUrlTemplate=function(e,t){return e||t.templateUrl},t.prototype.writeUrlTemplate=function(e,t,r){e&&f.isProtocolRelative(e)&&(e="https:"+e),t.templateUrl=e?f.normalize(e):e},t.prototype.fetchTile=function(e,t,r,i){var o=this.getTileUrl(e,t,r),n={responseType:"image",allowImageDataAccess:i&&i.allowImageDataAccess||!1};return i&&i.timestamp&&(n.query={_ts:i.timestamp}),p(o,n).then(function(e){return e.data})},t.prototype.getTileUrl=function(e,t,r){var i=this.levelValues[e],o=this.tileServers[t%this.tileServers.length]+l.substitute(this.urlPath,{level:i,col:r,row:t});return o.replace(/\{level\}/gi,""+i).replace(/\{row\}/gi,""+t).replace(/\{col\}/gi,""+r)},t.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return y.create(function(e){return r.e(12).then(function(){var t=[r(1254)];e.apply(null,t)}.bind(this)).catch(r.oe)});case"3d":return y.create(function(e){return r.e(8).then(function(){var t=[r(1255)];e.apply(null,t)}.bind(this)).catch(r.oe)})}},n([m.property({type:String,value:"",json:{write:!0}})],t.prototype,"copyright",void 0),n([m.property({type:s.Extent,json:{write:!0}})],t.prototype,"fullExtent",void 0),n([m.property({json:{read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),n([m.property({dependsOn:["tileInfo"]})],t.prototype,"levelValues",null),n([m.property(x.popupEnabled)],t.prototype,"popupEnabled",void 0),n([m.property({type:s.SpatialReference})],t.prototype,"spatialReference",void 0),n([m.reader("spatialReference",["spatialReference","fullExtent.spatialReference"])],t.prototype,"readSpatialReference",null),n([m.property({type:[String],json:{write:!0}})],t.prototype,"subDomains",void 0),n([m.property({type:S,json:{write:!0}})],t.prototype,"tileInfo",void 0),n([m.property({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],t.prototype,"tileServers",null),n([m.property({json:{read:!1}})],t.prototype,"type",void 0),n([m.property({dependsOn:["urlTemplate"]})],t.prototype,"urlPath",null),n([m.property({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],t.prototype,"urlTemplate",void 0),n([m.reader("urlTemplate",["urlTemplate","templateUrl"])],t.prototype,"readUrlTemplate",null),n([m.writer("urlTemplate",{templateUrl:{type:String}})],t.prototype,"writeUrlTemplate",null),n([m.property({json:{write:!1}})],t.prototype,"url",void 0),n([m.property({json:{write:!0}})],t.prototype,"wmtsInfo",void 0),n([m.subclass("esri.layers.WebTileLayer")],t)}(m.declared(h,v,d,b,g,w))}.apply(null,i))||(e.exports=o)}}]);