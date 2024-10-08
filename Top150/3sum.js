/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

*/

function TwoSum(nums, third, idx, output) {
    let left = idx + 1, right = nums.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] + third > 0) {
            right--;
        } else if (nums[left] + nums[right] + third < 0) {
            left++;
        } else {
            output.push([third, nums[left], nums[right]])
            left++
            while (nums[left] == nums[left-1] && left < right) {
                left++;
            }
        }
    }
}

var threeSum = function (nums) {
    nums.sort((a,b) => a - b);
    let output = []
    for (let i = 0; i<nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue
        } else {
            TwoSum(nums, nums[i], i, output)

        }
    }
    return output
};

let nums = [0,0,0,0]
console.log(threeSum(nums));
