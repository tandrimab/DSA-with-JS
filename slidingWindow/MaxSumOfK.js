var sum = function(arr, k) {
    let i = 0, j = 0, total = 0
    while(j < k) {
        total += arr[j];
        j++;
    }
    let max = total
    while (j < arr.length) {
        total = total - arr[i] + arr[j];
        i++;
        j++;
        max = Math.max(max, total)
    }
    return max;
}

console.log(sum([1,2,1,4,5,1], 3));