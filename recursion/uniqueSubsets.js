function subset(str, curr='', i=0, arr=[]) {
    if (i === str.length) {
        arr.push(curr)
        return;
    }
    subset(str, curr, i+1, arr);
    subset(str, curr+str[i], i+1, arr);
}

let arr = [];
subset("GGG", '', 0, arr);
console.log(new Set([...arr]))