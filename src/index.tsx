import "./config";

import App from "./widgets/models/App";

const state: {[key: string]: any} = {};

export const appController = () => {

  const app = new App({
    appName: "Blank Portal App",
    container: document.getElementById('app') as HTMLElement
  });
};

(navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1) ? alert("This application will not work with IE. Please use Google Chrome") : appController();

