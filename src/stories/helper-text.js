import { LitElement, css, html  } from 'lit';

export class MyHelperText extends LitElement {
  //reflecting these as attributes (Important!)
  static properties = {
    display: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    error: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.display = false;
    this.disabled = false;
    this.error = false;
  }
  

  render() {
    return this.display ? html`
    <div class="otd--helper-text ${this.disabled ? 'disabled' : ''}">

    ${
      this.error
        ? html`
        <div class="otd--helper-text__icon"><svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="${this.disabled ? '#C6C6C6' : '#E50041'}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"<!----><!----><!----><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg></div>
        <slot></slot>
        `
        : html`
        <slot></slot>
        `
    }

    </div>` : ``;
  }

}

MyHelperText.styles = [
  css`
  .otd--helper-text {
    font-family: Inter, sans-serif;
    font-size: 14px;
    display:flex;
    align-items: flex-start;
  }

  .otd--helper-text__icon {
    margin-top:-1px;
    padding-right:4px;

  }

  .otd--helper-text__caption {
    padding-top:10px;
    color: #99002B;
  }

  .hidden {
    display:none;
  }

  .default-helper {
    color: #4C4C4C;
    fill: #4C4C4C;
  }

  .hide-icon {
    display:none;
  }

  .disabled {
    color: #C6C6C6;
  }
  `
];

customElements.define('my-helper-text', MyHelperText)