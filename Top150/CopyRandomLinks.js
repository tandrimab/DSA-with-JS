/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  if (!head) return head;
  let mappingAddress = new Map();

  let curr = head;

  while (curr !== null) {
      let newNode = new _Node(curr.val);
      mappingAddress.set(curr, newNode);
      curr = curr.next;
  }

  curr = head;
  while (curr !== null) {
      let currCopy = mappingAddress.get(curr);
      if (curr.next) {
          currCopy.next = mappingAddress.get(curr.next);
      }
      if (curr.random) {
          currCopy.random = mappingAddress.get(curr.random);
      }
      curr = curr.next;
  }

  return mappingAddress.get(head);
};