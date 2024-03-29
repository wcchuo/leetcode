// 933. Number of Recent Calls
// Write a class RecentCounter to count recent requests.
// It has only one method: ping(int t), where t represents some time in milliseconds.
// Return the number of pings that have been made from 3000 milliseconds ago until now.
// Any ping with time in [t - 3000, t] will count, including the current ping.
// It is guaranteed that every call to ping uses a strictly larger value of t than before.

// Example 1:
// Input: inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
// Output: [null,1,2,3,3]

// Note:
// Each test case will have at most 10000 calls to ping.
// Each test case will call ping with strictly increasing values of t.
// Each call to ping will have 1 <= t <= 10^9.

var RecentCounter = function() {
  this.arr = []
};

RecentCounter.prototype.ping = function(t) {
  this.arr.push(t)
  while(this.arr.length && this.arr[0] < t - 3000){
    this.arr.shift()
  }
  return this.arr.length
};

var obj = new RecentCounter()
var param_1 = obj.ping(null)
var param_1 = obj.ping(1)
var param_1 = obj.ping(100)
var param_1 = obj.ping(3001)
var param_1 = obj.ping(3002)

