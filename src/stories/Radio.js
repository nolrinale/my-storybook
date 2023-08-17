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
  --form-control-color: rebeccapurple;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

::slotted(*) {
  background-color: #c6c6c6;
}


.form-control {
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  grid-template-rows: 1em auto;
  gap: 8px;
}

.form-control + .form-control {
  margin-top: 1em;
}

.form-control:focus-within {
  color: var(--form-control-color);
}

input[type="radio"] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  background-color: var(--form-background);
  /* Not removed via appearance */
  margin: 0;

  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
}

input[type="radio"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
  /* Windows High Contrast Mode */
  background-color: CanvasText;
}

input[type="radio"]:checked::before {
  transform: scale(1);
}

input[type="radio"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
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







