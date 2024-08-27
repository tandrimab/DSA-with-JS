function firstOccurence(arr, low=0, high, element) {
    let mid = Math.floor((low+high) / 2);
    if (low > high) return -1;
    if (arr[mid] === element ) {
        if (arr[mid-1] === element) {
            return firstOccurence(arr, low, mid-1, element)
        }
        return mid;
    }
    if (arr[mid] > element){
        return firstOccurence(arr, low, mid-1, element);
    }
    return firstOccurence(arr, mid+1, high, element)
}

console.log(firstOccurence([10], 0, 1, 10));