import { html } from 'lit';
import '@carbon/web-components/es/components/dropdown/index.js';
import './Dropdown.js';

export default {
    title: "Carbon/Dropdown",
}

export const DefaultCARBON = () => html`
<bx-dropdown value="bar">
  <bx-dropdown-item value="foo" disabled>Foo</bx-dropdown-item>
  <bx-dropdown-item value="bar">Bar</bx-dropdown-item>
  <bx-dropdown-item value="baz">Baz</bx-dropdown-item>
</bx-dropdown>
`

export const DefaultMY = () => html`
<my-dropdown value="bar">
  <bx-dropdown-item value="foo" disabled>Foo</bx-dropdown-item>
  <bx-dropdown-item value="bar">Bar</bx-dropdown-item>
  <bx-dropdown-item value="baz">Baz</bx-dropdown-item>
</my-dropdown>
`