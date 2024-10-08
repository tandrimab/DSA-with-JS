var longestPalindrome = function(s) {
    let res = '', resLen = 0;
    let l, r;
    for(let i =0; i<s.length; i++) {
        l = i;
        r = i;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > resLen) {
                res = s.substr(l, r-l+1);
                resLen = r - l + 1
            }
            l--;
            r++;

        }
        l = i;
        r = i+1;
        
        while (l >= 0 && r < s.length && s[l] === s[r]) {   
            if (r - l + 1 > resLen) {
                res = s.substr(l, r-l+1);
                resLen = r - l + 1
            }
            l--;
            r++;

        }
    }
    return res;
};

let s = "babad"
console.log(longestPalindrome(s));
