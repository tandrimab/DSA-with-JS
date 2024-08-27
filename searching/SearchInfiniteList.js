function binarySearch(arr, low, high, element) {
    if (low > high) return -1;
    let mid = Math.trunc((low+high) / 2);
    if (arr[mid] === element) return mid;
    if (arr[mid] > element) return binarySearch(arr, low, mid-1, element);
    if (arr[mid] < element) return binarySearch(arr, mid+1, high, element);
}

function infiniteSearch(arr, element) {
    if (arr[0] === element) return 0;
    let i = 1, j;
    while (arr[i] <= element) {
        if (element === arr[i]) return i;
        j = i;
        i = i * 2;
    }
    return binarySearch(arr, j, i, element);
}


console.log(infiniteSearch([10,20,30,40,50,60,70,88,99,100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120], 75));