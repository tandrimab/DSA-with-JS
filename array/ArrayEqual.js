var canBeEqual = function(target, arr) {
    if (arr.length !== target.length) return false;
    target.sort((a,b) => a-b)
    arr.sort((a,b) => a-b)
    for(let i = 0; i<target.length; i++) {
        if (target[i] !== arr[i]) {
            return false;
        } 
    }
    return true;
};

let target = [3,7,9], arr = [3,7,11]
console.log(canBeEqual(target, arr));
