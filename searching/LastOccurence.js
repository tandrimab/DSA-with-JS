function lastOccurence(arr, low=0, high, element) {
    let mid = Math.floor((low+high) / 2);
    if (low > high) return -1;
    if (arr[mid] === element ) {
        if (arr[mid+1] === element) {
            return lastOccurence(arr, mid+1, high, element)
        }
        return mid;
    }
    if (arr[mid] > element){
        return lastOccurence(arr, low, mid-1, element);
    }
    return lastOccurence(arr, mid+1, high, element)
}

console.log(lastOccurence([10, 20, 30, 40,40,40], 0, 5, 40));