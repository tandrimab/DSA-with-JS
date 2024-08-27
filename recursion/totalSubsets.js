function subset(str, curr='', i=0, count=1) {
    if (i === str.length) {
        console.log(curr);
        return count;
    }
    return subset(str, curr, i+1, count) +
    subset(str, curr+str[i], i+1, count);
}

console.log(subset("AB"));