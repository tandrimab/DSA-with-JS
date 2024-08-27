var arrange = function(arr) {
    let k = 1;
    for(let i = 1; i<arr.length; i++) {
        if (arr[k-1] == arr[i]) {
            let temp = arr[i];
            arr[i] = arr[k];
            arr[k] = temp
            k++;
        }
    }
    return arr;
}

let arr = ['R', 'G', 'R', 'R', 'G', 'G', 'G', 'R']
console.log(arrange(arr));
