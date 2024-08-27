var canConstruct = function(ransomNote, magazine) {
    let magMap = {}

    for(let i of magazine) {
        if (magMap.hasOwnProperty(i)) {
            magMap[i]++;
        } else {
            magMap[i] = 1;
        }
    }

    for(let i of ransomNote) {
        if (!magMap.hasOwnProperty(i) || magMap[i] <= 0) {
            return false;
        } else if (magMap.hasOwnProperty(i)){
            magMap[i]--;
        }
    }
    return true
};

let ransomNote = "aa", magazine = "aab"
console.log(canConstruct(ransomNote, magazine));