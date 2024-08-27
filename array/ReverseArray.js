function ReverseArray(arr) {
    let i = 0, j = arr.length-1;
    while(i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

console.log(ReverseArray([10,20,30]));