var twoSum = function(numbers, target) {
    let res = [], i = 0, j = numbers.length - 1
    while (i < j) {
        let sum = numbers[i] + numbers[j];
        if (sum === target) {
            return [i + 1, j + 1]
        }
        if (sum > target) {
            j--;
        } else {
            i++;
        }
    }
};

let numbers = [2,3,4], target = 6
console.log(twoSum(numbers, target));