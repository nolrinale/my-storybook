import BXRadioButtonGroup from '@carbon/web-components/es/components/radio-button/radio-button-group';
import BXRadioButton from '@carbon/web-components/es/components/radio-button/radio-button';
import { css } from 'lit';


class MyRadioButton extends BXRadioButton {
  constructor() {
    super();
    this.invalid = false;
  }

  get invalidCheckProperty() {
    return this.hasAttribute("invalid");
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.invalidCheckProperty === true) {
      this.classList.add("bx--radio-invalid");
    } else {
      this.classList.remove("bx--radio-invalid");
    }
    //apply invalid styles only to the first element with the invalid attr 
    var target = document.querySelector("sdss-radio-button");
      const observerForInvalid = new MutationObserver(function (mutation) {
        if (mutation[0].oldValue === null) {
          target.classList.add("bx--radio-invalid");
        } else {
          target.classList.remove("bx--radio-invalid");
        }
      }),
      config = {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ["invalid"],
      };
        observerForInvalid.observe(target, config);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    observerForInvalid.disconnect();
  }
}

MyRadioButton.styles = [
  BXRadioButton.styles,
  css`
    .bx--radio-button__label {
      font-family: Inter, sans-serif;
      font-size:1rem;
      margin-bottom: 1rem;
      margin-right: var(--otd-spacing-lg, 32px);
    }

    :host(sdss-radio-button[disabled]) .bx--radio-button__label {
      color: #B3B3B3;
    }

    .bx--radio-button__appearance {
      border: 2px solid #046080;
      width:24px;
      height:24px;
      margin:0px;
      margin-right: 1rem;
    }

    .bx--radio-button:checked + .bx--radio-button__label .bx--radio-button__appearance {
      border-color: #034D66;
    }
  
    .bx--radio-button:focus + .bx--radio-button__label .bx--radio-button__appearance {
      outline: none;
      box-shadow: 0px 0px 4px 3px #4EC3CD;
    }
  
    .bx--radio-button:checked + .bx--radio-button__label .bx--radio-button__appearance::before {
      background-color:#034D66;
      transform: scale(0.585);
    }

    .bx--radio-button:hover + .bx--radio-button__label .bx--radio-button__appearance{
      border-color: #034D66;
    }

    .bx--radio-button:disabled + .bx--radio-button__label .bx--radio-button__appearance, .bx--radio-button:disabled:checked + .bx--radio-button__label .bx--radio-button__appearance {
      border-color: #B3B3B3;
    }

    .bx--radio-button:disabled + .bx--radio-button__label .bx--radio-button__appearance::before, .bx--radio-button:disabled:checked + .bx--radio-button__label .bx--radio-button__appearance::before {
      background-color: #B3B3B3;
    }

    :host(sdss-radio-button.bx--radio-invalid) .bx--radio-button__appearance::before{
      background-color:#E50041;
    }

    :host(sdss-radio-button.bx--radio-invalid) .bx--radio-button__appearance{
      border-color:#E50041;
    }

    :host(sdss-radio-button.bx--radio-invalid) .bx--radio-button:checked + .bx--radio-button__label .bx--radio-button__appearance{
      border-color:#E50041;
    }

    :host(sdss-radio-button.bx--radio-invalid) .bx--radio-button:checked + .bx--radio-button__label .bx--radio-button__appearance:before {
      background-color:#E50041;
    }

    :host(sdss-radio-button.bx--radio-invalid) .bx--radio-button:checked + .bx--radio-button__label .bx--radio-button__appearance:focus {
      box-shadow: 0px 0px 4px 3px #E50041;
    }

  `
]

customElements.define('my-radio-button', MyRadioButton)


class MyRadioButtonGroup extends BXRadioButtonGroup {}
MyRadioButtonGroup.styles = [
  BXRadioButtonGroup.styles,
  css`

  .bx--radio-button-group {
    font-family: Inter, sans-serif;
  }

  

  `
]
customElements.define('my-radio-button-group', MyRadioButtonGroup)