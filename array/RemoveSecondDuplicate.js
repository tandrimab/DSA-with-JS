function remove(nums) {
    let k = 2, i = 2;
    while (i < nums.length) {
        if (nums[k-2] !== nums[i]) {
            nums[k] = nums[i];
            k++;
            i++;
        } else {
            i++;
        }
    }
    return k;
}

let nums = [0,0,1,1,1,1,2,3,3]

let k = remove(nums);

console.log("k=", k);
for (let i = 0; i<k; i++) {
    console.log(nums[i]);
}