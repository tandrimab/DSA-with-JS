var strStr = function(haystack, needle) {
    function occurrence(s1, s2, i, j, first) {
        if (j === s2.length) {
            return i - j;
        }
        if (i === s1.length) {
            return -1;
        }
        if (s1[i] === s2[0]) {
            first = i;
        }
        if (s1[i] === s2[j]) {
            console.log("first", first);
            return occurrence(s1,s2, i+1, j+1, first);
        }
        console.log(i, j, first);
        if (first !== -1)
            return occurrence(s1,s2, first, 0, -1);
        return occurrence(s1, s2, i+1, 0, -1)

    }
    return occurrence(haystack, needle, 0, 0, -1);
    // const reg = new RegExp(needle);
    // let matched = haystack.match(reg);

    // if (matched) 
    //     return matched.index
    // return -1
};

let haystack = "mississippi", needle = "issip"
console.log(strStr(haystack, needle));

//mississippi, pi
//mississippi, issip
//