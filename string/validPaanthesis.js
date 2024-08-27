var isValid = function (s) {
  if (s.length === 0) return false;

  let stack = [];
  for (let i = 0; i< s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
        let check = stack.pop();
        if (!check) return false
        if (i > 0 && ((s[i] === ')' && check !== '(') || (s[i] === '}' && check !== '{') || (s[i] === ']' && check !== '['))) {
            return false;
        }
    }
  }
  if (stack.length !== 0) return false;

  return true;
};

// var isValid = function (s) {
//     let stack = [];
//     let map = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };
//     let len = s.length;
//     for (let i = 0; i < len; i++) {
//         if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
//             stack.pop();
//         } else {
//             stack.push(s[i]);
//         }
//     }
//     return stack.length === 0;
// };

let  s = "(]"
console.log(isValid(s));
