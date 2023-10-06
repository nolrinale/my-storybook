import BXRadioButtonGroup from '@carbon/web-components/es/components/radio-button/radio-button-group';
import BXRadioButton from '@carbon/web-components/es/components/radio-button/radio-button';
import './helper-text';
import { LitElement, css, html, nothing } from 'lit';
import {LightdomController} from './lightdom-controller.js';



export class MyRadio extends LitElement {

  radioSvgChecked = html`
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
  <svg width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
  <g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-3a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/> </g> </g>
  </svg>
  `;

  radioSvgUnchecked = html`
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
  <svg width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#E50041">
  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
  <g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-3a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/> </g> </g>
  </svg>
  `;

  static properties = {
    name: {type: String, reflect: true },
    value: {type: String, reflect: true },
    label: {type: String, reflect: true },
    invalid: {type: Boolean},
    errorText: {type: String},
  };

  constructor() {
    super();
    this.id = self.crypto.randomUUID();
    this.name = "";
    this.value = "";
    this.label = "";
    this.errorText = "";
    this.invalid = false;

    //this.addEventListener('change', (e) => {console.log(e.target)})
  }

 
  

  controller = new LightdomController(this, {
    render: () => html`
    <input slot="input" name="input" type="radio" id="${this.id}" value="${this.value}" name="${this.name}"></slot>
    <label slot="label" for="${this.id}">${this.label}</label>
    `
  });


  render() {
    return html`
    <div class="form-control">
      <div class="dot">${this.isChecked ? this.radioSvgUnchecked : this.radioSvgChecked}</div><slot name="input"></slot>
      <slot name="label"></slot>
      ${this.invalid ? html`<span><span>` : ""}
      <my-helper-text ?display=${this.invalid} error>${this.errorText}</my-helper-text> 
    </div>

    ${console.log(this.isChecked)}
    `;
  }

  static get styles() {
    return css`


:root {

  --my-styles-color-a: #034D66;
  --my-styles-color-b: #4EC3CD;
  --my-styles-color-c: #E50041;
  --my-styles-color-d: #B3B3B3;

  --my-styles-size-a: 8px;
  --my-styles-size-b: 16px;
  --my-styles-size-c: 24px;
  --my-styles-size-d: 32px;

}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.form-control {
  font-family: Inter, system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 24px auto;
  grid-template-rows: auto;
  gap: 8px;
  position:relative;
}

:host(my-radio) input[type="radio"]:before  {
  content:"aaaaa";
  /* The native appearance is hidden */
  appearance: none;
  -webkit-appearance: none;

  /* For a circular appearance we need a border-radius. */
  border-radius: 50%;

  /* The background will be the radio dot's color. */
  background: #FF572233;

  /* The border will be the spacing between the dot and the outer circle */
  border: 3px solid #FFF;

  /* And by creating a box-shadow with no offset and no blur, we have an outer circle */
  box-shadow: 0 0 0 1px #FF5722;
}

.dot {
  position:absolute;
  left:40px;
  top:-2px;
}

.dot svg {
  width:24px;
  height:24px;
}


    `;
  }
}

customElements.define('my-radio', MyRadio)







