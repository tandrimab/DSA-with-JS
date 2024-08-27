function merge(arr, low, mid, high) {
    let len1 = mid - low + 1;
    let len2 = high - mid;

    let temp1 = new Array(len1);
    let temp2 = new Array(len2);

    for (let i = 0; i<len1; i++) {
        temp1[i] = arr[i + low]
    }

    for (let i = 0; i<len2; i++) {
        temp2[i] = arr[i + mid + 1]
    }

    let i = 0, j = 0, k = low;

    while (i < len1 && j < len2) {
        if (temp1[i] <= temp2[j]) {
            arr[k] = temp1[i];
            i++;
        } else {
            arr[k] = temp2[j];
            j++;
        }
        k++;
    }
    while (i < len1) {
        arr[k] = temp1[i];
        i++;
        k++;
    }
    while (j < len2) {
        arr[k] = temp2[j];
        j++;
        k++;
    }

}

function mergeSort(arr, low, high) {
    if (low >= high) {
        return;
    }

    let mid = low + parseInt((high - low) / 2)
    mergeSort(arr, low, mid)
    mergeSort(arr, mid+1, high)
    merge(arr, low, mid, high)

}


var sortArray = function(nums) {
    mergeSort(nums, 0, nums.length-1)
    return nums
};

let nums = [5,1,1,2,0,0]

console.log(sortArray(nums))