import BXRadioButtonGroup from '@carbon/web-components/es/components/radio-button/radio-button-group';
import BXRadioButton from '@carbon/web-components/es/components/radio-button/radio-button';
import './helper-text';
import { LitElement, css, html } from 'lit';


export class MyRadio extends LitElement {

  static formAssociated = true;


  static properties = {
    id: { type: String, reflect: false },
    name: {type: String, reflect: true },
    value: {type: String, reflect: true },
    label: {type: String, reflect: true },
    errorText: {type: String, reflect: false },
    invalid: { type: Boolean, reflect: false },
  };

  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.id = self.crypto.randomUUID();
    this.name = "";
    this.value = "";
    this.label = "";
    this.errorText = "";
    this.invalid = false;
    this.checked = false;
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
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 24px auto;
  grid-template-rows: 1rem auto;
  gap: 8px;
}



    `;
  }



  render() {
    return html`
   
    <label class="form-control">
    <slot name="input"></slot>
    <slot name="label"></slot>
    ${this.invalid ? html`<span><span>` : ""}
    <my-helper-text ?display=${this.invalid} error>${this.errorText}</my-helper-text> 
    </label>

    `;
  }


}

customElements.define('my-radio', MyRadio)







