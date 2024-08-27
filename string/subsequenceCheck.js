function check(s, t,i, j) {
    if (j === s.length) {
        return true;
    }
    if (i === t.length) {
        return false;
    }
    if (t[i] === s[j]) {
        return check(s, t, i+1, j+1)
    } else {
        return check(s, t, i+1, j)
    }
}

var isSubsequence = function(s, t) {
    return check(s, t, 0, 0)
};

let s = "", t = ""
console.log(isSubsequence(s, t));