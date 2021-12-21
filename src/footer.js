import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';

export class Footer extends LitElement {
  static get properties() {
    return {
      name: {
        Type: String
      }  
    }
  }

  constructor() {
    super();
    this.name = 'Footer';
  }

  _render({name}) {
    return html` 
	<div>${name}  </div> `;
  }   
}

customElements.define('footer-page', Footer);