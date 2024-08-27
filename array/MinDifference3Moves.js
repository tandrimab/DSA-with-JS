var minDifference = function(nums) {
    let n = nums.length;
    let l = 0, r = n-4;

    if (n <= 4) return 0;

    nums.sort((a,b) => a-b)

    let res = nums[r] - nums[l]
    
    while(r < n) {
        res = Math.min(res, nums[r] - nums[l])
        l+=1;
        r+=1
    }
    return res;
};

let nums = [3,100,20]
console.log(minDifference(nums));