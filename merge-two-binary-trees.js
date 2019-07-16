// 617. Merge Two Binary Trees
// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
// You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

// Example 1:
// Input: 
// 	      Tree 1                     Tree 2
//           1                         2
//          / \                       / \
//         3   2                     1   3
//        /                           \   \
//       5                             4   7
// Output: 
// Merged tree:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \ 
// 	 5   4   7

// Example 2:
// Input: 
//        Tree 1                     Tree 2
//           1                         1
//          /                           \
//         2                             2
//        /                               \
//       3                                 3
// Output: 
// Merged tree:
//       2
//      / \
//     2   2
//    /     \ 
//   3       3

// Note: The merging process must start from the root nodes of both trees.

var mergeTrees = function(t1, t2) {
  var obj = { val: 0 }                           // Set the answer object (tree)
  var dst = function(n1, n2, n3){
    if(!n1)                                      // if node 1 or 2 is undefined, create a node object
      n1 = { val: 0, left: null, right: null }
    if(!n2)
      n2 = { val: 0, left: null, right: null }
    n3.val = n1.val + n2.val                     // with both n1 & n2 defined, sum up both values for answer object
    n3.left = null                               // create both left & right null objects
    n3.right = null
    if(n1.left || n2.left){                      // check to see if node 1 or node 2 has defined left object
      n3.left = { val: 0 }                       // if yes, create a left object for answer object
      dst(n1.left, n2.left, n3.left)             // self-invoke the same function again to sum up both n1, n2 left object values
    }
    if(n1.right || n2.right){                    // check to see if node 1 or node 2 has defined rightt object
      n3.right = { val: 0 }                      // if yes, create a right object for answer object
      dst(n1.right, n2.right, n3.right)          // self-invoke the same function again to sum up both n1, n2 right object values
    }
  }
  if(!t1 && !t2)                                 // check to see if t1 && t2 nodes are defined (not null)
    return null                                  // if both are null, return null
  else{
    dst(t1, t2, obj)                             // start sum up t1 and t2 root values
    return obj                                   // return the answer object tree
  }
};

// var t1 = {"val":1,"right":{"val":2,"right":null,"left":null},"left":{"val":3,"right":null,"left":{"val":5,"right":null,"left":null}}} 
// var t2 = {"val":2,"right":{"val":3,"right":{"val":7,"right":null,"left":null},"left":null},"left":{"val":1,"right":{"val":4,"right":null,"left":null},"left":null}}

var t1 = {"val":1,"right":null,"left":{"val":2,"right":null,"left":{"val":3,"right":null,"left":null}}}
var t2 = {"val":1,"right":{"val":2,"right":{"val":3,"right":null,"left":null},"left":null},"left":null}

mergeTrees(t1, t2)