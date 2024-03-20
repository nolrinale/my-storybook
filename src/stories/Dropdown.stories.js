import { html } from 'lit';
import '@carbon/web-components/es/components/dropdown/dropdown';
import '@carbon/web-components/es/components/dropdown/dropdown-item';
import './Dropdown.js';

export default {
    title: "Carbon/Dropdown",
}

export const DefaultCARBON = () => html`
<cds-dropdown trigger-content="Select an item">
  <cds-dropdown-item value="all">Option 1</cds-dropdown-item>
  <cds-dropdown-item value="cloudFoundry">Option 2</cds-dropdown-item>
  <cds-dropdown-item value="staging">Option 3</cds-dropdown-item>
  <cds-dropdown-item value="dea">Option 4</cds-dropdown-item>
  <cds-dropdown-item value="router">Option 5</cds-dropdown-item>
</cds-dropdown>
`

export const DefaultMY = () => html`
<my-dropdown value="bar">
  <cds-dropdown-item value="foo" disabled>Foo</cds-dropdown-item>
  <cds-dropdown-item value="bar">Bar</cds-dropdown-item>
  <cds-dropdown-item value="baz">Baz</cds-dropdown-item>
</my-dropdown>
`