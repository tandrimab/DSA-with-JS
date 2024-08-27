function squareRoot(low=1, high, num, res=-1) {
    let mid = Math.floor((high+low) / 2);
    console.log(mid);
    if (low > high) return res;
    if (mid * mid === num) {
        res = mid;
        return res;
    }
    if (mid * mid < num) {
        return squareRoot(mid+1, high, num, mid);
    }
    if(mid * mid > num) {
        return squareRoot(low, mid-1, num, res)
    }
        
}

// function squareRoot(n) {
//     let low = 1, high = n, res = -1;
//     while (low < high) {
//         let mid = Math.floor((low + high) / 2);
//         if (mid * mid === n) {
//             res = mid;
//         }
//         if (mid * mid > n) {
//             high = mid-1;
//         }
//         if (mid * mid < n) {
//             res = mid;
//             low = mid + 1;
//         }
//     }
//     return res;    
// }

console.log(squareRoot(10));