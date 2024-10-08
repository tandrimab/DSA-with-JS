var hIndex = function(citations) {
    citations.sort((a,b) => a-b);
    let n = citations.length;
    let max = Number.MAX_SAFE_INTEGER;
    while (n >=1) {
        if (citations[n-1] === n) {
            max = Math.min(citations[n-1], max)
        }
        n--;
    }
    return max
};

let citations = [3,0,6,1,5]
// [0] => 0
//[100] => 1
console.log(hIndex(citations));


