var subsets = function(nums) {
    let output = []
    function recursiveSubsets(nums, result = [], i=0) {
        if (i === nums.length) {
            output.push(result)
            return;
        }
        
        recursiveSubsets(nums, result, i+1);
        recursiveSubsets(nums, result.concat([nums[i]]), i+1);
    }
    recursiveSubsets(nums, [], 0);
    return output;
};

let nums = [1,2,3]
console.log(subsets(nums));