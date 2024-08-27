var longestCommonPrefix = function(strs) { 
    if (strs.length <= 1) {
        return strs[0] || ''
    }
    let smallest, count = 0, prefix, minLength = 201;
    for(let i = 0; i<strs.length; i++) {
        if (strs[i].length < minLength) {
            minLength = strs[i].length;
            smallest = strs[i]
        }
    }

    for(let i = 0; i<minLength; i++) {
        for(let j = 0; j<strs.length; j++) {
            if (smallest[i] !== strs[j][i]) {
                return count === 0 ? '' : smallest.substr(0, count)
            } 
        }
        count++;
    }

    if (count) return smallest.substr(0, count);
    return ''
};

let strs = ["", '']
console.log(longestCommonPrefix(strs));