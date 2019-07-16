// 461. Hamming Distance
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:
// Input: x = 1, y = 4
// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.

var hammingDistance = function(x, y) {
  var bitwise = function(str){             // make sure both int string has the same leading zeros and total up to 40 char length
    while(str.length < 40)
      str = "0" + str
    return str
  }
  var x = bitwise((x >>> 0).toString(2))   // convert both integers into bits with leading zeros and same char length
  var y = bitwise((y >>> 0).toString(2))
  var dis = 0                              // set final answer/distance
  var idx = 0                              // set index 0 for while loop
  while(idx <= 40){                        // iterate through max length of 40 char
    if(x[idx] !== y[idx])                  // check if both binary char are the same, if not add a distance count
      dis++
    idx++
  }
  return dis
};

hammingDistance(1577962638, 1727613287)