import '../../polymer/polymer.js';
import { Polymer as Polymer$0 } from '../../polymer/lib/legacy/polymer-fn.js';

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Polymer$0({

  is: 'cats-only',

  behaviors: [
    Polymer.IronValidatorBehavior
  ],

  validateObject: function(obj) {
    var valid = true;
    for (key in obj) {
      if (obj[key] !== 'cats') {
        valid = false;
        break;
      }
    }
    return valid;
  },

  validate: function(values) {
    if (typeof values === 'object') {
      return this.validateObject(values);
    } else {
      var value = Array.isArray(values) ? values.join('') : values;
      return value.match(/^(c|ca|cat|cats)?$/) !== null;
    }
  }

});
