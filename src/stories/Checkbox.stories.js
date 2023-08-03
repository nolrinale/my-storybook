import { html } from 'lit';
import '@carbon/web-components/es/components/checkbox/checkbox.js';
import './Checkbox.js';

export default {
    title: "Carbon/Checkbox",
}

export const DefaultCARBON = () => html`
<bx-checkbox label-text="Lorem Ipsum"></bx-checkbox>
`

export const DefaultMY = () => html`
<my-checkbox label-text="Lorem Ipsum"></my-checkbox>
`