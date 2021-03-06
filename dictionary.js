(function () {
  "use strict";

  var Dictionary, dicA;

  Dictionary = function () {
    var items;

    items = {};

    return {
      // add a key value pair to the Set or update an existing key
      assign: function (key, value) {
        items[key] = value;
      },

      // returns true if the set has the given key
      has: function (key) {
        return items.hasOwnProperty(key);
      },

      // removes the key value pair given returns true if removed
      remove: function (key) {
        var removeStatus = false;
        if (this.has(key)) {
          delete items[key];
          removeStatus = true;
        }
        return removeStatus;
      },

      // returns the specific value that matches the key
      retrieve: function (key) {
        var valueOfKey;

        if (this.has(key)) {
          valueOfKey = items[key];
        }

        return valueOfKey;
      },

      // resets the set
      clear: function () {
        items = {};
      },

      // returns number of key value pairs in the set
      size: function () {
        return Object.keys(items).length;
      },

      // returns keys of the set in an array
      keyList: function () {
        return Object.keys(items);
      },

      // returns values of the set in an array
      values: function () {
        var valueArray, keyArray, i, len;

        keyArray = this.keyList();
        len = keyArray.length;
        valueArray = [];

        for (i = 0; i < len; i += 1) {
          if (this.has(keyArray[i])) {
            valueArray.push(items[keyArray[i]]);
          }
        }

        return valueArray;
      }
    };
  };

  // ---------------------------
  dicA = new Dictionary();
  dicA.assign('John', 'lolol@hai.org');
  dicA.assign('Kyle', 'hmmm@yup.io');
  dicA.assign('Hannah', 'fluffycat@squigglepuff.cut');
  console.log('Keys:', dicA.keyList());
  console.log('Values:', dicA.values());
  console.log('Retrieve Kyle:', dicA.retrieve('Kyle'));
  console.log('Remove Kyle:', dicA.remove('Kyle'));
  console.log('Size:', dicA.size());

}());