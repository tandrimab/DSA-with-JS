/*
The distance of a pair of integers a and b is defined as the absolute difference between a and b.

Given an integer array nums and an integer k, return the kth smallest distance among all the pairs nums[i] and nums[j] where 0 <= i < j < nums.length.

*/

var notEfficient = function (nums, k) {
  let output = [],
    i;
  function dfs(res, i) {
    if (i === nums.length) {
      if (res.length === 2) {
        output.push(Math.abs(res[0] - res[1]));
      }
      return;
    }
    dfs(res.concat([nums[i]]), i + 1);
    dfs(res, i + 1);
  }
  dfs([], 0);
  output.sort((a, b) => a - b);
  return output[k - 1];
};

var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b);
  let low = 0,
    high = nums[nums.length - 1] - nums[0];    

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const count = countPair(nums, mid);
    if (count < k) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};

function countPair(nums, range) {
  let count = 0,
    left = 0;
  for (let right = 0; right < nums.length; right++) {
    while (nums[right] - nums[left] > range) {
      left += 1;
    }
    count += right - left;
  }
  return count;
}

let nums = [1, 6, 1],
  k = 3;
console.log(smallestDistancePair(nums, k));
