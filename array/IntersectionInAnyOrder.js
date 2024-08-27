// var intersect = function(nums1, nums2) {
//     if (nums1.length > nums2.length) {
//         return intersect(nums2, nums1);
//     }
//     nums1.sort((a,b) => a-b);
//     nums2.sort((a,b) => a-b);
//     let res = [], i1 = 0, i2 = 0;
//     while (i1 < nums1.length && i2 < nums2.length) {
//         if (nums1[i1] === nums2[i2]) {
//             res.push(nums1[i1])
//             i1++;
//             i2++;
//         } else if (nums1[i1] < nums2[i2]) {
//             i1++;
//         } else {
//             i2++;
//         }
//     }
//     return res;
// };

var intersect = function (nums1, nums2) {
  const mapped = new Map();
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    mapped.set(nums1[i], (mapped.get(nums1[i]) ?? 0) + 1);
  }
  for (let j = 0; j < nums2.length; j++) {
    if (mapped.has(nums2[j]) && mapped.get(nums2[j]) > 0) {
      res.push(nums2[j]);
      mapped.set(nums2[j], mapped.get(nums2[j]) - 1);
    }
  }
  return res;
};

let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
console.log(intersect(nums1, nums2));
