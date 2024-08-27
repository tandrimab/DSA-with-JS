/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest
palindrome
 that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.
*/

var longestPalindrome = function(s) {
    let mapped = {};
    for(let i of s) {
        mapped[i] = mapped[i] ? ++mapped[i] : 1
    }
    let count = 0;
    for(let i in mapped) {
        if (mapped[i]%2 !== 0) count++
    }
    if (count > 0) {
        return s.length - count + 1
    }
    return s.length
};

let s = "Aa"
console.log(longestPalindrome(s))