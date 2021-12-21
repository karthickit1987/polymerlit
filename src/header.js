import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';
 
export class Header extends LitElement {
  static get properties() {
    return {
      name: {
        Type: String
      }  
    }
  }

  constructor() {
    super();
    this.name = 'Header';
  }

  _render({name}) {
    return html`  
	
	<div>${name}  </div> `;
  }  
}

customElements.define('header-page', Header);