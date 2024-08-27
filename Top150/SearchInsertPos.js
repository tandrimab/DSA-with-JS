var searchInsert = function(nums, target) {
    let mid;
    let low = 0, high = nums.length - 1;

    while (low <= high) {
        mid = Math.ceil((high + low)/ 2);
        if (nums[mid] === target) {
            return mid;
        } else if  (target > nums[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }        
    }
    return low;
    if (target > nums[mid]) {
        return mid + 1;
    }
    if (target < nums[mid]) {
        if (mid !== 0) {
            return mid - 1
        }
        return mid;
    }
};

let nums = [1,3,5, 6], target = 2
console.log(searchInsert(nums, target));
