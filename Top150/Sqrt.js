var mySqrt = function(x) {
    if (x == 0 || x == 1) return x;

    let l = 1;
    let h = x/2;

    let mid;
    let res;

    while (l <= h) {
        mid = Math.floor((l + h) / 2);
        if (mid * mid == x) {
            return mid;
        }
        if (mid * mid < x) {
            l =  mid + 1;
            res = mid;            
        } else {
            h = mid - 1;
        }
    }
    return res;
};

let x = 11;
console.log(mySqrt(x));
