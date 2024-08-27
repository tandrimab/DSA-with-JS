var isPalindrome = function (x) {
  function palindrome(str, i = 0, j) {
    if (i >= j) return true;
    if (str[i] == str[j]) {
      return palindrome(str, ++i, --j);
    } else {
      return false;
    }
  }
  x = x.toString()
  return palindrome(x, 0, x.length-1);
};

console.log(isPalindrome(121));
