import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';
 

export class Content extends LitElement {
  static get properties() {
    return {
      name: {
        Type: String
      }  
    }
  }

  constructor() {
    super();
    this.name = 'Content';
  }

 _render({name}) {
    return html`  <div>${name}  </div> `;
  }    
}

customElements.define('content-page', Content);