var jump = function(nums) {
    let result = 0;
    let left = 0, right = 0;

    while (right < nums.length-1) {
        let maxDist = 0;
        for (let i = left; i<=right; i++) {
            maxDist = Math.max(maxDist, i+nums[i])
        }
        left = right + 1;
        right = maxDist;
        result += 1
    }
    return result;
};

let nums = [2,3,0,1,4]
console.log(jump(nums));
