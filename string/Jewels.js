var numJewelsInStones = function(jewels, stones) {
    jewels = new Set([...jewels]);
    let count = 0;
    for(let s of stones) {
        if (jewels.has(s)) {
            count++
        }
    }
    return count
    
};

let jewels = "z", stones = "ZZ"
console.log(numJewelsInStones(jewels, stones));
