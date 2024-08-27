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

function numberOfOccurences (arr, low=0, high, element) {
    let first = firstOccurence(arr, low, high, element);
    if (first === -1) {
        return 0
    }
    return lastOccurence(arr, low, high, element)- first + 1
}

console.log(numberOfOccurences([10, 20, 10, 20, 20, 30], 0, 5, 20));