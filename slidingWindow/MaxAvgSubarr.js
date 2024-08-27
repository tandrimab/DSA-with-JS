var findMaxAverage = function (nums, k) {
  let max = Number.MIN_SAFE_INTEGER;

  let i = 0,
    j = 0,
    sum = 0;

    while(j<nums.length) {
        sum += nums[j];
        if (j - i + 1 == k) {
            max = Math.max(max, (sum / k).toFixed(5));
            sum -= nums[i];
            i++;
        }
        j++;
    }
    return max
};

let nums = [1,12,-5,-6,50,3], k = 4
console.log(findMaxAverage(nums, k));
