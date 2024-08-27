var containsNearbyDuplicate = function(nums, k) {
    let numsMap = new Map();
    for (let i = 0; i< nums.length; i++) {
        if (numsMap.has(nums[i])) {
            if (Math.abs(i - numsMap.get(nums[i])) <= k) {
                return true;
            }
        }
        numsMap.set(nums[i], i)
    }
    return false
};

let nums = [1,0,1,1], k = 1
console.log(containsNearbyDuplicate(nums, k));