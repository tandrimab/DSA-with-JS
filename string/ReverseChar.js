var reverseWords = function(s) {
    let stack = []
    let res = ''
    for (let i of s) {
        if (i === ' ') {
            res += stack.reverse().join('') + ' ';
            stack = []
        } else {
            stack.push(i)
        }
    }
    res += stack.reverse().join('') + ' ';
    return res;
};

// var reverseWords = function(s) {
//     let newWord=s.split(" ").map((word)=>word.split("").reverse().join("")).join(" ");
//     return newWord
// };

let s = "Mr Ding"
console.log(reverseWords(s));
