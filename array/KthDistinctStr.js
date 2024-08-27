/*
A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.

 

Example 1:

Input: arr = ["d","b","c","b","c","a"], k = 2
Output: "a"
Explanation:
The only distinct strings in arr are "d" and "a".
"d" appears 1st, so it is the 1st distinct string.
"a" appears 2nd, so it is the 2nd distinct string.
Since k == 2, "a" is returned. 

Example 2:

Input: arr = ["aaa","aa","a"], k = 1
Output: "aaa"
Explanation:
All strings in arr are distinct, so the 1st string "aaa" is returned.

Example 3:

Input: arr = ["a","b","a"], k = 3
Output: ""
Explanation:
The only distinct string is "b". Since there are fewer than 3 distinct strings, we return an empty string "".


*/

// var kthDistinct = function(arr, k) {
//   let map = {};
//   for(let str of arr) {
//       if(!map[str])   map[str] = 1;
//       else    map[str]++;
//   }

//   for(let str of arr) {
//       if(map[str] > 1)    continue;

//       if(k === 1) return str;
//       k--;
//   }

//   return "";
// };

var kthDistinct = function (arr, k) {
  let mapped = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (mapped.has(arr[i])) {
      let count = mapped.get(arr[i]);
      mapped.set(arr[i], count+1)
    } else {
      mapped.set(arr[i], 1);
    }
  }

  for(let elem of mapped) {
    if (elem[1] == 1) { 
      k -= 1;
    }
    if (k == 0) {      
      return elem[0]
    }
  }
  return "";
};

let arr = ["aaa","aa","a"], k = 1
console.log(kthDistinct(arr, k));
