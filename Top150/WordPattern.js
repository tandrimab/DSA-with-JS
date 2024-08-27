var wordPattern = function(pattern, s) {
    s = s.split(' ');
    if (s.length !== pattern.length) return false;

    let mapped = new Map();

    for(let i = 0; i<s.length; i++) {
        if (mapped.has(pattern[i]) && mapped.get(pattern[i]) !== s[i]) {
             return false;
        }
        if ([...mapped.values()].includes(s[i]) && !mapped.has(pattern[i])) {
            return false;
        }
        mapped.set(pattern[i], s[i])
        
    }
    return true;

};

let pattern = "abbx", s = "dog cat cat dog"
console.log(wordPattern(pattern, s));
