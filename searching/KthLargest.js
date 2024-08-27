/**
 * @param {number} k
 * @param {number[]} nums
 */

var addNum = function (arr, val, index) {
  return [...arr.slice(0, index), val, ...arr.slice(index)];
};

var position = function(nums, target) {
    let mid;
    let low = 0, high = nums.length - 1;

    while (low <= high) {
        mid = Math.ceil((high + low)/ 2);
        if (nums[mid] === target) {
            return mid;
        } else if  (target > nums[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }        
    }
    return low;
}

var KthLargest = function (k, nums) {
  this.nums = nums.sort((a, b) => a - b);
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  let n = this.nums.length;
  let index = position(this.nums, val)
  this.nums = addNum(this.nums, val, index);
  
  return this.nums[this.nums.length - this.k]
};

// Your KthLargest object will be instantiated and called as such:
let nums = [4, 5, 8, 2], k = 3;
 var obj = new KthLargest(k, nums)
 var param_1 = obj.add(3)
 var param_2 = obj.add(5)
 var param_3 = obj.add(10)
 var param_4 = obj.add(9)
 var param_5 = obj.add(4)
 console.log(param_1, param_2, param_3, param_4, param_5);
 

