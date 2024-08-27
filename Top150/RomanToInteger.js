var romanToInt = function (s) {
  let mapped = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0,
    i = 0;
  while (i < s.length) {
    if (
      i < s.length - 1 &&
      ((s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) ||
        (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) ||
        (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M")))
    ) {
      res += mapped[s[i + 1]] - mapped[s[i]];
      i += 2;
    } else {
      res += mapped[s[i]];
      i++;
    }
  }
  return res;
};

let s = "MMMCMXCIX";
console.log(romanToInt(s));
