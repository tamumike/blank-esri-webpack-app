(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/layers/LayerView":1299,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/views/layers/LayerView":1299,"esri/views/layers/RefreshableLayerView":1318,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/views/layers/RefreshableLayerView":1318,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/views/3d/layers/LayerView3D":1325,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/views/3d/layers/support/layerViewUpdatingProperties":1357,"esri/views/3d/layers/TiledLayerView3D":1524,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/views/3d/layers/TiledLayerView3D":1524,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/views/3d/layers/WMTSLayerView3D":2177})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1299:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(4),i(42),i(16),i(147),i(7),i(146),i(6),i(1)],void 0===(n=function(e,t,i,r,n,a,o,l,s,p,u,d){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handles=new o,t.layer=null,t.parent=null,t.view=null,t}return i(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";return s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+i+"')",t),u.reject(t)}})},t.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null!=e?e:1};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},r([d.property()],t.prototype,"layer",void 0),r([d.property()],t.prototype,"parent",void 0),r([d.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),r([d.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],t.prototype,"updating",null),r([d.property()],t.prototype,"view",void 0),r([d.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r([d.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r([d.subclass("esri.views.layers.LayerView")],t)}(d.declared(n,a,l,p))}.apply(null,r))||(e.exports=n)},1318:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(4),i(1)],void 0===(n=function(e,t,i,r,n,a){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshTimestamp=null,t}return i(t,e),t.prototype.refresh=function(e){void 0===e&&(e=Date.now()),this._set("refreshTimestamp",e),this.doRefresh&&this.doRefresh()},r([a.property()],t.prototype,"layer",void 0),r([a.aliasOf("layer.refreshInterval")],t.prototype,"refreshInterval",void 0),r([a.property({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),r([a.subclass("esri.layers.mixins.RefreshableLayerView")],t)}(a.declared(n))}.apply(null,r))||(e.exports=n)},1325:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(6),i(15),i(1),i(412),i(1299)],void 0===(n=function(e,t,i,r,n,a,o,l,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.supportsHeightUnitConversion=!1,t}return i(t,e),t.prototype.postscript=function(e){this.inherited(arguments),l.mayHaveHeightModelInfo(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())},t.prototype._validateHeightModelInfo=function(){var e=this;return n.create(function(t,i){a.whenFalseOnce(e.view.defaultsFromMap,"isHeightModelInfoSearching",function(){var r=l.rejectLayerError(e.layer,e.view.heightModelInfo,e.supportsHeightUnitConversion);r?i(r):t()})})},r([o.property()],t.prototype,"view",void 0),r([o.subclass("esri.views.3d.layers.LayerView3D")],t)}(o.declared(s))}.apply(null,r))||(e.exports=n)},1357:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.updatingPercentageValue={value:100,readOnly:!0},t.updatingPercentage={dependsOn:["updating","updatingPercentageValue"],readOnly:!0,value:0,get:function(){return this.updating?this.updatingPercentageValue:0}}}.apply(null,r))||(e.exports=n)},1524:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(10),i(0),i(8),i(1),i(1325),i(1357),i(440)],void 0===(n=function(e,t,i,r,n,a,o,l,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.minDataLevel=0,t.maxDataLevel=1/0,t._isUpdating=!1,t}return i(t,e),Object.defineProperty(t.prototype,"imageFormatIsOpaque",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isOpaque",{get:function(){return this.fullOpacity>=1&&this.imageFormatIsOpaque},enumerable:!0,configurable:!0}),t.prototype.getTileUrl=function(e,t,i){return this.layer.getTileUrl(e,t,i)},t.prototype.updatingChanged=function(e){this._isUpdating=e,this.notifyChange("updating")},t.prototype.isUpdating=function(){return this._isUpdating},t.prototype._getTileInfoSupportError=function(e,t){var i=s.checkIfTileInfoSupportedForView(e,t,this.view.spatialReference,this.view.basemapTerrain.manifold);if(i){var r={layer:this.layer,error:i},a=void 0;switch(i.name){case"tilingscheme:local-gcs-not-supported":a=new n("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",r);break;case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":a=new n("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",r);break;default:a=new n("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",r)}return a}return null},t.prototype._getTileInfoCompatibilityError=function(e,t){return t.compatibleWith(e)?null:new n("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")},t.prototype._updateMinMaxDataLevel=function(){var e,t=1/0,i=0;this.tileInfo.lods.forEach(function(e){t=Math.min(e.level,t),i=Math.max(e.level,i)}),e=[t,i],this.minDataLevel=e[0],this.maxDataLevel=e[1]},r([a.property({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),r([a.property(l.updatingPercentage)],t.prototype,"updatingPercentage",void 0),r([a.property(l.updatingPercentageValue)],t.prototype,"updatingPercentageValue",void 0),r([a.property()],t.prototype,"fullExtent",void 0),r([a.property({readOnly:!0,dependsOn:["fullOpacity","imageFormatIsOpaque"]})],t.prototype,"isOpaque",null),r([a.property()],t.prototype,"layer",void 0),r([a.property()],t.prototype,"minDataLevel",void 0),r([a.property()],t.prototype,"maxDataLevel",void 0),r([a.property()],t.prototype,"tileInfo",void 0),r([a.subclass("esri.views.3d.layers.TiledLayerView3D")],t)}(a.declared(o))}.apply(null,r))||(e.exports=n)},2177:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(10),i(0),i(8),i(16),i(7),i(6),i(15),i(1),i(1524),i(1318)],void 0===(n=function(e,t,i,r,n,a,o,l,s,p,u,d){var c=o.getLogger("esri.views.3d.layers.WMTSLayerView3d");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new a,t}return i(t,e),t.prototype.initialize=function(){var e=this,t=s.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeDone").then(function(){var t=function(){return new n("layerview:no-compatible-tiling-scheme","None of the tiling schemes supported by the service are compatible with the scene.")};if(!e.view.basemapTerrain.tilingSchemeLocked)return l.reject(t());var i,r=e.view.basemapTerrain.tilingScheme,a=e.layer.activeLayer;if(a&&a.tileMatrixSet){var o=(i=a.tileMatrixSet).tileInfo,s=e._getTileInfoSupportError(o,i.fullExtent)||e._getTileInfoCompatibilityError(o,r);if(s)return l.reject(s)}else{if(!(i=e._getCompatibleTileMatrixSet()))return l.reject(t());a.tileMatrixSetId=i.id}e.tileInfo=i.tileInfo,e.fullExtent=i.fullExtent,e._updateMinMaxDataLevel()});this.addResolvingPromise(t),this.when(function(){return e._initialized()})},t.prototype.destroy=function(){this._handles.removeAll()},t.prototype.refresh=function(){this.emit("data-changed")},t.prototype.canResume=function(){if(!this.inherited(arguments))return!1;var e=this.layer.activeLayer.tileMatrixSet;return e&&!this._getTileInfoError(e.tileInfo,e.fullExtent)},t.prototype.doRefresh=function(){this.suspended||this.emit("data-changed")},t.prototype._initialized=function(){var e=this;this._handles.add(this.layer.activeLayer.watch("styleId",function(t){e.refresh()})),this._handles.add(this.layer.watch("activeLayer",function(t){var i=t.tileMatrixSet;if(i){var r=e._getTileInfoError(i.tileInfo,i.fullExtent);r&&(c.error("The selected tile matrix set is not compatible with the view",r),i=null)}else(i=e._getCompatibleTileMatrixSet())?t.tileMatrixSetId=i.id:c.error("The layer does not provide a tiling scheme that is compatible with the view");e.notifyChange("suspended"),e.canResume()&&e.refresh()}))},t.prototype._getCompatibleTileMatrixSet=function(){var e=this;return this.layer.activeLayer.tileMatrixSets.find(function(t){var i=t.tileInfo;return!e._getTileInfoError(i,t.fullExtent)})},t.prototype._getTileInfoError=function(e,t){return this._getTileInfoSupportError(e,t)||this._getTileInfoCompatibilityError(e,this.view.basemapTerrain.tilingScheme)},r([p.property({aliasOf:"layer.fullExtent"})],t.prototype,"fullExtent",void 0),r([p.property()],t.prototype,"layer",void 0),r([p.property({aliasOf:"layer.tileInfo"})],t.prototype,"tileInfo",void 0),r([p.subclass("esri.views.3d.layers.WMTSLayerView3D")],t)}(p.declared(u,d))}.apply(null,r))||(e.exports=n)}}]);