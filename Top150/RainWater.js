var trap = function(height) {
    let res = 0, lmax=[], rmax=[];
    let n = height.length
    lmax[0] = height[0];
    rmax[n-1] = height[n - 1]
    for(let i = 1; i<n; i++) {
        lmax[i] = Math.max(height[i], lmax[i-1])
    }
    for(let i = n-2; i>=0; i--) {
        rmax[i] = Math.max(height[i], rmax[i+1])
    }
    for(let i = 0; i<n; i++) {
        res += Math.min(lmax[i], rmax[i]) - height[i]
    }
    return res;
};

let height = [4,2,0,3,2,5]
console.log(trap(height));