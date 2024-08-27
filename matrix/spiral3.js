/*
You start at the cell (rStart, cStart) of an rows x cols grid facing east. The northwest corner is at the first row and column in the grid, and the southeast corner is at the last row and column.

You will walk in a clockwise spiral shape to visit every position in this grid. Whenever you move outside the grid's boundary, we continue our walk outside the grid (but may return to the grid boundary later.). Eventually, we reach all rows * cols spaces of the grid.

Return an array of coordinates representing the positions of the grid in the order you visited them.

*/

var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    let dir = [[0,1], [1,0], [0,-1], [-1,0]];
    let result = [];
    let i = rStart, j = cStart, steps = 1, k = 0;
    while (result.length < rows * cols) {
        for(let count = 0; count < 2; count++) {
            let [x, y] = dir[k];           
            for(let count1 = 0;count1 < steps; count1++) {
                if ((0 <= i && i < rows) && (0 <= j && j < cols)) {                    
                    result.push([i, j])
                }
                i += x
                j += y
            }
            k = (k + 1) % 4
        }
        steps += 1
    }
    return result
    
};

let rows = 5, cols = 6, rStart = 1, cStart = 4
console.log(spiralMatrixIII(rows, cols, rStart, cStart));
