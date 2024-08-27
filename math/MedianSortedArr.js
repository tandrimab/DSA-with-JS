var findMedianSortedArrays = function(nums1, nums2) {
  let arr = [...nums1, ...nums2].sort((a,b) => a-b);
  let med = Math.floor((arr.length -1) / 2);

  if (arr.length  % 2 === 0) {
    return ((arr[med] + arr[med + 1] ) / 2).toFixed(5)
  } else {
    return arr[med].toFixed(5)
  }
};

let nums1 = [1,2], nums2 = [3,4]
console.log(findMedianSortedArrays(nums1, nums2));

/*
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1)
    }

    const len1 = nums1.length, len2 = nums2.length
    let start = 0, end = len1
    
    while(start <= end) {
        let partition1 = Math.floor((start + end) / 2), partition2 = Math.floor((len1 + len2 + 1) / 2) - partition1
        let max1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1]
        let min1 = partition1 === len1 ? Infinity : nums1[partition1] 
        let max2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1]
        let min2 = partition2 === len2 ? Infinity : nums2[partition2]
        
        if(max1 <= min2 && min1 >= max2) {
            if((len1 + len2) % 2 === 0) {
                return (Math.max(max1, max2) + Math.min(min1, min2)) / 2
            } else {
                return Math.max(max1, max2)
            }
        } else if(max1 > min2) {
            end = partition1 - 1
        } else {
            start = partition1 + 1
        }
    }
};

*/