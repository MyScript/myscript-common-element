import '../polymer/polymer.js';
import { IronA11yKeysBehavior } from '../iron-a11y-keys-behavior/iron-a11y-keys-behavior.js';
import './iron-control-state.js';
import { dom } from '../polymer/lib/legacy/polymer.dom.js';
import { IronButtonStateImpl as IronButtonStateImpl$0 } from '@polymer/iron-behaviors/iron-button-state.js';

export const IronButtonStateImpl = {

  properties: {

    /**
     * If true, the user is currently holding down the button.
     */
    pressed: {
      type: Boolean,
      readOnly: true,
      value: false,
      reflectToAttribute: true,
      observer: '_pressedChanged'
    },

    /**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */
    toggles: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * If true, the button is a toggle and is currently in the active state.
     */
    active: {
      type: Boolean,
      value: false,
      notify: true,
      reflectToAttribute: true
    },

    /**
     * True if the element is currently being pressed by a "pointer," which
     * is loosely defined as mouse or touch input (but specifically excluding
     * keyboard input).
     */
    pointerDown: {
      type: Boolean,
      readOnly: true,
      value: false
    },

    /**
     * True if the input device that caused the element to receive focus
     * was a keyboard.
     */
    receivedFocusFromKeyboard: {
      type: Boolean,
      readOnly: true
    },

    /**
     * The aria attribute to be set if the button is a toggle and in the
     * active state.
     */
    ariaActiveAttribute: {
      type: String,
      value: 'aria-pressed',
      observer: '_ariaActiveAttributeChanged'
    }
  },

  listeners: {
    down: '_downHandler',
    up: '_upHandler',
    tap: '_tapHandler'
  },

  observers: [
    '_focusChanged(focused)',
    '_activeChanged(active, ariaActiveAttribute)'
  ],

  /**
   * @type {!Object}
   */
  keyBindings: {
    'enter:keydown': '_asyncClick',
    'space:keydown': '_spaceKeyDownHandler',
    'space:keyup': '_spaceKeyUpHandler',
  },

  _mouseEventRe: /^mouse/,

  _tapHandler: function() {
    if (this.toggles) {
     // a tap is needed to toggle the active state
      this._userActivate(!this.active);
    } else {
      this.active = false;
    }
  },

  _focusChanged: function(focused) {
    this._detectKeyboardFocus(focused);

    if (!focused) {
      this._setPressed(false);
    }
  },

  _detectKeyboardFocus: function(focused) {
    this._setReceivedFocusFromKeyboard(!this.pointerDown && focused);
  },

  // to emulate native checkbox, (de-)activations from a user interaction fire
  // 'change' events
  _userActivate: function(active) {
    if (this.active !== active) {
      this.active = active;
      this.fire('change');
    }
  },

  _downHandler: function(event) {
    this._setPointerDown(true);
    this._setPressed(true);
    this._setReceivedFocusFromKeyboard(false);
  },

  _upHandler: function() {
    this._setPointerDown(false);
    this._setPressed(false);
  },

  /**
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyDownHandler: function(event) {
    var keyboardEvent = event.detail.keyboardEvent;
    var target = dom(keyboardEvent).localTarget;

    // Ignore the event if this is coming from a focused light child, since that
    // element will deal with it.
    if (this.isLightDescendant(/** @type {Node} */(target)))
      return;

    keyboardEvent.preventDefault();
    keyboardEvent.stopImmediatePropagation();
    this._setPressed(true);
  },

  /**
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyUpHandler: function(event) {
    var keyboardEvent = event.detail.keyboardEvent;
    var target = dom(keyboardEvent).localTarget;

    // Ignore the event if this is coming from a focused light child, since that
    // element will deal with it.
    if (this.isLightDescendant(/** @type {Node} */(target)))
      return;

    if (this.pressed) {
      this._asyncClick();
    }
    this._setPressed(false);
  },

  // trigger click asynchronously, the asynchrony is useful to allow one
  // event handler to unwind before triggering another event
  _asyncClick: function() {
    this.async(function() {
      this.click();
    }, 1);
  },

  // any of these changes are considered a change to button state

  _pressedChanged: function(pressed) {
    this._changedButtonState();
  },

  _ariaActiveAttributeChanged: function(value, oldValue) {
    if (oldValue && oldValue != value && this.hasAttribute(oldValue)) {
      this.removeAttribute(oldValue);
    }
  },

  _activeChanged: function(active, ariaActiveAttribute) {
    if (this.toggles) {
      this.setAttribute(this.ariaActiveAttribute,
                        active ? 'true' : 'false');
    } else {
      this.removeAttribute(this.ariaActiveAttribute);
    }
    this._changedButtonState();
  },

  _controlStateChanged: function() {
    if (this.disabled) {
      this._setPressed(false);
    } else {
      this._changedButtonState();
    }
  },

  // provide hook for follow-on behaviors to react to button-state

  _changedButtonState: function() {
    if (this._buttonStateChanged) {
      this._buttonStateChanged(); // abstract
    }
  }

};

export const IronButtonState = [
  IronA11yKeysBehavior,
  IronButtonStateImpl$0
];
