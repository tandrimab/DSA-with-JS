var merge = function(nums1, m, nums2, n) {
    let i = m-1, j = n-1, k = nums1.length -1;

    while (i >=0 && j >=0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
};

let nums1 = [0], m = 0, nums2 = [0], n = 0
merge(nums1, m, nums2, n)