import BXRadioButtonGroup from '@carbon/web-components/es/components/radio-button/radio-button-group';
import BXRadioButton from '@carbon/web-components/es/components/radio-button/radio-button';
import './radio-clear.js'
import './helper-text';
import { LitElement, css, html } from 'lit';

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

    `;
  }

}

ClearRadioButtonGroup.styles = [
  BXRadioButtonGroup.styles,
  css``
]

customElements.define('clear-radio-button-group', ClearRadioButtonGroup);