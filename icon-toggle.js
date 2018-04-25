import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';

class IconToggle extends PolymerElement {
  static get properties() {
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
  static get template() {
    return html`
      <style>
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
      <iron-icon icon="[[toggleIcon]]"></iron-icon>
    `;
  }
  constructor() {
    super();
    this.addEventListener('click', this.toggle.bind(this));
  }
  toggle() {
    this.pressed = !this.pressed;
  }
}

customElements.define('icon-toggle', IconToggle);