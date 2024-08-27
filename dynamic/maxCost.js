/*
    You are given an m x n integer matrix points (0-indexed). Starting with 0 points, you want to maximize the number of points you can get from the matrix.

To gain points, you must pick one cell in each row. Picking the cell at coordinates (r, c) will add points[r][c] to your score.

However, you will lose points if you pick a cell too far from the cell that you picked in the previous row. For every two adjacent rows r and r + 1 (where 0 <= r < m - 1), picking cells at coordinates (r, c1) and (r + 1, c2) will subtract abs(c1 - c2) from your score.

Return the maximum number of points you can achieve.

abs(x) is defined as:

    x for x >= 0.
    -x for x < 0.

*/

var maxPoints = function (points) {
    let col = points[0].length;
    let dp = new Array(col).fill(0)

    for (let point of points) {
        let arrMax = new Array(col).fill(0)
        let lmax = Number.MIN_SAFE_INTEGER;
        let rmax = Number.MIN_SAFE_INTEGER;
        
        for (let j = 0; j<col; j++) {
            lmax = Math.max(lmax, dp[j] + j)
            arrMax[j] = Math.max(arrMax[j], point[j] + lmax - j);
        }

        for (let j = col - 1; j>=0; j--) {
            rmax = Math.max(rmax, dp[j] - j);
            arrMax[j] = Math.max(arrMax[j], point[j] + rmax + j);
        }
        dp.splice(0, col, ...arrMax);
    }
    return Math.max(...dp)
};

let points = [[1,2,3],[1,5,1],[3,1,1]];
console.log(maxPoints(points));

