import {Element as PolymerElement} from "../../node_modules/@polymer/polymer/polymer-element.js"
import "../../node_modules/@polymer/iron-icons/iron-icons.js"
import "../icon-toggle.js"

//export const html = Polymer.html;

export const html = (strings, ...values) => strings[0]
+ values.map((v, i) => v + strings[i+1]).join('');

class DemoElement extends PolymerElement {
  
  _message(fav) {
    if (fav) {
      return 'You really like me!';
    } 
    else {
      return 'Do you like me?';
    }
  }
  
  static get template () {
    return html`
      <style>
        :host {
          font-family: sans-serif;
          --icon-toggle-color: lightgrey;
          --icon-toggle-outline-color: black;
          --icon-toggle-pressed-color: red;
        }
      </style>
  
      <h3>Statically-configured icon-toggles</h3>
    
      <icon-toggle toggle-icon="star"></icon-toggle>
      <icon-toggle toggle-icon="star" pressed></icon-toggle>
    
      <h3>Data-bound icon-toggle</h3>

      <!-- use a computed binding to generate the message -->
      <div><span>[[_message(isFav)]]</span></div>

      <!-- curly brackets ({{}}} allow two-way binding --> 
      <icon-toggle toggle-icon="favorite" pressed="{{isFav}}"></icon-toggle>
    `
  }
}

customElements.define('demo-element', DemoElement);