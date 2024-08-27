/*
You are given the array nums consisting of n positive integers. You computed the sum of all non-empty continuous subarrays from the array and then sorted them in non-decreasing order, creating a new array of n * (n + 1) / 2 numbers.

Return the sum of the numbers from index left to index right (indexed from 1), inclusive, in the new array. Since the answer can be a huge number return it modulo 109 + 7.
*/

var rangeSum = function (nums, n, left, right) {
  let sumArr = [],
    sum,
    totalSum = 0;

  for (let i = 0; i < n; i++) {
    sum = nums[i];
    sumArr.push(nums[i]);
    for (let j = i + 1; j < n; j++) {
      sum += nums[j];
      sumArr.push(sum);
    }
  }

  sumArr.sort((a, b) => a - b);
  let mod = parseInt(1e9 + 7);

  for (let i = left - 1; i <= right - 1; i++) {
    totalSum = (totalSum % mod) + sumArr[i];
  }

  return totalSum;
};

let nums = [1, 2, 3, 4],
  n = 4,
  left = 1,
  right = 10;
console.log(rangeSum(nums, n, left, right));
