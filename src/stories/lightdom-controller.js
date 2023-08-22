import { LitElement, css, html, nothing, render } from 'lit';

export class LightdomController  {
  host;

  constructor(host, options) {
    this.host = host;
    this.options = options;
    host.addController(this);
  }

  hostConnected() {
    console.log(this.host);
    console.log("Controller Attached");
  }

  hostDisconnected() {
    render(nothing);
  }

  hostUpdated() {
    this.renderToLightDom();
  }
  //...
  renderToLightDom() {
    render(this.options.render(), this.host);
  }
}