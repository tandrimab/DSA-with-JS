var minSwaps = function(nums) {
    let total = nums.filter((e) => e === 1).length;
    let concatenated = [...nums, ...nums];

    let i = 0, j = -1;
    let count1 = 0, count0 = 0, min = Number.MAX_SAFE_INTEGER;
    
    while (j < concatenated.length -1) {
        if (j - i + 1 === total) {
            if (count1 === total) {
                return 0;
            } else {
                min = Math.min(min, count0);
                if (concatenated[i] === 0) {
                    count0--;
                } else {
                    count1--
                }
                i++;
                j++;
            }
        } else {
            j++;
        }
        if (concatenated[j] === 1) {
            count1++;
        } else {
            count0++;
        }
    }
    return min;
};

let nums = [0,1,1,1,0,0,1,1,0]
console.log(minSwaps(nums));
