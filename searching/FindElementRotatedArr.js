var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;

  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (target === nums[mid]) {
      return mid;
    } else {
        if (nums[mid] >= nums[low]) {
          if (nums[low] <= target && nums[mid] > target) {
            high = mid - 1;
          } else {
            low = mid + 1;
          }
        } else {
          if (nums[mid] < target && nums[high] >= target) {
            low = mid + 1;
          } else {
            high = mid - 1;
          }
        }
    }
  }
  return -1;
};

//[4,5,6,7,0,1,2] => 0 | 3
let nums = [3,4,5,6,7,8,1,2], target = 2
console.log(search(nums, target));
