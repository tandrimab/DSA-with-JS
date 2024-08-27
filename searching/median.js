function median(nums1, nums2) {
    if (nums1.length > nums2.length) return median(nums2, nums1);

    let n1 = nums1.length,n2 = nums2.length;

    let begin = 0, end = n1,med;

    while (begin <= end ) {
        let i1 = Math.floor((begin + end) / 2);

        let i2 = Math.floor((n1+n2+1) / 2 - i1);

        let max1 = i1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[i1-1];

        let min1 = i1 === n1 ? Number.MAX_SAFE_INTEGER : nums1[i1];

        let max2 = i2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[i2-1];

        let min2 = i2 === n2 ? Number.MAX_SAFE_INTEGER : nums2[i2];
        // console.log(min1, min2, max1, max2);
        if (max1 <= min2 && max2 <= min1) {
            if ((n1+n2) % 2 === 0) {
                console.log(Math.max(max1, min1) + Math.max(max2, min2));
                return (Math.max(max1, min1) + Math.max(max2, min2)) / 2
            } else {
                console.log(Math.max(min1, min2));
                return Math.max(min1, min2) / 2
            }
        } else if (max1 > min2) {
            end = i1 - 1;
        } else{
            begin = i1 + 1;
        }
    }
}

let nums1 = [1,3]
let nums2 = [2]
console.log(median(nums1, nums2));