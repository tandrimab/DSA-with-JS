var isArraySpecial = function(nums) {
    for(let i = 0; i<nums.length-1; i++) {
        if ((nums[i] + nums[i+1]) % 2 === 0) {
            return false;
        }
    }
    return true;
};

console.log(isArraySpecial([1,2,3,4,5]));