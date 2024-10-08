var findMin = function(nums) {
    let low = 0, high = nums.length -1;
    let mid, min = Number.MAX_SAFE_INTEGER;
    while (low <= high) {
        mid = Math.floor((high + low) / 2);
        if (nums[low] < nums[high]) {
            min = Math.min(nums[low], min);
            break
        }
        min = Math.min(nums[mid], min);        

        if (nums[mid] >= nums[low]) {
            low = mid +1
        } else {
            high = mid - 1;
        }
         
    }
    return min;
};

let nums = [2,1]
console.log(findMin(nums));
