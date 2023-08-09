import BXCheckbox from '@carbon/web-components/es/components/checkbox/checkbox';
import { css } from 'lit';


class MyCheckbox extends BXCheckbox {
  constructor() {
    super();
    this.invalid = false;
  }

  get invalidCheckProperty() {
    return this.hasAttribute("invalid");
  }

  connectedCallback() {
    //Carbon events
    super.connectedCallback();

    //on first run we apply the invalid styles if needed
    if (this.invalidCheckProperty === true) {
      this.classList.add("bx--checkbox-invalid");
    } else {
      this.classList.remove("bx--checkbox-invalid");
    }

    //then we create an observer instance filtering only the 'invalid' status to avoid collision with Carbon events
    //reference: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe
    var target = document.querySelector("sdss-checkbox");
      const observerForInvalid = new MutationObserver(function (mutation) {
        if (mutation[0].oldValue === null) {
          target.classList.add("bx--checkbox-invalid");
        } else {
          target.classList.remove("bx--checkbox-invalid");
        }
      }),
      // we configure the observer to watch changes only for the 'invalid' attribute
      config = {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ["invalid"],
      };
    // attach observer
    observerForInvalid.observe(target, config);
  }

  disconnectedCallback() {
    //Carbon events
    super.disconnectedCallback();
    //we detach the observer on destroy
    observerForInvalid.disconnect();
  }

}


MyCheckbox.styles = [
  BXCheckbox.styles,
  css`
    .bx--checkbox-label {
      font-family: Inter, sans-serif;
      font-size:16px;
      margin-bottom: 5px;
      padding: 5px 0px 0px 1.80rem;
    }
    
    .bx--checkbox{
      position: fixed;
    }

    .bx--checkbox:checked + .bx--checkbox-label::before {
      border-width:2px;
      border-color: #034D66;
    }

    .bx--checkbox-label::before {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      border: 2px solid #046080;
    }

    :host(sdss-checkbox.bx--checkbox-invalid) .bx--checkbox-label::before{
      border-color:#E50041;
    }

    :host(sdss-checkbox.bx--checkbox-invalid) .bx--checkbox-label::after{
      border-color:#E50041;
    }

    :host(sdss-checkbox.bx--checkbox-invalid) .bx--checkbox:focus + .bx--checkbox-label::before {
      outline: none;
      box-shadow: 0px 0px 4px 3px #4EC3CD;
    }

    .bx--checkbox-label:hover::before {
      border-color:#034D66;
    }

    .bx--checkbox:focus + .bx--checkbox-label::before {
      outline: none;
      box-shadow: 0px 0px 4px 3px #4EC3CD;
    }

    .bx--checkbox:checked:focus + .bx--checkbox-label::before, .bx--checkbox:focus + .bx--checkbox-label::before {
      outline:none;
    }

    .bx--checkbox:checked + .bx--checkbox-label::after {
      transform: scale(1.35) rotate(-45deg);
    }

    .bx--checkbox-label::after {
      top:15px;
      left:10px;
      transform-origin: center center;
      border-left-color: #034D66;
      border-bottom-color: #034D66; 

    }

    .bx--checkbox:indeterminate + .bx--checkbox-label::before {
      border-width: 2px;
      border-color: #034D66;
      background-color: #FFFFFF;
    }

    .bx--checkbox:indeterminate + .bx--checkbox-label::after {
      top:15px;
      left:9px;
      width: 12px;
      border-bottom: 2px solid #034D66;
      border-left: 0px solid #034D66;
      transform: scale(1) rotate(0deg);
    }


    .bx--checkbox:focus + .bx--checkbox-label::before, .bx--checkbox:indeterminate:focus + .bx--checkbox-label::before {
      outline: none;
    }

    .bx--checkbox:checked + .bx--checkbox-label::before{
      background-color: #FFFFFF;
    }

    .bx--visually-hidden {
      width:32px;
      height:32px;
    }

    .bx--checkbox:checked:disabled + .bx--checkbox-label::before, .bx--checkbox:checked:disabled + .bx--checkbox-label::before, .bx--checkbox:indeterminate:disabled + .bx--checkbox-label::before {
      border-color: #B3B3B3;
      background-color: #FFFFFF;
    }

    .bx--checkbox:checked:disabled + .bx--checkbox-label::after, .bx--checkbox:indeterminate:disabled + .bx--checkbox-label::after {
      border-color: #B3B3B3;
      background-color: #FFFFFF;
    }

  `
]

customElements.define('my-checkbox', MyCheckbox)