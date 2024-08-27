/*
You are given m arrays, where each array is sorted in ascending order.

You can pick up two integers from two different arrays (each array picks one) and calculate the distance. We define the distance between two integers a and b to be their absolute difference |a - b|.

Return the maximum distance.

*/

var maxDistance = function(arrays) {
    let min  = arrays[0][0]
    let max = arrays[0][arrays[0].length - 1]
    let maxDiff = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i<arrays.length; i++) {
        let last = arrays[i].length - 1;
        let x = Math.abs(arrays[i][last] - min);
        let y = Math.abs(max - arrays[i][0])
        maxDiff = Math.max(maxDiff, x, y);
        if (arrays[i][0] < min) {
            min = arrays[i][0];
        }
        if (arrays[i][last] > max) {
            max = arrays[i][last];
        }
    }
    return maxDiff
};

let arrays = [[-1,1],[-3,1,4],[-2,-1,0,2]]
console.log(maxDistance(arrays));
