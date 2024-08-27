/*
    Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
*/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isSameTree = function(p, q) {
  return JSON.stringify(p) == JSON.stringify(q);
};

// var isSameTree = function (p, q) {
//     if (p === null && q === null) {
//       return true;
//     }
//     if (p === null || q === null) {
//       return false;
//     }

//     return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)

// };
