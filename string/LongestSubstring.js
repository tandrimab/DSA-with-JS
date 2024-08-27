var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let charMap = new Map();
    let maxLength = 0, k = 0, res = 0;
    for(let i = 0; i<n; i++) {
        let val = charMap.has(s[i]) ? charMap.get(s[i]) : -1;
        k = Math.max(k, val + 1)
        maxLength = i - k + 1;
        res = Math.max(res, maxLength)
        charMap.set(s[i], i)
    }
    console.log(res);
    return res;
};

lengthOfLongestSubstring('pwwkew')