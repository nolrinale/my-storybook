import BXRadioButtonGroup from '@carbon/web-components/es/components/radio-button/radio-button-group';
import BXRadioButton from '@carbon/web-components/es/components/radio-button/radio-button';
import './helper-text';
import { LitElement, css, html, nothing } from 'lit';
import {LightdomController} from './lightdom-controller.js';

export class MyRadio extends LitElement {

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
  }



  controller = new LightdomController(this, {
    render: () => html`
    <input slot="input" name="input" type="radio" id="${this.id}" value="${this.value}" name="${this.name}"></slot>
    <label slot="label" for="${this.id}">${this.label}</label>
    `
  })

  render() {
    return html`
    <div class="form-control">
      <slot name="input"></slot>
      <slot name="label"></slot>
      ${this.invalid ? html`<span><span>` : ""}
      <my-helper-text ?display=${this.invalid} error>${this.errorText}</my-helper-text> 
    </div>
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
}

::slotted(input) {
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


    `;
  }
}

customElements.define('my-radio', MyRadio)







