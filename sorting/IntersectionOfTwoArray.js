function intersection(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0,
    j = 0,
    k = 0;
  let res = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      if (k=== 0 || res[k-1] !== nums1[i]) {
        res[k] = nums1[i];
        k++;
      }
      i++;
      j++;
    }
  }
  return res;
}

let nums1 = [4,9,5]
let nums2 = [9,4,9,8,4]
console.log(intersection(nums1, nums2));
