function remoteDuplicate(arr) {
    // let aux=[], auxIndx = 0;
    // aux[0] = arr[0];
    // for(let i = 1;i < arr.length; i++) {
    //     if (arr[i] !== aux[auxIndx]) {
    //         auxIndx++;
    //         aux[auxIndx] = arr[i];
    //     }
    // }
    // arr = [...aux];
    // return arr;
    let res = 1;
    for (let i =1; i<arr.length; i++) {
        if (arr[i] !== arr[res-1]) {
            arr[res] = arr[i];
            res++;
        }
    }
    return arr;
}

console.log(remoteDuplicate([10, 10, 10, 20, 20, 30, 30, 30 ]));