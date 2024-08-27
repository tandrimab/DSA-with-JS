var threeConsecutiveOdds = function(arr) {
    let count = 0, n = arr.length;
    for (let i = 0; i< n; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        } else {
            count = 0;
        }
        if (count === 3) return true;
    }
    if (count < 3) return false;
    return true;
};

let arr = [1,2,34,3,4,5,7,23,12]
console.log(threeConsecutiveOdds(arr));