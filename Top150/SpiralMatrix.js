var spiralOrder = function(matrix) {
    let directions = [[0,1], [1,0], [0, -1], [-1,0]];
    let m = matrix.length;
    let n = matrix[0].length
    let res = [];
    let i = 0, j = 0, k = 0
    res.push(matrix[i][j]);
    matrix[i][j] = 'x'
    while (res.length < m * n) {
        let [r, c] = directions[k];
        if ((i+r) < m && (i+r) >= 0 && (j + c) < n && (j + c) >= 0 && matrix[i + r][j+c] !== 'x') {
            i = i + r;
            j = j + c;
            res.push(matrix[i][j]);
            matrix[i][j] = 'x';
        } else {
            k = (k+1) % 4;
        }
    }
    return res;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(spiralOrder(matrix));
