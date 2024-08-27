var longestConsecutive = function(nums) {
    if (!nums.length) return 0
    let set = new Set(nums);
    let longest = Number.MIN_SAFE_INTEGER;
    let len;
    set.forEach((elem, _) => {
        len = 0;
        if (!set.has(elem - 1)) {
            len += 1;
            while (set.has(elem + len)) {
                len += 1;
            }
            longest = Math.max (longest, len);
        }
    })
    return longest;
};

let  nums = []
console.log(longestConsecutive(nums));