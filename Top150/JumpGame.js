var canJump = function(nums) {
    let goal = nums.length - 1;
    for (let i = nums.length - 2; i >=0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        } else {
            return false;
        }
    }
    return true;
};

let nums = [3,2,1,0,4]
console.log(canJump(nums));
