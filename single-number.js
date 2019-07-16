// Single Number
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:
// Input: [2,2,1]
// Output: 1

// Example 2:
// Input: [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  console.log(nums)
  var i = 0
  var obj = {}
  while(i < nums.length){
    if(!obj[nums[i]])
      obj[nums[i]] = 1
    else
      delete obj[nums[i]]
    i++
  }
  console.log(obj, Number(Object.keys(obj)[0]))
  return Number(Object.keys(obj)[0])
};

singleNumber([4,1,2,1,2])