(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/HandleOwner":1472,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/core/HandleOwner":1472,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/layers/support/FeatureProcessing":1518,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/views/2d/layers/features/controllers/BaseController":1714,"esri/core/SetPool":1715,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/core/SetPool":1715,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/views/2d/layers/features/controllers/OnDemandController":1786,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/views/2d/layers/features/support/DataTileFeaturesIndex":2167,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/blank-esri-webpack-app/node_modules/arcgis-js-api/views/2d/layers/features/support/TileUpdateQueue":2168})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1472:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(4),i(16),i(1)],void 0===(n=function(e,t,i,r,n,o,s){return function(e){function t(){var t=e.call(this)||this;return t.handles=new o,t}return i(t,e),t.prototype.destroy=function(){this.handles.destroy()},r([s.property({readOnly:!0})],t.prototype,"handles",void 0),r([s.subclass("esri.core.HandleOwner")],t)}(s.declared(n))}.apply(null,r))||(e.exports=n)},1518:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(4),i(5),i(1),i(422),i(426)],void 0===(n=function(e,t,i,r,n,o,s,u,l){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var n;return i(t,e),n=t,t.fromWorker=function(e){if(!e)return null;var t=JSON.parse(e),i=new n;return i.fields=t.fields&&t.fields.map(function(e){return u.fromJSON(e)}),i.options=t.options,i.process=new(Function.bind.apply(Function,[void 0].concat(t.process.args,[t.process.body]))),i},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new n(o.clone({fields:this.fields,options:this.options,process:this.process}))},t.prototype.getField=function(e){return l.getField(e,this.fields)},t.prototype.refresh=function(){this.notifyChange("version")},t.prototype.toWorker=function(){var e=this.process.toString();return JSON.stringify({fields:this.fields,options:this.options,process:{body:e.substring(e.indexOf("{")+1,e.lastIndexOf("}")),args:e.slice(e.indexOf("(")+1,e.indexOf(")")).match(/([^\s,]+)/g)}})},r([s.property({type:[u]})],t.prototype,"fields",void 0),r([s.property()],t.prototype,"options",void 0),r([s.property()],t.prototype,"process",void 0),r([s.property({readOnly:!0,dependsOn:["process","options","fields"]})],t.prototype,"version",null),n=r([s.subclass("esri.layers.support.FeatureProcessing")],t)}(s.declared(n))}.apply(null,r))||(e.exports=n)},1714:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(4),i(1472),i(1)],void 0===(n=function(e,t,i,r,n,o,s){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.processor=null,t.remoteClient=null,t.service=null,t.tileStore=null,t}return i(t,e),t.prototype.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])},t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"spatialReference",{get:function(){var e=this.get("tileStore.spatialReference");return e&&e.toJSON()||null},enumerable:!0,configurable:!0}),r([s.property()],t.prototype,"processor",void 0),r([s.property({constructOnly:!0})],t.prototype,"remoteClient",void 0),r([s.property({constructOnly:!0})],t.prototype,"service",void 0),r([s.property({dependsOn:["tileStore.spatialReference"]})],t.prototype,"spatialReference",null),r([s.property({constructOnly:!0})],t.prototype,"tileStore",void 0),r([s.subclass()],t)}(s.declared(n,o));t.default=u}.apply(null,r))||(e.exports=n)},1715:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(1460)],void 0===(n=function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._pool=[],this._set=new i.default}return e.prototype.acquire=function(){if(0===this._pool.length)return new i.default;var e=this._pool.pop();return this._set.delete(e),e},e.prototype.release=function(e){e&&!this._set.has(e)&&(e.clear(),this._pool.length<5e4&&(this._pool.push(e),this._set.add(e)))},e.acquire=function(){return n.acquire()},e.release=function(e){return n.release(e)},e}();t.default=r;var n=new r}.apply(null,r))||(e.exports=n)},1786:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(11),i(1460),i(9),i(29),i(8),i(7),i(6),i(1),i(445),i(1771),i(1518),i(468),i(438),i(148),i(1714),i(2167),i(1665),i(2168),i(413),i(1428)],void 0===(n=function(e,t,i,r,n,o,s,u,l,a,d,p,c,h,f,y,_,g,v,b,m,T,x,I){Object.defineProperty(t,"__esModule",{value:!0});var w=a.getLogger("esri.views.2d.layers.features.controllers.OnDemandController"),F=s("esri-featurelayer-webgl"),P=s("esri-mobile"),O={maxDrillLevel:F&&"object"==typeof F&&null!=F.maxDrillLevel?F.maxDrillLevel:P?1:4,maxRecordCountFactor:F&&"object"==typeof F&&null!=F.maxRecordCountFactor?F.maxRecordCountFactor:P?1:3,enablePBFQuery:!F||"object"!=typeof F||null==F.enablePBFQuery||F.enablePBFQuery},C=new o.default,E=[],j=function(){function e(){this.done=!1,this.displayTile=null,this.tile=null,this.queryInfoHash=null,this.returnExceeded=!1,this.objectIds=new o.default}return Object.defineProperty(e.prototype,"key",{get:function(){return this.tile.key},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this.tile.id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bounds",{get:function(){return this.tile.bounds},enumerable:!0,configurable:!0}),e}(),k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="on-demand",t._queryInfoHash=null,t._processingInMainThread=!1,t._dataTileIndex=new b.default,t}return i(t,e),t.prototype.initialize=function(){var e=this;this._fetchQueue=new I({concurrency:10,strategy:"center-first",tileInfoView:new x(this.tileStore.tileInfo),process:function(t){return e._fetchTile(t)}}),this._updateQueue=new T.default({tileInfoView:new x(this.tileStore.tileInfo),process:function(t){return e._updateTile(t)}}),this.handles.add(this.watch("processor",this._switchProcessor.bind(this)))},t.prototype.destroy=function(){this._fetchQueue.clear(),this._updateQueue.clear(),this.store&&(this.store.destroy(),this._set("store",null))},Object.defineProperty(t.prototype,"processing",{get:function(){return f.fromWorker(this.configuration.processing)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._fetchQueue.length+this._fetchQueue.onGoingCount>0||this._updateQueue.updating},enumerable:!0,configurable:!0}),t.prototype.refresh=function(){},t.prototype.setViewState=function(e){this._fetchQueue.state=e,this._updateQueue.state=e},t.prototype.queryFeatures=function(e){return this.store.executeQuery(g.fromJSON(e))},t.prototype.queryFeatureCount=function(e){return this.store.executeQueryForCount(g.fromJSON(e))},t.prototype.queryObjectIds=function(e){return this.store.executeQueryForIds(g.fromJSON(e))},t.prototype.queryExtent=function(e){return this.store.executeQueryForExtent(g.fromJSON(e))},t.prototype.redraw=function(){this._updateQueue.pause(),this._manageTiles(this.tileStore.tiles),this._updateQueue.resume()},t.prototype.onTileUpdate=function(e){this.store&&this._manageTiles(e.added,e.removed)},t.prototype._manageTiles=function(e,t){void 0===t&&(t=null);for(var i=this._dataTileIndex,r=this._fetchQueue,n=this._updateQueue,o="esriGeometryPoint"===this.service.geometryType,s=this,u=0,l=e;u<l.length;u++){!function(e){var t=i.get(e.id);t?(t.displayTile=e,o?i.forEach(function(i){m.isChildOf(i,t)&&(i.displayTile=e)}):t.done=!1):((t=new j).tile=e.clone(),t.displayTile=e,i.add(t)),s._processDataTile(t)}(p=l[u])}if(t)for(var a=0,d=t;a<d.length;a++){var p=d[a];C.add(p),n.cancel(p.id)}i.forEach(function(e){C.has(e.displayTile)&&E.push(e)});for(var c=0,h=E;c<h.length;c++){var f=h[c];r.has(f.id)&&r.get(f.id).cancel(),i.delete(f)}E.length=0,C.clear()},t.prototype._processDataTile=function(e){var t=this,i=e.displayTile,r=e.key,n=this._dataTileIndex,o=this._fetchQueue,s=r.id,u=this._queryInfoHash,l=r.level-i.key.level>=O.maxDrillLevel;if(n.add(e),e.done||o.has(s)){if(e.queryInfoHash!==u||e.returnExceeded!==l)if(e.done)e.done=!1;else{if(!o.isOngoing(s))return e.queryInfoHash=u,void(e.returnExceeded=l);o.get(s).cancel()}}else e.queryInfoHash=u,e.returnExceeded=l;e.done?this._invalidateTile(e.displayTile):o.has(s)||(o.push(e).then(function(i){if(e.done=!0,c.hydrateOptimizedFeatureSet(i),i.exceededTransferLimit)if(e.returnExceeded)n.load(e,i.features);else for(var r=0,o=e.tile.createChildTiles();r<o.length;r++){var s=o[r],u=new j;u.tile=s,u.displayTile=e.displayTile,t._processDataTile(u)}else n.load(e,i.features);t._invalidateTile(e.tile)}).catch(function(t){e.done=!0}).then(function(){t.notifyChange("updating")}),this.notifyChange("updating"))},t.prototype._fetchTile=function(e){var t=this.processor.queryInfo,i=this._createQuery(e.displayTile,e.tile,t,e.returnExceeded),r=this.service.source;return O.enablePBFQuery&&this.service.capabilities.query.supportsFormatPBF?y.executeQueryPBF(r,i).then(function(e){return e.data}):y.executeQuery(r,i).then(function(e){return c.convertFromFeatureSet(e.data)})},t.prototype._invalidateTile=function(e){for(var t=this._updateQueue,i=0,r=this.tileStore.intersections(e,this.processor.queryInfo.pixelBuffer);i<r.length;i++){var n=r[i].tile;t.has(n.id)||t.push(n.id)}this.notifyChange("updating")},t.prototype._updateTile=function(e){var t=this,i=this.tileStore.get(e),r=this.processor.queryInfo,n=r.returnCentroid,o=r.returnGeometry,s=r.pixelBuffer,u=this.store.executeTileQuery(i,{pixelBuffer:s,returnGeometry:o,returnCentroid:n}),l=u.features,a=u.objectIds;this.notifyChange("updating");var d={features:l,fields:this.service.fields,objectIdFieldName:this.service.objectIdField,transform:{originPosition:"upperLeft",scale:[i.resolution,i.resolution],translate:[i.bounds[0],i.bounds[3]]}};return this._applyProcessing(d).catch(function(e){return e&&"cancel"!==e.dojoType&&w.error("updating-tile",e),d}).then(function(e){var r=[];return i.objectIds.forEach(function(e){a.has(e)||r.push(e)}),t.processor.onTileData(i,{addOrUpdate:e.features,remove:r}).catch(function(e){e&&"cancel"!==e.dojoType&&w.error("updating-tile",e)}).then(function(){t.notifyChange("updating")})})},t.prototype._switchProcessor=function(e,t){var i=e.queryInfo,r=i.definitionExpression,n=i.gdbVersion,o=i.historicMoment,s=this._createQueryInfoHash(e);this._queryInfoHash!==s&&(this._queryInfoHash=s,this.store&&this.store.destroy(),this._set("store",new h.default({definitionExpression:r,fields:this.service.fields,geometryType:this.service.geometryType,objectIdField:this.service.objectIdField,hasM:!1,hasZ:!1,spatialReference:this.spatialReference,cacheSpatialQueries:!0,gdbVersion:n,historicMoment:null!=o&&new Date(o)})),this._dataTileIndex.store=this.store,this._dataTileIndex.forEach(function(e){e.done=!1,e.displayTile.objectIds.clear()})),this._fetchQueue.pause(),this._updateQueue.pause(),this._fetchQueue.reset(),this._updateQueue.clear(),this._manageTiles(this.tileStore.tiles),this._fetchQueue.resume(),this._updateQueue.resume(),this.notifyChange("updating")},t.prototype._createQuery=function(e,t,i,r){var n=this;void 0===r&&(r=!0);var o=new g,s=i.historicMoment,l="esriGeometryPoint"===this.service.geometryType?t:e,a=_.default.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:l.resolution,extent:{xmin:l.bounds[0],ymin:l.bounds[1],xmax:l.bounds[2],ymax:l.bounds[3],spatialReference:this.spatialReference}}),d=i.outFields,p=i.orderByFields;return this.processing&&(d=d&&d.filter(function(e){return!n.processing.getField(e)}),p=p&&p.filter(function(e){return!n.processing.getField(e)})),d=d.length/this.service.fields.length>=.75?["*"]:d,o.maxRecordCountFactor=O.maxRecordCountFactor,o.gdbVersion=i.gdbVersion,o.historicMoment=null!=s?new Date(s):null,o.outFields=d,o.where=i.definitionExpression||"1=1",o.geometry=u.Extent.fromJSON({xmin:t.bounds[0],ymin:t.bounds[1],xmax:t.bounds[2],ymax:t.bounds[3],spatialReference:this.spatialReference}),this.service.capabilities.query.supportsQuantization?(o.quantizationParameters=a,"esriGeometryPolyline"===this.service.geometryType&&(o.maxAllowableOffset=a.tolerance)):o.maxAllowableOffset=a.tolerance,o.resultType="tile",o.returnExceededLimitFeatures=r,o.returnGeometry=!0,o.returnCentroid=i.returnCentroid,o.orderByFields=p,o},t.prototype._applyProcessing=function(e){var t=this.processing;if(!t)return d.resolve(e);if(this._processingInMainThread)return this.remoteClient.invoke("executeProcessing",{featureSet:e});try{var i=t.process(e,t.options);return i?"then"in i?i:d.resolve(i):d.reject(new l("FeatureLayer","invalid processing.process() method, returns nothing"))}catch(t){return this._processingInMainThread=!0,this.remoteClient.invoke("executeProcessing",{featureSet:e})}},t.prototype._createQueryInfoHash=function(e){var t=this,i=e.queryInfo,r=i.orderByFields,n=i.outFields,o=e.queryInfo,s=o.definitionExpression,u=o.gdbVersion,l=o.historicMoment;return this.processing&&(n=n&&n.filter(function(e){return!t.processing.getField(e)}),r=r&&r.filter(function(e){return!t.processing.getField(e)})),n&&n.sort(),r&&r.sort(),JSON.stringify({definitionExpression:s,outFields:n.length/this.service.fields.length>=.75?["*"]:n,orderByFields:r,gdbVersion:u,historicMoment:l})},r([p.property()],t.prototype,"configuration",void 0),r([p.property({readOnly:!0,dependsOn:["configuration"]})],t.prototype,"processing",null),r([p.property({readOnly:!0})],t.prototype,"store",void 0),r([p.property()],t.prototype,"updating",null),r([p.subclass()],t)}(p.declared(v.default));t.default=k}.apply(null,r))||(e.exports=n)},2167:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(219),i(1460),i(1715),i(1665)],void 0===(n=function(e,t,i,r,n,o){Object.defineProperty(t,"__esModule",{value:!0});var s=[],u=new r.default,l=function(){function e(){this._tileById=new i.default,this._tilesToFeatures=new i.default,this._featureToTiles=new i.default}return e.prototype.destroy=function(){this.clear()},e.prototype.add=function(e){var t=this;if(!this.has(e.id)){var i=e;this._tileById.set(i.id,i),this._tilesToFeatures.set(i,n.default.acquire()),this._tilesToFeatures.forEach(function(e,r){if(i!==r)if(o.isParentOf(i,r))e.forEach(function(e){t._link(i,e)});else if(o.isChildOf(i,r))for(var n=0,s=t.store.searchBounds(i.bounds);n<s.length;n++){var u=s[n].oid;e.has(u)&&t._link(i,u)}})}},e.prototype.clear=function(){this._tilesToFeatures.forEach(function(e){return n.default.release(e)}),this._tilesToFeatures.clear(),this._featureToTiles.forEach(function(e){return n.default.release(e)}),this._featureToTiles.clear(),this._tileById.clear()},e.prototype.delete=function(e){var t=this,i=this.get(e.id);s.length=0,this._tilesToFeatures.get(i).forEach(function(e){var r=t._featureToTiles.get(e);r.has(i)&&1===r.size?s.push(e):t._unlink(i,e)});for(var r=0,n=s;r<n.length;r++){var o=n[r];this._unlink(i,o)}this.store.delete(s),this._tilesToFeatures.delete(i),this._tileById.delete(i.id),s.length=0},e.prototype.forEach=function(e,t){return this._tileById.forEach(e,t)},e.prototype.get=function(e){return this._tileById.get(e)},e.prototype.has=function(e){return this._tileById.has(e)},e.prototype.load=function(e,t){var i=this,r=this.get(e.id);this._tilesToFeatures.has(r)||(this._tileById.set(r.id,r),this._tilesToFeatures.set(r,n.default.acquire()));for(var o=this.store.objectIdField,l=0,a=t;l<a.length;l++){var d=a[l];u.add(d.attributes[o])}s.length=0,this._tilesToFeatures.get(r).forEach(function(e){if(!u.has(e)){var t=i._featureToTiles.get(e);t.has(r)&&1===t.size?s.push(e):i._unlink(r,e)}});for(var p=0,c=s;p<c.length;p++){var h=c[p];this._unlink(r,h)}this.store.delete(s),this.store.load(t),u.forEach(function(e){i._link(r,e)}),u.clear(),s.length=0},e.prototype._link=function(e,t){this._featureToTiles.get(t)||this._featureToTiles.set(t,n.default.acquire()),this._featureToTiles.get(t).add(e),this._tilesToFeatures.get(e).add(t)},e.prototype._unlink=function(e,t){this._featureToTiles.get(t).delete(e),this._tilesToFeatures.get(e).delete(t),0===this._featureToTiles.get(t).size&&(n.default.release(this._featureToTiles.get(t)),this._featureToTiles.delete(t))},e}();t.default=l}.apply(null,r))||(e.exports=n)},2168:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(46),i(1539),i(80)],void 0===(n=function(e,t,i,r,n){Object.defineProperty(t,"__esModule",{value:!0});var o=[0,0],s=function(){function e(e){this._queue=new Map,this._onGoingTileId=null,this._onGoingPromise=null,this._isPaused=!1,this._scheduledNextHandle=null,this.tileInfoView=null,this.tileInfoView=e.tileInfoView,this.process=e.process,this._next=this._next.bind(this),this._finalize=this._finalize.bind(this)}return Object.defineProperty(e.prototype,"length",{get:function(){return this._queue.size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"updating",{get:function(){return this._queue.size>0&&null!=this._onGoingPromise},enumerable:!0,configurable:!0}),e.prototype.cancel=function(e){this._onGoingTileId===e&&(this._onGoingPromise.cancel(),this._onGoingTileId=this._onGoingPromise=null),this._queue.delete(e)},e.prototype.clear=function(){this._queue.clear(),this._onGoingPromise&&(this._onGoingPromise.cancel(),this._onGoingTileId=this._onGoingPromise=null)},e.prototype.has=function(e){return this._queue.has(e)},e.prototype.isOngoing=function(e){return this._onGoingTileId===e},e.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())},e.prototype.push=function(e){this._queue.has(e)||(this._queue.set(e,r.TileKey.pool.acquire(e)),this._scheduleNext())},e.prototype.reset=function(){var e=this._onGoingTileId;e&&(this._onGoingPromise.cancel(),this.push(e))},e.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext())},e.prototype._finalize=function(){this._onGoingTileId=null,this._onGoingPromise=null,this._scheduleNext()},e.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)},e.prototype._scheduleNext=function(){this._isPaused||this._scheduledNextHandle||0===this._queue.size||null!=this._onGoingTileId||(this._scheduledNextHandle=i.schedule(this._next))},e.prototype._next=function(){if(null==this._scheduledNextHandle||0===this._queue.size||this._onGoingTileId)this._scheduledNextHandle=null;else{this._scheduledNextHandle=null;var e=this._peekByCenterFirst();r.TileKey.pool.release(this._queue.get(e)),this._queue.delete(e),this._onGoingTileId=e,this._onGoingPromise=this.process(e),function(e){return e&&"function"==typeof e.then}(this._onGoingPromise)?this._onGoingPromise.then(this._finalize,this._finalize):this._finalize()}},e.prototype._peekByCenterFirst=function(){if(!this.state)throw new Error("state not set");var e=this.tileInfoView,t=this.state.center,i=Number.POSITIVE_INFINITY,r=null;return this._queue.forEach(function(s){e.getTileCoords(o,s);var u=n.distance(o,t);u<i&&(i=u,r=s)}),r.id},e}();t.default=s}.apply(null,r))||(e.exports=n)}}]);