import esri = __esri;

import Accessor from "esri/core/Accessor";
import { whenOnce } from "esri/core/watchUtils";
import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import Expand from "esri/widgets/Expand";
import ScaleBar from "esri/widgets/ScaleBar";
import BaseMapGallery from "esri/widgets/BasemapGallery";
import Home from "esri/widgets/Home";
import Zoom from "esri/widgets/Zoom";

import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";

export interface AppParams {
  appName: string;
  map: EsriMap;
  view: MapView;
}

@subclass("widgets.App.AppViewModel")
class AppViewModel extends declared(Accessor) {
  @property() 
  appName: string;

  @property() 
  map: EsriMap;

  @property() 
  view: MapView;

  constructor(params?: Partial<AppParams>) {

    super(params);
    whenOnce(this, "view").then(this.onload.bind(this));

  }

  onload() {

    const basemapGallery = new BaseMapGallery({
      view: this.view,
      activeBasemap: this.map.basemap
    });

    const home = new Home({
      view: this.view
    });

    const scalebar = new ScaleBar({ view: this.view, style: "ruler" });
    this.view.ui.add(new Zoom({view: this.view}), "top-right");
    this.view.ui.add(home, "top-right");
    this.view.ui.add(scalebar, "bottom-right");
    this.view.ui.add(new Expand({content: basemapGallery, expandTooltip: "Basemaps"}), "top-right");
    
  
  }
}

export default AppViewModel;
