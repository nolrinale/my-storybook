import BXRadioButtonGroup from '@carbon/web-components/es/components/radio-button/radio-button-group';
import BXRadioButton from '@carbon/web-components/es/components/radio-button/radio-button';
import './helper-text';
import { LitElement, css, html } from 'lit';


export class ClearRadioButton extends LitElement {

  static get formAssociated() {
    return true;
  }

  //reflecting these as attributes (Important!)
  static properties = {
    id: { type: String, reflect: false },
    name: {type: String, reflect: true },
    value: {type: String, reflect: true },
    errorText: {type: String, reflect: true },
    invalid: { type: Boolean, reflect: true },
  
  };

  constructor() {
    super();
    this.internals = this.attachInternals();
    this.id = self.crypto.randomUUID();
    this.name = "";
    this.value = "";
    this.errorText = "";
    this.invalid = false;
  }
  


  render() {
    return html`

        <div class="bx--radio-button-wrapper">
          <input id="${this.id}" class="bx--radio-button" type="radio" value="${this.value}" name="${this.name}">
          <label for="${this.id}" class="bx--radio-button__label">
              <span class="bx--radio-button__appearance ${this.invalid ? "invalid" : ""}"></span>
              <span class="bx--radio-button__label-text">
                <slot></slot>
              </span>
            </label>
            <my-helper-text ?display=${this.invalid} error>${this.errorText}</my-helper-text> 
        </div>
        
    `;
  }



}

ClearRadioButton.styles = [
  BXRadioButton.styles,
  css`

  .bx--radio-button-wrapper {
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  
  .invalid {
    border-color: red;
  }

  .invalid:before {
    background-color:red;
  }

  `
]

customElements.define('clear-radio-button', ClearRadioButton)












export class ClearRadioButtonGroup extends LitElement {
  //reflecting these as attributes (Important!)
  static properties = {
    value: {type: String, reflect: true },
    invalid: { type: Boolean, reflect: true },
  
  };

  constructor() {
    super();
    this.value = "";
    this.invalid = false;
  }


  render() {
    return html`
    <form>
    <fieldset class="bx--fieldset">
	<legend class="bx--label">Radio button label</legend>
	<div class="bx--form-item">
		<div class="bx--radio-button-group  bx--radio-button-group--vertical ">
			<div class="bx--radio-button-wrapper">

      <slot></slot>

		</div>
    <my-helper-text display class="bx--form-requirement">Validation Message Here</my-helper-text>
	</div>
</fieldset>
</form>
    `;
  }

}

customElements.define('clear-radio-button-group', ClearRadioButtonGroup);