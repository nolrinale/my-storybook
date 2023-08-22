import '@carbon/web-components/es/components/radio-button/radio-button-group';
import '@carbon/web-components/es/components/radio-button/radio-button';
import { html } from 'lit';
import './helper-text.js';
import './Radio.js';

export default {
    title: "Carbon/Radio",
    argTypes: {
      invalid: {
        control: { type: 'boolean' },
      },
      errorText: {
        control: { type: 'text'},
      },
      horizontalAlign: {
        control: { type: 'boolean'},
      }
    },
    args: {
      errorText: "This is an Error!",
    }
}

export const DefaultCARBON = () => html`
<bx-radio-button-group>
<bx-radio-button>Radio 1</bx-radio-button>
<bx-radio-button>Radio 2</bx-radio-button>
<bx-radio-button>Radio 3</bx-radio-button>
</bx-radio-button-group>
`

export const DefaultCarbonStatic = () => html`
<fieldset class="bx--fieldset">
	<legend class="bx--label">Radio button label</legend>
	<div class="bx--form-item">
		<div class="bx--radio-button-group ">
			<div class="bx--radio-button-wrapper">
				<input id="radio-button-ka60q97rt-1" class="bx--radio-button" type="radio" value="red" name="radio-button" tabindex="0" checked>
				<label for="radio-button-ka60q97rt-1" class="bx--radio-button__label">
            <span class="bx--radio-button__appearance"></span>
            <span class="bx--radio-button__label-text">Radio button label</span>
          </label>
			</div>
			<div class="bx--radio-button-wrapper">
				<input id="radio-button-ka60q97rt-2" class="bx--radio-button" type="radio" value="green" name="radio-button" tabindex="0">
				<label for="radio-button-ka60q97rt-2" class="bx--radio-button__label">
            <span class="bx--radio-button__appearance"></span>
            <span class="bx--radio-button__label-text">Radio button label</span>
          </label>
			</div>
			<div class="bx--radio-button-wrapper">
				<input id="radio-button-ka60q97rt-3" class="bx--radio-button" type="radio" value="blue" name="radio-button" tabindex="0" disabled>
				<label for="radio-button-ka60q97rt-3" class="bx--radio-button__label">
            <span class="bx--radio-button__appearance"></span>
            <span class="bx--radio-button__label-text">Radio button label</span>
          </label>
			</div>
		</div>
	</div>
</fieldset>
`

export const DefaultMyRadio = (args) => html`

<div class="story-container" style="display:flex;flex-direction:${args.horizontalAlign ? 'row' : 'column'}">

  <my-radio value="Yellow" name="radio" label="My Label Yellow" ?invalid="${args.invalid}" errorText="${args.errorText}"></my-radio>
  <my-radio value="Blue" name="radio" label="My Label Green" ?invalid="${args.invalid}" errorText="${args.errorText}"></my-radio>
  <my-radio value="Green" name="radio" label="My Label Blue" ?invalid="${args.invalid}" errorText="${args.errorText}"></my-radio>


</div>


`
