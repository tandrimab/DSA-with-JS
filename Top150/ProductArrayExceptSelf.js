var productExceptSelf = function (nums) {
  let output = [], product = 1;
  output[0] = 1;

  for (let i = 1; i<nums.length; i++) {
    product *= nums[i-1];
    output[i] = product
  }

  product = 1;

  for (i = nums.length - 1; i>= 0; i--) {
    let temp = nums[i];
    nums[i] = parseInt(product * output[i]);
    product *= temp;
  }

  return nums;
};

let nums = [-1,1,0,-3,3]
console.log(productExceptSelf(nums));

