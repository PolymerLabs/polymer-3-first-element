import {Element as PolymerElement} from "../node_modules/@polymer/polymer/polymer-element.js"
import "../node_modules/@polymer/iron-icon/iron-icon.js"

//export const html = Polymer.html;

export const html = (strings, ...values) => strings[0]
+ values.map((v, i) => v + strings[i+1]).join('');

class IconToggle extends PolymerElement {
  
  static get properties () {
    return {
      pressed: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true,
        value: false
      },
      toggleIcon: {
        type: String
      },
    };
  }
  
  constructor() {
    super();
    this.addEventListener('click', this.toggle.bind(this));
  }
  
  toggle() {
    this.pressed = !this.pressed;
  }

  static get template () {
    return html`
      <style>
        /* local styles go here */
        :host {
          display: inline-block;
        }
        iron-icon {
          fill: var(--icon-toggle-color, rgba(0,0,0,0));
          stroke: var(--icon-toggle-outline-color, currentcolor);
        }
        :host([pressed]) iron-icon {
          fill: var(--icon-toggle-pressed-color, currentcolor);
        }
      </style>
        
      <!-- shadow DOM goes here -->
      <iron-icon icon="[[toggleIcon]]">
      </iron-icon>
    `
  }
}

customElements.define('icon-toggle', IconToggle);