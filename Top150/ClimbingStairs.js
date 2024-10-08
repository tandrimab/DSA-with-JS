var climbStairs = function(n) {
  let first = 1, second  = 1;
  for (let i = 0; i< n-1; i++) {
    let temp = first + second;
    second = first;
    first = temp;
  }  
  return first;
};

let n = 3;
console.log(climbStairs(n));
