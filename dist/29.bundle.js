(function(){(this||window).webpackJsonp.registerAbsMids({"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/PointCloudLayer":484,"esri/renderers/support/LegendOptions":1427,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/renderers/support/LegendOptions":1427,"esri/renderers/PointCloudRenderer":1484,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/renderers/PointCloudRenderer":1484,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/mixins/SceneService":1497,"esri/renderers/support/pointCloud/PointSizeAlgorithm":1520,"esri/renderers/PointCloudClassBreaksRenderer":1551,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/renderers/PointCloudClassBreaksRenderer":1551,"esri/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm":1552,"esri/renderers/support/pointCloud/PointSizeSplatAlgorithm":1553,"esri/renderers/PointCloudStretchRenderer":1554,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/renderers/PointCloudStretchRenderer":1554,"esri/renderers/PointCloudUniqueValueRenderer":1555,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/renderers/PointCloudUniqueValueRenderer":1555,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudFilter":1625,"esri/renderers/support/pointCloud/ColorModulation":1652,"esri/renderers/support/pointCloud/pointSizeAlgorithmJSONUtils":1653,"esri/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils":1654,"esri/renderers/support/pointCloud/ColorClassBreakInfo":1655,"esri/renderers/support/pointCloud/StopInfo":1656,"esri/renderers/support/pointCloud/ColorUniqueValueInfo":1657,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudBitfieldFilter":1750,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudReturnFilter":1751,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudValueFilter":1752,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/renderers/PointCloudRGBRenderer":1753,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/pointCloudFilters/jsonUtils":2024,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/pointCloudFilters/typeUtils":2025,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/renderers/support/pointCloud/jsonUtils":2026,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/renderers/support/pointCloud/typeUtils":2027})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1427:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(12),t(1)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.title=null,r}var n;return t(r,e),n=r,r.prototype.clone=function(){return new n({title:this.title})},o([i.property({type:String,json:{write:!0}})],r.prototype,"title",void 0),n=o([i.subclass("esri.renderers.support.LegendOptions")],r)}(i.declared(n));r.LegendOptions=l,r.default=l}.apply(null,o))||(e.exports=n)},1484:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(12),t(24),t(5),t(1),t(1652),t(1653),t(1654)],void 0===(n=function(e,r,t,o,n,i,l,p,s,a,u){var d=i({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),c=function(e){function r(r){var t=e.call(this)||this;return t.type=void 0,t.pointSizeAlgorithm=null,t.colorModulation=null,t.pointsPerInch=10,t}return t(r,e),r.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},r.prototype.cloneProperties=function(){return{pointSizeAlgorithm:l.clone(this.pointSizeAlgorithm),colorModulation:l.clone(this.colorModulation),pointsPerInch:l.clone(this.pointsPerInch)}},o([p.property({type:String,readOnly:!0,nonNullable:!0,json:{read:!1,write:d.write}})],r.prototype,"type",void 0),o([p.property({types:u.pointSizeAlgorithmTypes,json:{read:a.read,write:!0}})],r.prototype,"pointSizeAlgorithm",void 0),o([p.property({type:s.default,json:{write:!0}})],r.prototype,"colorModulation",void 0),o([p.property({json:{write:!0},nonNullable:!0,type:Number})],r.prototype,"pointsPerInch",void 0),o([p.subclass("esri.renderers.PointCloudRenderer")],r)}(p.declared(n));return(c||(c={})).fieldTransformTypeKebabDict=i({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"}),c}.apply(null,o))||(e.exports=n)},1497:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(27),t(8),t(7),t(115),t(6),t(19),t(1),t(18),t(161),t(20),t(75),t(211),t(110),t(109),t(94)],void 0===(n=function(e,r,o,n,i,l,p,s,a,u,d,c,y,f,v,h,b,m,g){var C=p.getLogger("esri.layers.mixins.SceneService");return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.blendMode=null,r.spatialReference=null,r.fullExtent=null,r.heightModelInfo=null,r.version={major:Number.NaN,minor:Number.NaN,versionString:""},r.copyright=null,r.sublayerTitleMode="item-title",r.title=null,r.layerId=null,r}return o(r,e),r.prototype.readSpatialReference=function(e,r){return this._readSpatialReference(r)},r.prototype._readSpatialReference=function(e){if(null!=e.spatialReference)return f.fromJSON(e.spatialReference);var r=e.store,t=r.indexCRS||r.geographicCRS,o=t&&parseInt(t.substring(t.lastIndexOf("/")+1,t.length),10);return null!=o?new f(o):null},r.prototype.readFullExtent=function(e,r){var t=r.store,o=this._readSpatialReference(r);return null==o||null==t||null==t.extent?null:new c({xmin:t.extent[0],ymin:t.extent[1],xmax:t.extent[2],ymax:t.extent[3],spatialReference:o})},r.prototype.readVersion=function(e,r){var t=r.store,o=null!=t.version?t.version.toString():"",n={major:Number.NaN,minor:Number.NaN,versionString:o},i=o.split(".");return i.length>=2&&(n.major=parseInt(i[0],10),n.minor=parseInt(i[1],10)),n},r.prototype.readTitlePortalItem=function(e,r){return"item-title"!==this.sublayerTitleMode?void 0:e},r.prototype.readTitleService=function(e,r){var t=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return g.titleFromUrlAndName(this.url,r.name);var o=r.name||g.parse(this.url).title;return"item-title-and-service-name"===this.sublayerTitleMode&&t&&(o=t+" - "+o),g.cleanTitle(o)},r.prototype.readLayerId=function(e,r){return r.id},Object.defineProperty(r.prototype,"url",{set:function(e){var r=g.sanitizeUrlWithLayerId(this,e,C);this._set("url",r.url),null!=r.layerId&&this._set("layerId",r.layerId)},enumerable:!0,configurable:!0}),r.prototype.writeUrl=function(e,r){g.writeUrlWithLayerId(this,e,"layers",r)},Object.defineProperty(r.prototype,"parsedUrl",{get:function(){var e=this._get("url");if(!e)return null;var r=u.urlToObject(e);return null!=this.layerId&&g.match.test(r.path)&&(r.path=r.path+"/layers/"+this.layerId),r},enumerable:!0,configurable:!0}),r.prototype.readRootNode=function(e,r){return r.store.rootNode},r.prototype._verifyRootNodeAndUpdateExtent=function(){var e=this;return this._fetchRootNode().then(function(r){return e._updateExtentFromRootNode(r)})},r.prototype._updateExtentFromRootNode=function(e){if(null!=this.fullExtent&&!this.fullExtent.hasZ&&null!=e&&Array.isArray(e.mbs)&&4===e.mbs.length){var r=e.mbs[2],t=e.mbs[3];this.fullExtent.zmin=r-t,this.fullExtent.zmax=r+t}},r.prototype._fetchRootNode=function(){if(!this.rootNode)return a.resolve();var e=u.join(this.parsedUrl.path,this.rootNode);return i(e,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data}).catch(function(r){throw new l("sceneservice:root-node-missing","Root node missing.",{error:r,url:e})})},r.prototype._fetchService=function(){var e=this;return(null==this.layerId&&/SceneServer\/*$/i.test(this.url)?this._fetchFirstLayerId().then(function(r){null!=r&&(e.layerId=r)}):a.resolve()).then(function(){return e._fetchServiceLayer()})},r.prototype._fetchFirstLayerId=function(){return i(this.url,{query:{f:"json"},callbackParamName:"callback",responseType:"json"}).then(function(e){if(e.data&&Array.isArray(e.data.layers)&&e.data.layers.length>0)return e.data.layers[0].id})},r.prototype._fetchServiceLayer=function(){var e=this;return i(this.parsedUrl.path,{query:{f:"json"},responseType:"json"}).then(function(r){r.ssl&&(e.url=e.url.replace(/^http:/i,"https:"));var t=r.data;e.read(t,{origin:"service",url:e.parsedUrl}),e._validateLayer(t)})},r.prototype._validateLayer=function(e){},r.prototype.createGraphicsController=function(e){var r=this;e.layer=this;var o=a.create(function(e){return Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(53)]).then(function(){var r=[t(1711)];e.apply(null,r)}.bind(this)).catch(t.oe)}).then(function(r){return new r(e)});return o.then(function(e){r.emit("graphics-controller-create",{graphicsController:e})}),o},n([d.shared({id:{json:{origins:{service:{read:!1},"portal-item":{read:!1}}}}})],r.prototype,"properties",void 0),n([d.property({type:f})],r.prototype,"spatialReference",void 0),n([d.reader("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],r.prototype,"readSpatialReference",null),n([d.property({type:c})],r.prototype,"fullExtent",void 0),n([d.reader("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],r.prototype,"readFullExtent",null),n([d.property({readOnly:!0,type:y})],r.prototype,"heightModelInfo",void 0),n([d.property({readOnly:!0})],r.prototype,"version",void 0),n([d.reader("version",["store.version"])],r.prototype,"readVersion",null),n([d.property({type:String,json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),n([d.property({type:String})],r.prototype,"sublayerTitleMode",void 0),n([d.property({type:String})],r.prototype,"title",void 0),n([d.reader("portal-item","title")],r.prototype,"readTitlePortalItem",null),n([d.reader("service","title",["name"])],r.prototype,"readTitleService",null),n([d.property({type:Number})],r.prototype,"layerId",void 0),n([d.reader("service","layerId",["id"])],r.prototype,"readLayerId",null),n([d.property()],r.prototype,"url",null),n([d.writer("url")],r.prototype,"writeUrl",null),n([d.property({dependsOn:["layerId"]})],r.prototype,"parsedUrl",null),n([d.property()],r.prototype,"store",void 0),n([d.property({type:String})],r.prototype,"rootNode",void 0),n([d.reader("rootNode",["store.rootNode"])],r.prototype,"readRootNode",null),n([d.subclass("esri.layers.mixins.SceneService")],r)}(d.declared(v,h,s,b,m))}.apply(null,o))||(e.exports=n)},1520:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(12),t(24),t(1)],void 0===(n=function(e,r,t,o,n,i,l){Object.defineProperty(r,"__esModule",{value:!0}),r.typeKebabDictionary=i({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});var p=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),o([l.property({type:String,readOnly:!0,nonNullable:!0,json:{read:!1,write:r.typeKebabDictionary.write}})],n.prototype,"type",void 0),o([l.subclass("esri.renderers.support.pointCloud.PointSizeAlgorithm")],n)}(l.declared(n));r.PointSizeAlgorithm=p,r.default=p}.apply(null,o))||(e.exports=n)},1551:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(11),t(2),t(0),t(5),t(1),t(1484),t(1427),t(1655)],void 0===(n=function(e,r,t,o,n,i,l,p,s,a){return function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-class-breaks",t.field=null,t.legendOptions=null,t.fieldTransformType=null,t.colorClassBreakInfos=null,t}var u;return o(r,e),u=r,r.prototype.clone=function(){return new u(t({},this.cloneProperties(),{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:i.clone(this.colorClassBreakInfos),legendOptions:i.clone(this.legendOptions)}))},n([l.property()],r.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],r.prototype,"field",void 0),n([l.property({type:s.default,json:{write:!0}})],r.prototype,"legendOptions",void 0),n([l.property({json:{read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write},type:String})],r.prototype,"fieldTransformType",void 0),n([l.property({type:[a.default],json:{write:!0}})],r.prototype,"colorClassBreakInfos",void 0),u=n([l.subclass("esri.renderers.PointCloudClassBreaksRenderer")],r)}(l.declared(p))}.apply(null,o))||(e.exports=n)},1552:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(1),t(1520)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="fixed-size",r.size=0,r.useRealWorldSymbolSizes=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})},o([n.property()],r.prototype,"type",void 0),o([n.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"size",void 0),o([n.property({type:Boolean,json:{write:!0}})],r.prototype,"useRealWorldSymbolSizes",void 0),i=o([n.subclass("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],r)}(n.declared(i.default));r.PointSizeFixedSizeAlgorithm=l,r.default=l}.apply(null,o))||(e.exports=n)},1553:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(1),t(1520)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="splat",r.scaleFactor=1,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({scaleFactor:this.scaleFactor})},o([n.property()],r.prototype,"type",void 0),o([n.property({type:Number,value:1,nonNullable:!0,json:{write:!0}})],r.prototype,"scaleFactor",void 0),i=o([n.subclass("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],r)}(n.declared(i.default));r.PointSizeSplatAlgorithm=l,r.default=l}.apply(null,o))||(e.exports=n)},1554:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(11),t(2),t(0),t(5),t(1),t(1484),t(1427),t(1656)],void 0===(n=function(e,r,t,o,n,i,l,p,s,a){return function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-stretch",t.field=null,t.legendOptions=null,t.fieldTransformType=null,t.stops=null,t}var u;return o(r,e),u=r,r.prototype.clone=function(){return new u(t({},this.cloneProperties(),{field:i.clone(this.field),fieldTransformType:i.clone(this.fieldTransformType),stops:i.clone(this.stops),legendOptions:i.clone(this.legendOptions)}))},n([l.property()],r.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],r.prototype,"field",void 0),n([l.property({type:s.default,json:{write:!0}})],r.prototype,"legendOptions",void 0),n([l.property({json:{read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write},type:String})],r.prototype,"fieldTransformType",void 0),n([l.property({type:[a.default],json:{write:!0}})],r.prototype,"stops",void 0),u=n([l.subclass("esri.renderers.PointCloudStretchRenderer")],r)}(l.declared(p))}.apply(null,o))||(e.exports=n)},1555:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(11),t(2),t(0),t(5),t(1),t(1484),t(1427),t(1657)],void 0===(n=function(e,r,t,o,n,i,l,p,s,a){return function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-unique-value",t.field=null,t.fieldTransformType=null,t.colorUniqueValueInfos=null,t.legendOptions=null,t}var u;return o(r,e),u=r,r.prototype.clone=function(){return new u(t({},this.cloneProperties(),{field:i.clone(this.field),fieldTransformType:i.clone(this.fieldTransformType),colorUniqueValueInfos:i.clone(this.colorUniqueValueInfos),legendOptions:i.clone(this.legendOptions)}))},n([l.property()],r.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],r.prototype,"field",void 0),n([l.property({json:{read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write},type:String})],r.prototype,"fieldTransformType",void 0),n([l.property({type:[a.default],json:{write:!0}})],r.prototype,"colorUniqueValueInfos",void 0),n([l.property({type:s.default,json:{write:!0}})],r.prototype,"legendOptions",void 0),u=n([l.subclass("esri.renderers.PointCloudUniqueValueRenderer")],r)}(l.declared(p))}.apply(null,o))||(e.exports=n)},1625:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(12),t(24),t(1)],void 0===(n=function(e,r,t,o,n,i,l){var p=i({pointCloudValueFilter:"value",pointCloudBitfieldFilter:"bitfield",pointCloudReturnFilter:"return"});return function(e){function r(r){return e.call(this)||this}return t(r,e),r.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},o([l.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"field",void 0),o([l.property({readOnly:!0,type:String,nonNullable:!0,json:{read:!1,write:p.write}})],r.prototype,"type",void 0),o([l.subclass("esri.layers.pointCloudFilters.PointCloudFilter")],r)}(l.declared(n))}.apply(null,o))||(e.exports=n)},1652:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(12),t(1)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.field=null,r.minValue=0,r.maxValue=255,r}var n;return t(r,e),n=r,r.prototype.clone=function(){return new n({field:this.field,minValue:this.minValue,maxValue:this.maxValue})},o([i.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),o([i.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"minValue",void 0),o([i.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"maxValue",void 0),n=o([i.subclass("esri.renderers.support.pointCloud.ColorModulation")],r)}(i.declared(n));r.ColorModulation=l,r.default=l}.apply(null,o))||(e.exports=n)},1653:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(114),t(1552),t(1553)],void 0===(n=function(e,r,t,o,n){function i(e){return e&&l[e.type]||null}Object.defineProperty(r,"__esModule",{value:!0});var l={pointCloudFixedSizeAlgorithm:o.default,pointCloudSplatAlgorithm:n.default};r.read=function(e,r,o){var n=i(e);if(n){var l=new n;return l.read(e,o),l}return o&&o.messages&&e&&o.messages.push(new t("pointsizealgorithm:unsupported","Point size algorithms of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:o})),null},r.fromJSON=function(e){var r=i(e);return r?r.fromJSON(e):null}}.apply(null,o))||(e.exports=n)},1654:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(1520),t(1552),t(1553)],void 0===(n=function(e,r,t,o,n){Object.defineProperty(r,"__esModule",{value:!0}),r.pointSizeAlgorithmTypes={key:"type",base:t.default,typeMap:{"fixed-size":o.default,splat:n.default}}}.apply(null,o))||(e.exports=n)},1655:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(31),t(12),t(5),t(1),t(38)],void 0===(n=function(e,r,t,o,n,i,l,p,s){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.label=null,r.minValue=0,r.maxValue=0,r.color=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:l.clone(this.color)})},o([p.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([p.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([p.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],r.prototype,"minValue",void 0),o([p.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],r.prototype,"maxValue",void 0),o([p.property({type:n,json:{type:[s.Integer],write:!0}})],r.prototype,"color",void 0),i=o([p.subclass("esri.renderers.support.pointCloud.ColorClassBreakInfo")],r)}(p.declared(i));r.ColorClassBreakInfo=a,r.default=a}.apply(null,o))||(e.exports=n)},1656:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(31),t(12),t(5),t(1),t(38)],void 0===(n=function(e,r,t,o,n,i,l,p,s){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.label=null,r.value=0,r.color=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({label:this.label,value:this.value,color:l.clone(this.color)})},o([p.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([p.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"value",void 0),o([p.property({type:n,json:{type:[s.Integer],write:!0}})],r.prototype,"color",void 0),i=o([p.subclass("esri.renderers.support.pointCloud.StopInfo")],r)}(p.declared(i));r.StopInfo=a,r.default=a}.apply(null,o))||(e.exports=n)},1657:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(31),t(12),t(5),t(1),t(38)],void 0===(n=function(e,r,t,o,n,i,l,p,s){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.label=null,r.values=null,r.color=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({description:this.description,label:this.label,values:l.clone(this.values),color:l.clone(this.color)})},o([p.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([p.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([p.property({type:[String],json:{write:!0}})],r.prototype,"values",void 0),o([p.property({type:n,json:{type:[s.Integer],write:!0}})],r.prototype,"color",void 0),i=o([p.subclass("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],r)}(p.declared(i));r.ColorUniqueValueInfo=a,r.default=a}.apply(null,o))||(e.exports=n)},1750:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(5),t(1),t(1625)],void 0===(n=function(e,r,t,o,n,i,l){return function(e){function r(r){var t=e.call(this)||this;return t.requiredClearBits=null,t.requiredSetBits=null,t.type="bitfield",t}var l;return t(r,e),l=r,r.prototype.clone=function(){return new l({field:this.field,requiredClearBits:n.clone(this.requiredClearBits),requiredSetBits:n.clone(this.requiredSetBits)})},o([i.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],r.prototype,"requiredClearBits",void 0),o([i.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],r.prototype,"requiredSetBits",void 0),o([i.property()],r.prototype,"type",void 0),l=o([i.subclass("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],r)}(i.declared(l))}.apply(null,o))||(e.exports=n)},1751:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(5),t(1),t(1625)],void 0===(n=function(e,r,t,o,n,i,l){return function(e){function r(r){var t=e.call(this)||this;return t.includedReturns=[],t.type="return",t}var l;return t(r,e),l=r,r.prototype.clone=function(){return new l({field:this.field,includedReturns:n.clone(this.includedReturns)})},o([i.property({type:[String],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"includedReturns",void 0),o([i.property()],r.prototype,"type",void 0),l=o([i.subclass("esri.layers.pointCloudFilters.PointCloudReturnFilter")],r)}(i.declared(l))}.apply(null,o))||(e.exports=n)},1752:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(5),t(1),t(1625)],void 0===(n=function(e,r,t,o,n,i,l){return function(e){function r(r){var t=e.call(this)||this;return t.mode="exclude",t.type="value",t.values=[],t}var l;return t(r,e),l=r,r.prototype.clone=function(){return new l({field:this.field,mode:this.mode,values:n.clone(this.values)})},o([i.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"mode",void 0),o([i.property()],r.prototype,"type",void 0),o([i.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"values",void 0),l=o([i.subclass("esri.layers.pointCloudFilters.PointCloudValueFilter")],r)}(i.declared(l))}.apply(null,o))||(e.exports=n)},1753:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(11),t(2),t(0),t(5),t(1),t(1484)],void 0===(n=function(e,r,t,o,n,i,l,p){return function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-rgb",t.field=null,t}var p;return o(r,e),p=r,r.prototype.clone=function(){return new p(t({},this.cloneProperties(),{field:i.clone(this.field)}))},n([l.property()],r.prototype,"type",void 0),n([l.property({json:{write:{target:{field:{type:String},fieldTransformType:{type:String}},enabled:!0}},type:String})],r.prototype,"field",void 0),p=n([l.subclass("esri.renderers.PointCloudRGBRenderer")],r)}(l.declared(p))}.apply(null,o))||(e.exports=n)},2024:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(82),t(114),t(1750),t(1751),t(1752)],void 0===(n=function(e,r,t,o,n,i,l){function p(e){return e&&s[e.type]||null}Object.defineProperty(r,"__esModule",{value:!0});var s={pointCloudValueFilter:l,pointCloudBitfieldFilter:n,pointCloudReturnFilter:i};r.read=function(e,r,t){if(e&&Array.isArray(e))return e.map(function(e){var r=p(e);if(r){var n=new r;return n.read(e,t),n}t&&t.messages&&e&&t.messages.push(new o("point-cloud-filter:unsupported","Point cloud filters of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:t}))})},r.write=function(e,r,o,n){var i=e.map(function(e){return e.write({},n)});t.setDeepValue(o,i,r)},r.fromJSON=function(e){var r=p(e);return r?r.fromJSON(e):null}}.apply(null,o))||(e.exports=n)},2025:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(1750),t(1625),t(1751),t(1752)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0}),r.types={key:"type",base:o,typeMap:{value:i,bitfield:t,return:n}}}.apply(null,o))||(e.exports=n)},2026:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(114),t(1551),t(1753),t(1554),t(1555)],void 0===(n=function(e,r,t,o,n,i,l){function p(e){return e&&s[e.type]||null}Object.defineProperty(r,"__esModule",{value:!0});var s={pointCloudClassBreaksRenderer:o,pointCloudRGBRenderer:n,pointCloudStretchRenderer:i,pointCloudUniqueValueRenderer:l};r.read=function(e,r,o){var n=p(e);if(n){var i=new n;return i.read(e,o),i}return o&&o.messages&&e&&o.messages.push(new t("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:o})),null},r.fromJSON=function(e){var r=p(e);return r?r.fromJSON(e):null}}.apply(null,o))||(e.exports=n)},2027:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(1551),t(1484),t(1753),t(1554),t(1555)],void 0===(n=function(e,r,t,o,n,i,l){Object.defineProperty(r,"__esModule",{value:!0}),r.types={key:"type",base:o,typeMap:{"point-cloud-class-breaks":t,"point-cloud-rgb":n,"point-cloud-stretch":i,"point-cloud-unique-value":l}}}.apply(null,o))||(e.exports=n)},484:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(11),t(2),t(0),t(27),t(8),t(5),t(7),t(6),t(19),t(1),t(75),t(1497),t(2024),t(2025),t(422),t(2026),t(2027),t(427)],void 0===(n=function(e,r,o,n,i,l,p,s,a,u,d,c,y,f,v,h,b,m,g,C){function w(e,r,t){return e&&((e=m.read(e,r,t)||void 0)||j.error("Failed to create renderer",{rendererDefinition:e,layer:this,context:t})),e}var j=a.getLogger("esri.layers.PointCloudLayer");return function(e){function r(r,t){var o=e.call(this)||this;return o.operationalLayerType="PointCloudLayer",o.opacity=1,o.fields=null,o.elevationInfo=null,o.legendEnabled=!0,o.renderer=null,o.type="point-cloud",o}return n(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?o({url:e},r):e},r.prototype.readServiceFields=function(e,r,t){return Array.isArray(e)?e.map(function(e){var r=new b;return"FieldTypeInteger"===e.type&&((e=s.clone(e)).type="esriFieldTypeInteger"),r.read(e,t),r}):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map(function(e){return new b({name:e.name,type:"ELEVATION"===e.name?"double":"integer"})}):null},r.prototype.load=function(){var e=this,r=this.loadFromPortal({supportedTypes:["Scene Service"]}).always(function(){return e._fetchService()});return this.addResolvingPromise(r),this.when()},r.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return u.reject(new p("point-cloud-layer:view-not-supported","PointCloudLayer is only supported in 3D"));case"3d":return u.create(function(e){return Promise.all([t.e(1),t.e(2),t.e(75)]).then(function(){var r=[t(2160)];e.apply(null,r)}.bind(this)).catch(t.oe)})}},r.prototype._validateLayer=function(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new p("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new p("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})},r.prototype.hasCachedStatistics=function(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some(function(r){return r.name===e})},r.prototype.queryCachedStatistics=function(e){if(!this.hasCachedStatistics(e))return u.reject(new p("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available"));for(var r=0,t=this.attributeStorageInfo;r<t.length;r++){var o=t[r];if(o.name===e){var n=d.join(this.parsedUrl.path,"./statistics/"+o.key);return l(n,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data})}}},i([c.property({readOnly:!0})],r.prototype,"operationalLayerType",void 0),i([c.property({readOnly:!0,json:{write:!1,read:!1}})],r.prototype,"opacity",void 0),i([c.property({types:[h.types],json:{origins:{service:{read:{source:"filters",reader:v.read}}},read:{source:"layerDefinition.filters",reader:v.read},write:{target:"layerDefinition.filters",writer:v.write}}})],r.prototype,"filters",void 0),i([c.property({type:[b]})],r.prototype,"fields",void 0),i([c.reader("service","fields",["fields","attributeStorageInfo"])],r.prototype,"readServiceFields",null),i([c.property({readOnly:!0})],r.prototype,"attributeStorageInfo",void 0),i([c.property({type:C,json:{origins:{service:{read:{source:"elevationInfo"}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}})],r.prototype,"elevationInfo",void 0),i([c.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),i([c.property({types:g.types,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:w}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:w},write:{target:"layerDefinition.drawingInfo.renderer"}}})],r.prototype,"renderer",void 0),i([c.property({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),i([c.subclass("esri.layers.PointCloudLayer")],r)}(c.declared(y,f))}.apply(null,o))||(e.exports=n)}}]);