import { html } from 'lit';
import '@carbon/web-components/es/components/dropdown/index.js';
import './Dropdown.js';

export default {
    title: "Carbon/Dropdown",
}

export const DefaultCARBON = () => html`
<cds-dropdown value="bar">
  <cds-dropdown-item value="foo">Foo</cds-dropdown-item>
  <cds-dropdown-item value="bar">Bar</cds-dropdown-item>
  <cds-dropdown-item value="baz">Baz</cds-dropdown-item>
</cds-dropdown>
`

export const DefaultMY = () => html`
<my-dropdown value="bar">
  <cds-dropdown-item value="foo" disabled>Foo</cds-dropdown-item>
  <cds-dropdown-item value="bar">Bar</cds-dropdown-item>
  <cds-dropdown-item value="baz">Baz</cds-dropdown-item>
</my-dropdown>
`