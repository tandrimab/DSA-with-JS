// var majorityElement = function(nums) {
//     nums = nums.sort((a,b) => a - b);

//     let n = Math.floor(nums.length / 2);

//     return nums[n];
// };

var majorityElement = function(nums) {
    let element = nums[0];
    let count = 1;

    for (let i = 1; i<nums.length; i++) {
        if (count === 0) {
            element = nums[i];
            count = 1;
        } else {
            if (nums[i] === element) count++;
            else count--
        }
    }

    return element
}

let nums = [-1,1,1,1,2,1]
console.log(majorityElement(nums));