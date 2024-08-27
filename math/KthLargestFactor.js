var kthFactor = function(n, k) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            k--;
        }
        if (k === 0) {
            return i;
        }
    }
    return -1;
};


let n = 4, k = 4
console.log(kthFactor(n, k));