var rotateString = function(s, goal) {
    let newStr = s + s;

    if (newStr.indexOf(goal) > -1) {
        return true;
    }
    return false
};

let s = "abcde", goal = "abced"
console.log(rotateString(s, goal));