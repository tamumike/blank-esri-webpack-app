(function(){(this||window).webpackJsonp.registerAbsMids({"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/WebTileLayer":441})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{441:function(e,t,r){var l,o;l=[r.dj.c(e.i),t,r(11),r(2),r(0),r(153),r(160),r(29),r(27),r(8),r(5),r(115),r(6),r(19),r(1),r(75),r(110),r(109),r(417),r(205),r(423),r(164),r(113)],void 0===(o=function(e,t,l,o,n,i,a,p,s,u,c,y,d,f,v,h,w,m,g,b,T,R,S){return function(e){function t(t,r){var l=e.call(this)||this;return l.copyright="",l.fullExtent=new p.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,p.SpatialReference.WebMercator),l.legendEnabled=!0,l.operationalLayerType="WebTiledLayer",l.popupEnabled=!0,l.spatialReference=p.SpatialReference.WebMercator,l.subDomains=null,l.tileInfo=new S({size:256,dpi:96,format:"PNG8",compressionQuality:0,origin:new p.Point({x:-20037508.342787,y:20037508.342787,spatialReference:p.SpatialReference.WebMercator}),spatialReference:p.SpatialReference.WebMercator,lods:[new R({level:0,scale:591657527.591555,resolution:156543.033928}),new R({level:1,scale:295828763.795777,resolution:78271.5169639999}),new R({level:2,scale:147914381.897889,resolution:39135.7584820001}),new R({level:3,scale:73957190.948944,resolution:19567.8792409999}),new R({level:4,scale:36978595.474472,resolution:9783.93962049996}),new R({level:5,scale:18489297.737236,resolution:4891.96981024998}),new R({level:6,scale:9244648.868618,resolution:2445.98490512499}),new R({level:7,scale:4622324.434309,resolution:1222.99245256249}),new R({level:8,scale:2311162.217155,resolution:611.49622628138}),new R({level:9,scale:1155581.108577,resolution:305.748113140558}),new R({level:10,scale:577790.554289,resolution:152.874056570411}),new R({level:11,scale:288895.277144,resolution:76.4370282850732}),new R({level:12,scale:144447.638572,resolution:38.2185141425366}),new R({level:13,scale:72223.819286,resolution:19.1092570712683}),new R({level:14,scale:36111.909643,resolution:9.55462853563415}),new R({level:15,scale:18055.954822,resolution:4.77731426794937}),new R({level:16,scale:9027.977411,resolution:2.38865713397468}),new R({level:17,scale:4513.988705,resolution:1.19432856685505}),new R({level:18,scale:2256.994353,resolution:.597164283559817}),new R({level:19,scale:1128.497176,resolution:.298582141647617})]}),l.type="web-tile",l.urlTemplate=null,l}return o(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?c.mixin({urlTemplate:e},t||{}):e},t.prototype.load=function(){var e=this,t=this.loadFromPortal({supportedTypes:["WMTS"]}).then(function(){if(!e.urlTemplate)throw new u("layer:load","WebTileLayer (title: '"+e.title+"', id: '"+e.id+"') is missing the required 'urlTemplate' property value")});return this.addResolvingPromise(t),this.when()},Object.defineProperty(t.prototype,"levelValues",{get:function(){var e=[];if(!this.tileInfo)return null;for(var t=0,r=this.tileInfo.lods;t<r.length;t++){var l=r[t];e[l.level]=l.levelValue||l.level}return e},enumerable:!0,configurable:!0}),t.prototype.readSpatialReference=function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&p.SpatialReference.fromJSON(t.fullExtent.spatialReference)},Object.defineProperty(t.prototype,"tileServers",{get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,r=this.subDomains,l=new a(t),o=l.scheme?l.scheme+"://":"//",n=o+l.authority+"/";if(-1===l.authority.indexOf("{subDomain}"))e.push(n);else if(r&&r.length>0&&l.authority.split(".").length>1)for(var i=0,p=r;i<p.length;i++){var s=p[i];e.push(o+l.authority.replace(/\{subDomain\}/gi,s)+"/")}return e.map(function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"urlPath",{get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new a(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)},enumerable:!0,configurable:!0}),t.prototype.readUrlTemplate=function(e,t){return e||t.templateUrl},t.prototype.writeUrlTemplate=function(e,t,r){e&&f.isProtocolRelative(e)&&(e="https:"+e),t.templateUrl=e?f.normalize(e):e},t.prototype.fetchTile=function(e,t,r,l){var o=this.getTileUrl(e,t,r),n={responseType:"image",allowImageDataAccess:l&&l.allowImageDataAccess||!1};return l&&l.timestamp&&(n.query={_ts:l.timestamp}),s(o,n).then(function(e){return e.data})},t.prototype.getTileUrl=function(e,t,r){var l=this.levelValues[e],o=this.tileServers[t%this.tileServers.length]+i.substitute(this.urlPath,{level:l,col:r,row:t});return o.replace(/\{level\}/gi,""+l).replace(/\{row\}/gi,""+t).replace(/\{col\}/gi,""+r)},t.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return d.create(function(e){return r.e(12).then(function(){var t=[r(1254)];e.apply(null,t)}.bind(this)).catch(r.oe)});case"3d":return d.create(function(e){return r.e(8).then(function(){var t=[r(1255)];e.apply(null,t)}.bind(this)).catch(r.oe)})}},n([v.property({type:String,value:"",json:{write:!0}})],t.prototype,"copyright",void 0),n([v.property({type:p.Extent,json:{write:!0}})],t.prototype,"fullExtent",void 0),n([v.property({json:{read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),n([v.property({dependsOn:["tileInfo"]})],t.prototype,"levelValues",null),n([v.property(T.popupEnabled)],t.prototype,"popupEnabled",void 0),n([v.property({type:p.SpatialReference})],t.prototype,"spatialReference",void 0),n([v.reader("spatialReference",["spatialReference","fullExtent.spatialReference"])],t.prototype,"readSpatialReference",null),n([v.property({type:[String],json:{write:!0}})],t.prototype,"subDomains",void 0),n([v.property({type:S,json:{write:!0}})],t.prototype,"tileInfo",void 0),n([v.property({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],t.prototype,"tileServers",null),n([v.property({json:{read:!1}})],t.prototype,"type",void 0),n([v.property({dependsOn:["urlTemplate"]})],t.prototype,"urlPath",null),n([v.property({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],t.prototype,"urlTemplate",void 0),n([v.reader("urlTemplate",["urlTemplate","templateUrl"])],t.prototype,"readUrlTemplate",null),n([v.writer("urlTemplate",{templateUrl:{type:String}})],t.prototype,"writeUrlTemplate",null),n([v.property({json:{write:!1}})],t.prototype,"url",void 0),n([v.property({json:{write:!0}})],t.prototype,"wmtsInfo",void 0),n([v.subclass("esri.layers.WebTileLayer")],t)}(v.declared(h,w,y,b,m,g))}.apply(null,l))||(e.exports=o)}}]);