// 771. Jewels and Stones
// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Note:
// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

var J = "aA"
var S = "aAAbBdsff"

var numJewelsInStones = function(J, S) {
  console.log(J,S)
  var j = {}
  var s = 0
  for(k in J)
    j[J[k]] = true
  console.log(j)
  for(k in S)
    if(j[S[k]])
      s++
  console.log(s)
  return s
};

numJewelsInStones(J, S)


var numJewelsInStones = function(J, S) {
  var j = {}
  var s = 0
  for(k in J)
    j[J[k]] = true
  for(k in S)
    if(j[S[k]])
      s++
  return s
};