// 938. Range Sum of BST
// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
// The binary search tree is guaranteed to have unique values.

// Note:
// The number of nodes in the tree is at most 10000.
// The final answer is guaranteed to be less than 2^31.

console.log('bst')

var root = {"val":10,"right":{"val":15,"right":{"val":18,"right":null,"left":null},"left":null},"left":{"val":5,"right":{"val":7,"right":null,"left":null},"left":{"val":3,"right":null,"left":null}}}

var rangeSumBST = function(root, L, R) {
  console.log(JSON.stringify(root), L, R)
  var sum = 0
  var dst = function(node){
    if(node.val >= L && node.val <= R)
      sum = sum + node.val
    if(node.left)
      dst(node.left)
    if(node.right)
      dst(node.right)
  }
  dst(root)
  console.log(sum)
  return sum
};

rangeSumBST(root, 7, 15)

// submission
var rangeSumBST = function(root, L, R) {
  var sum = 0
  var dst = function(node){
    if(node.val >= L && node.val <= R)
      sum = sum + node.val
    if(node.left)
      dst(node.left)
    if(node.right)
      dst(node.right)
  }
  dst(root)
  return sum
};