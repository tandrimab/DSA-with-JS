function isSameParity(nums, from, to) {
    if (nums[from] === nums[to]) {
        return true;
    }
    return false
} 
var isArraySpecial = function(nums, queries) {
    let count = 0;
    let parity = new Array(nums.length).fill(0);
    let i;
    for (i = 1; i< nums.length; i++) {
        if ((nums[i-1] + nums[i]) % 2 === 0) {
            count++;
        }
        parity[i] = count;
    }
    parity[nums.length - 1] = count;
    for(let q  = 0; q < queries.length; q++) {
        queries[q] = isSameParity(parity, queries[q][0], queries[q][1])
    }
    return queries;
};

let nums = [3,4,1,2,6], queries = [[0,4]]
console.log(isArraySpecial(nums, queries));