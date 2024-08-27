/*
    Given a square matrix M[][] of size N X N, such that M[i][j] = 1 means ith person knows jth person, the task is to find the celebrity. A celebrity is a person who is known to all but does not know anyone. Return the index of the celebrity, if there is no celebrity return -1.

Note: Follow 0 based indexing and M[i][i] will always be 0.
*/

var celebrity = function (mat) {
  let a = 0,
    b = mat.length - 1;

  while (a < b) {
    console.log(a, b);
    if (mat[a][b] === 1) {
      a++;
    } else {
      b--;
    }
  }

  let candidate = a;

  for (let i = 0; i < mat.length; i++) {
    if (i !== candidate) {
      if (mat[i][candidate] === 0 || mat[candidate][i] === 1) return -1;
    }
  }
  return candidate;
};

let MATRIX = [
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
];

console.log(celebrity(MATRIX));
