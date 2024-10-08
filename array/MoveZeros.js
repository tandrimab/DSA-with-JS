var moveZeroes = function(nums) {
  // Two pointers
  let count =0;
  
  for (let i = 0; i< nums.length; i++) {
    if (nums[i] !== 0) {
        let temp = nums[i];
        nums[i] = nums[count];
        nums[count] = temp;
        count++;
    }
  }
  return nums
};

let nums = [0, 11, 2,3,0 , 0]
console.log(moveZeroes(nums));
