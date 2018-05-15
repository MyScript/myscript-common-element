import '../polymer/polymer.js';
import { IronMenuBehavior } from './iron-menu-behavior.js';

export const IronMenubarBehaviorImpl = {

  hostAttributes: {'role': 'menubar'},

  /**
   * @type {!Object}
   */
  keyBindings: {'left': '_onLeftKey', 'right': '_onRightKey'},

  _onUpKey: function(event) {
    this.focusedItem.click();
    event.detail.keyboardEvent.preventDefault();
  },

  _onDownKey: function(event) {
    this.focusedItem.click();
    event.detail.keyboardEvent.preventDefault();
  },

  get _isRTL() {
    return window.getComputedStyle(this)['direction'] === 'rtl';
  },

  _onLeftKey: function(event) {
    if (this._isRTL) {
      this._focusNext();
    } else {
      this._focusPrevious();
    }
    event.detail.keyboardEvent.preventDefault();
  },

  _onRightKey: function(event) {
    if (this._isRTL) {
      this._focusPrevious();
    } else {
      this._focusNext();
    }
    event.detail.keyboardEvent.preventDefault();
  },

  _onKeydown: function(event) {
    if (this.keyboardEventMatchesKeys(event, 'up down left right esc')) {
      return;
    }

    // all other keys focus the menu item starting with that character
    this._focusWithKeyboardEvent(event);
  }

};

export const IronMenubarBehavior = [IronMenuBehavior, IronMenubarBehaviorImpl];
