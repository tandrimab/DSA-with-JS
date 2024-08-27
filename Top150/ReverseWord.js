var reverseWords = function(s) {
    s = s.trim().replaceAll(/\s+/g, ' ').split(' ').reverse().join(' ')
    return s;
    
};

let s = "a good   example"
console.log(reverseWords(s));