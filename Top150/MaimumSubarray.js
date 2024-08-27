var maxSubArray = function(nums) {
    let subarr = [nums[0]], max = nums[0], currSum = nums[0];

    for(let i = 1; i<nums.length; i++) {
        currSum = Math.max(currSum + nums[i], nums[i]);
        max = Math.max(currSum, max);

        if (currSum < 0) {
            currSum = 0
        }
    }
    return max
};

let nums = [5,4,-1,7,8]
console.log(maxSubArray(nums));
