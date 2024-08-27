/*

    The given grid may contain integers above 9, but a magic grid may only contain integers 1 to 9.
    The given grid may contain duplicate values, but every value in a magic grid must be distinct. In other words, no duplicate values are allowed.

With the given grid, you want to find the number of subarrays in grid that are magic squares. A 3 x 3 magic square is defined as a 3 x 3 array containing distinct integers from 1 to 9 whose rows, columns, and diagonals all have the same sum.


*/
function check(grid, row, col) {
    let visited = new Array(10).fill(0);
    let k = 0;
    for (let i = 0; i<3; i++) {
        for (let j = 0; j<3; j++) {
            if (grid[row+i][col+j] < 1 || grid[row+i][col+j] > 9) return false;
            if (visited[grid[row+i][col+j]]) return false;
            visited[grid[row+i][col+j]] = 1;
        }
    }
    // console.log(visited);
    
    let rowSum1 = grid[row][col] + grid[row][col+1] + grid[row][col+2]
    let rowSum2 = grid[row+1][col] + grid[row+1][col+1] + grid[row+1][col+2]
    let rowSum3 = grid[row+2][col] + grid[row+2][col+1] + grid[row+2][col+2]

    let diagSum1 = grid[row][col] + grid[row+1][col+1] + grid[row+2][col+2]
    let diagSum2 = grid[row+2][col] + grid[row+1][col+1] + grid[row][col+2]

    if (diagSum1 !== diagSum2) return false;
    if (!(rowSum1 === diagSum1 && rowSum2 === diagSum1 && rowSum3 === diagSum1)) return false;

    let colSum1 = grid[row][col] + grid[row+1][col] + grid[row+2][col]
    let colSum2 = grid[row][col+1] + grid[row+1][col+1] + grid[row+2][col+1]
    let colSum3 = grid[row][col+2] + grid[row+1][col+2] + grid[row+2][col+2]

    if (!(colSum1 === diagSum1 && colSum2 === diagSum1 && colSum3 === diagSum1)) return false;

    return true;
}


    
var numMagicSquaresInside = function (grid) {
    let row = grid.length;
    let col = grid[0].length
    let res = 0;
    for(let i = 0; i + 2 <row; i++) {
        for(let j = 0; j + 2 < col; j++) {
            if (check(grid, i, j)) res++;
        }
    }
    return res;
};

let grid = [[8]]
console.log(numMagicSquaresInside(grid));

