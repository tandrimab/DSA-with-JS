function isPalindrome(str, start = 0, end) {
    if (start > end) {
        return false;
    }
    if (start === end) {
        return true;
    }
    if (str[start] === str[end]) {
        start++;
        end--;
        return isPalindrome(str, start, end);
    }
    return false;
}

let str = "aaba";
console.log(isPalindrome(str, 0, str.length - 1));