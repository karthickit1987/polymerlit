import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';
 

export class Sidenav extends LitElement {
  static get properties() {
    return {
      name: {
        Type: String
      }  
    }
  }

  constructor() {
    super();
    this.name = 'Side Nav';
  }

  _render({name}) {
    return html` <div>${name}  </div> `;
  }    
}

customElements.define('side-nav', Sidenav);