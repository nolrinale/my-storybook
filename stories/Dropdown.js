import { css, unsafeCSS } from 'lit';
import BXDropdown from '@carbon/web-components/es/components/dropdown/dropdown';
import '@carbon/web-components/es/components/dropdown/dropdown-item';
import stylesheet from './dropdown.scss';

class MyDropdown extends BXDropdown {}


MyDropdown.styles = [
  BXDropdown.styles,
  css`
  ${stylesheet}
  `,
];

customElements.define('my-dropdown', MyDropdown);

