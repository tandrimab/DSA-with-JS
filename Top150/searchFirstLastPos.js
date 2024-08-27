function searchFirstPosition(nums, low, high, target) {
    if (low > high) return -1;
    let mid = Math.floor((low + high) / 2)
    
    if (nums[mid] === target) {
        if (nums[mid - 1] === target) {
            return searchFirstPosition(nums, low, mid-1, target)
        }
        return mid;
    } else if (nums[mid] < target) {
        return searchFirstPosition(nums, mid+1, high, target)
    } else {
        return searchFirstPosition(nums, low, mid-1, target)
    }
}

function searchLastPosition(nums, low, high, target) {
    if (low > high) return -1;
    let mid = Math.floor((low+high) / 2)
    if (nums[mid] === target) {
        if (nums[mid+1] === target) {
            return searchLastPosition(nums, mid+1, high, target)
        }
        return mid;
    } else if(nums[mid] < target) {
        return searchLastPosition(nums, mid+1, high, target) 
    }
    return searchLastPosition(nums, low, mid-1, target)
}

var searchRange = function(nums, target) {
    return [searchFirstPosition(nums, 0, nums.length - 1, target), searchLastPosition(nums, 0, nums.length - 1, target)]
};

let nums = [], target = 0
console.log(searchRange(nums, target));
