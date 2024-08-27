var reverseString = function(s) {
    function reverse(str, i = 0, j) {
        if (i >= j) return str;
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        return reverse(str, ++i, --j);
      }
      return reverse(s, 0, s.length-1)

};

console.log(reverseString(["H","a"]));