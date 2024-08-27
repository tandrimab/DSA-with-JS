var addedInteger = function(nums1, nums2) {
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);
    let x  = nums2[0] - nums1[0];
    for (let i = 1; i<nums1.length; i++) {
        if (nums2[i] - nums1[i] !== x) return false;
    }
    return x;
};

// var addedInteger = function(nums1, nums2) {
//     const sum = (array) => array.reduce((accu, curr) => accu + curr, 0)
//     return ( sum(nums2) - sum(nums1) ) / nums1.length
// };

console.log(addedInteger([1,1,1,1], [1,1,1,1]));