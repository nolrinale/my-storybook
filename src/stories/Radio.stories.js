import '@carbon/web-components/es/components/radio-button/radio-button-group';
import '@carbon/web-components/es/components/radio-button/radio-button';
import { html } from 'lit';
import './Radio.js';
import './helper-text.js'

export default {
    title: "Carbon/Radio",
}

export const DefaultCARBON = () => html`
<bx-radio-button-group>
<bx-radio-button>Radio 1</bx-radio-button>
<bx-radio-button>Radio 2</bx-radio-button>
<bx-radio-button>Radio 3</bx-radio-button>
</bx-radio-button-group>
`

export const DefaultMY = () => html`
<my-radio-button-group>
<my-radio-button>Radio 1</my-radio-button>
<my-helper-text display error>Helper Text</my-helper-text>
<my-radio-button>Radio 2</my-radio-button>
<my-helper-text display error>Helper Text</my-helper-text>
<my-radio-button>Radio 3</my-radio-button>
<my-helper-text display error>Helper Text</my-helper-text>
</my-radio-button-group>
`