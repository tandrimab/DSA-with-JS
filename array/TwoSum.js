var twoSum = function(nums, target) {
    let temp = new Map();
    for (let i = 0; i< nums.length; i++) {
        temp.set(nums[i], i);
    }
    for (let i = 0; i< nums.length; i++) {
        let idx = temp.get(target - nums[i]);
        if (idx >= 0 && idx != i) {
            return [i, id]
        }
    }
    return -1
};

console.log(twoSum([2,7,11,15], 9));

