var minSubArrayLen = function(target, nums) {
    let s = 0, min = nums.length, sum = 0;

    for(let e = 0; e < nums.length; e++) {
        sum += nums[e];
        while(sum >= target) {
            if (min >= e - s + 1) min = e - s + 1;
            sum -= nums[s];
            if (sum < target && e === nums.length - 1) return min
            s++
        }
    }
    if (min === nums.length && sum < target) return 0;
    return min;
};
let target = 11, nums = [1,1,1,1,1,1,1,1]

console.log(minSubArrayLen(target, nums));

// target = 7, nums = [2,3,1,2,4,3]

//target = 4, nums = [1,4,4]
