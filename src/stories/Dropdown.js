import { css, unsafeCSS } from 'lit';
import BXDropdown from '@carbon/web-components/es/components/dropdown/dropdown';
import '@carbon/web-components/es/components/dropdown/dropdown-item';
import './dropdown.scss';

class MyDropdown extends BXDropdown {
    constructor () {
        super();
        this.classList.add("asdf");
    }

}


customElements.define('my-dropdown', MyDropdown);

