// 700. Search in a Binary Search Tree
// Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

// For example, 

// Given the tree:
//         4
//        / \
//       2   7
//      / \
//     1   3

// And the value to search: 2
// You should return this subtree:

//       2     
//      / \   
//     1   3
// In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

// Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */


var searchBST = function(root, val) {
  console.log(JSON.stringify(root), val)
  var res
  var bst = function(root, val){
    if(root.val)
      if(root.val == val){
        res = root
      } else {
        if(root.left)
          bst(root.left, val)
        if(root.right)
          bst(root.right, val)
      }
    else
      return null
  }
  bst(root, val, null)
  console.log(res ? res : null)
  return res ? res : null
};

searchBST({"val":4,"right":{"val":7,"right":null,"left":null},"left":{"val":2,"right":{"val":3,"right":null,"left":null},"left":{"val":1,"right":null,"left":null}}}, 2)