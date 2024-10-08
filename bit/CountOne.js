// var hammingWeight = function(n) {
//   if (n == 0) {
//     return 0
//   }  
  
//   return (n & 1) + hammingWeight(n >> 1)

// };

var hammingWeight = function(n) {
    let res = n & 1;
    while (n != 0) {
        n = n >> 1
        res = (n & 1) + res
    }
    return res
}

let n = 128
console.log(hammingWeight(n));
