var findAnagrams = function(s, p) {
    let i = 0, j= 0;
    let charMap = new Map();
    let res = [];
    for(let i of p) {
        if (charMap.has(i)) {
            let val = charMap.get(i);
            val++;
            charMap.set(i, val);
        } else {
            charMap.set(i, 1)
        }
    }
    let count = charMap.size;
    while(j<s.length) {
        if (charMap.has(s[j])) {
            let val = charMap.get(s[j])
            val--;
            if (val === 0) count--;
            charMap.set(s[j], val)
        }
        if (j-i + 1 === p.length) {
            if (count === 0) {
                res.push(i);
            }
            if (charMap.has(s[i])) {
                let val = charMap.get(s[i])
                val++;
                charMap.set(s[i], val);
                if (val === 1) count++;
            }
            i++;
        }
        j++;
    }
    return res;
};

let s = "cbaebabacd", p = "abc"
console.log(findAnagrams(s, p))
