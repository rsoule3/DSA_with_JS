(function () {
  "use strict";

  var exports,
    LinkedList,
    aLinkedList,
    anotherLinkedList;

  exports = module.exports = {};
  exports.LinkedList = function () {
    var length, head, Node;

    length = 0;
    head = null;
    // Node type for any new item to add to the linked list
    Node = function (element) {
      this.element = element;
      this.next = null;
    };

    this.append = function (element) {
      var current, node;

      // uses Node constructor, to create an object with element given with an
      // element and next key
      node = new Node(element);

      // if head is null then it's at the end of the linked list
      // and sets head to the element being appended, for linking in future
      // appends
      if (head === null) {
        head = node;
      } else {
        current = head;
        // loops through until it hits a null .next since it is falsey
        // by assigning current to current.next it keeps iterating through the
        // list
        while (current.next) {
          current = current.next;
        }
        // after iterating until current.next is null it's at the end of the
        // linked list, so current.next will be assigned to the new element
        // making the new element the last item in the list, with default .next
        // val of null
        current.next = node;
      }
      length += 1;
    };

    this.removeAt = function (position) {
      var current, previous, index, removedElement;
      current = head;
      index = 0;

      //valid position check
      if (position > -1 && position < length) {
        // if it's first item in the list, head gets assigned as .next in
        // preparation of removing the first item
        if (position === 0) {
          head = current.next;
        } else {
          // iterates through the list until index and position numbers match
          while (index < position) {
            index += 1;
            previous = current;
            current = current.next;
          }
          // once while loop has exited relink .next of the previous node to the
          // node after the current element being removed
          previous.next = current.next;
        }
        length -= 1;
        // set removedElement for a singular return statement, edit length to
        // account for removed element
        removedElement = current.element;
        current.element = undefined;
      } else {
        removedElement = null;
      }

      return removedElement;
    };

    this.getHead = function () {
      return head;
    };

    this.insert = function (element, position) {
      var node, previous, current, indexNum, eleInserted;
      eleInserted = false;
      indexNum = 0;

      // check that the position is valid number within 0 and total length of
      // the list
      if (position >= 0 && position <= length) {
        node = new Node(element);
        current = head;

        if (position === 0) {
          // if adding to front of list assign node.next to current head
          // set elementInserted as true and increase length
          node.next = current;
          head = node;
          eleInserted = true;
          length += 1;
        } else {

          // this will run until indexNum is equal to desired position, cycling
          // through the Node's keeping record of previous node and current
          while (indexNum < position) {
            previous = current;
            current = current.next;
            indexNum += 1;
          }

          // once desired position is met, node.next is set to current, and
          // previous node's .next pointer is assigned to our inserted node,
          // effectively inserting the element
          node.next = current;
          previous.next = node;
          eleInserted = true;
          length += 1;
        }
      }

      return eleInserted;
    };

    // warning: modified while playing around with exporting and importing modules
    // for hashMap.js file
    this.toStringT = function () {
      var current, output, incr;
      output = '';
      incr = 0;

      if (head === null) {
      } else {
        current = head;
        while (current.next) {
          incr += 1;
          output += 'Item ' + incr + ': ' + current.element.value + ' -- ';
          current = current.next;
        }
        incr += 1;
        output += 'Item ' + incr + ': ' + current.element.value;
      }

      return output.trim();
    };

    this.indexOf = function (element) {
      var current, indexCount, eleFound;
      indexCount = 0;
      eleFound = false;

      // very similar logic as used in insert, but just simply is keeping track
      // of index position and returning it
      if (element === head.element.key) {
        indexCount = 0;
        eleFound = true;
      } else {
        current = head;
        while (current && !eleFound) {
          indexCount += 1;
          if (current.element.key === element) {
            eleFound = true;
          }
          current = current.next;
        }
      }

      if (eleFound === false) {
        indexCount = undefined;
      }
      // console.log('Index Count: ', indexCount);
      return indexCount;
    };

    this.isEmpty = function () {
      return length === 0;
    };

    this.size = function () {
      return length;
    };

  };

  //aLinkedList = new LinkedList();
  //anotherLinkedList = new LinkedList();
  //
  //anotherLinkedList.insert('Doot0', 0);
  //anotherLinkedList.insert('Doots', 1);
  //console.log(anotherLinkedList.toString());
  //
  //aLinkedList.append('Item1');
  //aLinkedList.append('Item2');
  //aLinkedList.append('Item3');
  //aLinkedList.insert('Nanner', 0);
  //console.log(aLinkedList.getHead());
  //console.log('Index of Nanner:', aLinkedList.indexOf('Nanner'));
  //console.log('Index of Item2:', aLinkedList.indexOf('Item2'));
  //console.log('Index of Item 4:', aLinkedList.indexOf('Item4'));
  //aLinkedList.removeAt(2);
  //console.log(aLinkedList.toString());
  //console.log(aLinkedList);
}());