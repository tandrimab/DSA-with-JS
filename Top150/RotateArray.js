// var rotate = function(nums, k) {
//     let temp = [];
//     for (let  i = 0; i< k; i++) {
//         temp.unshift(nums.pop())
//     }
//     nums.unshift(...temp)
//     console.log(nums);

// };

var reverse = function(nums, low, high) {
    while (low < high) {
        let temp = nums[low]
        nums[low] = nums[high];
        nums[high] = temp;
        low++;
        high--;
    }
}

var rotate = function(nums, k) {
    k = k % nums.length
    reverse(nums, nums.length - k, nums.length-1);
    reverse(nums, 0, nums.length - k -1)
    reverse(nums, 0, nums.length - 1)
}

let nums = [1,2], k = 3
rotate(nums, k)
console.log(nums)