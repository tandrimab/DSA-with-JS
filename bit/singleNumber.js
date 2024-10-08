var singleNumber = function(nums) {
    let res = 0
    for(let i of nums) {
        res = res ^ i
    }
    return res
};

let nums = [0,1,2,1,2]
console.log(singleNumber(nums));
