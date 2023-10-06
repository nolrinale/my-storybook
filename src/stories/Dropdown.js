import { css, unsafeCSS } from 'lit';
import CDSDropdown from '@carbon/web-components/es/components/dropdown/dropdown';
import CDSDropdownItem from '@carbon/web-components/es/components/dropdown/dropdown-item';

class MyDropdown extends CDSDropdown {
    constructor () {
        super();
        this.classList.add("asdf");
    }

}


customElements.define('my-dropdown', MyDropdown);


