var countConsistentStrings = function(allowed, words) {
    let masked = 0
    for (let ch of allowed) {
        let bit = ch.charCodeAt(0) - 'a'.charCodeAt(0)
        masked |= (1 << bit);
    }
    let res = words.length;
    for (let word of words) {
        let wordMask = 0;
        for (let ch of word) {
            let bit = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            wordMask = (1 << bit);
            if ((masked & wordMask) === 0) {
                res--
                break;
            }
        }

    }
    return res;
};

let  allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
console.log(countConsistentStrings(allowed, words));
