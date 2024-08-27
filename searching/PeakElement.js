/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let n = nums.length;
    let low  = 0, high = n - 1;
    while(low <= high) {
        let mid = Math.ceil((low + high) / 2);
        console.log(mid);
        if ((mid === 0 || (nums[mid] >= nums[mid-1])) &&
        (mid === n-1 || (nums[mid] >= nums[mid+1]))) {
            return mid;
        }
        if (mid > 0 && nums[mid-1] >= nums[mid]) {
            high = mid-1;
        } else {
            low = mid+1;
        }
    }
    return -1;
};

console.log(findPeakElement([2,1]));