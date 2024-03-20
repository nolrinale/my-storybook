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

export const DefaultCarbon = () => html`
<cds-radio-button-group
  label-position="right"
  orientation="horizontal"
  name="radio-group">
  <cds-radio-button label-text="Radio button" value="all"></cds-radio-button>
  <cds-radio-button
    label-text="Radio button"
    value="cloudFoundry"></cds-radio-button>
  <cds-radio-button
    label-text="Radio button"
    value="staging"></cds-radio-button>
</cds-radio-button-group>
`

export const DefaultMyRadio = (args) => html`

<div class="story-container" style="display:flex;flex-direction:${args.horizontalAlign ? 'row' : 'column'}">

  <my-radio value="Yellow" name="radio" label="My Label Yellow" ?invalid="${args.invalid}" errorText="${args.errorText}"></my-radio>
  <my-radio value="Blue" name="radio" label="My Label Green" ?invalid="${args.invalid}" errorText="${args.errorText}"></my-radio>
  <my-radio value="Green" name="radio" label="My Label Blue" ?invalid="${args.invalid}" errorText="${args.errorText}"></my-radio>


</div>


`
