// 728. Self Dividing Numbers
// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// Also, a self-dividing number is not allowed to contain the digit zero.
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example 1:
// Input: left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

// Note:
// The boundaries of each input argument are 1 <= left <= right <= 10000.

var selfDividingNumbers = function(left, right) {
  var i = 1
  var arr = []
  while(i <= right){
    var num = i.toString()
    if(!num.includes("0")){
      var max = num.length - 1
      var count = 0
      var j = 0
      while(j <= max){
        if(i % Number(num[j]) == 0){
          count++
          if(count == max+1)
            arr.push(i)
        }
        j++
      }
    }
    i++
  }
  return arr
};

selfDividingNumbers(1, 22)