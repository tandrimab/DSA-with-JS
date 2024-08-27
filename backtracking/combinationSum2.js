/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.
*/

var combinationSum2 = function (candidates, target) {
  let output = [];
  candidates.sort((a, b) => a - b);
  function subset(candidates, target, result, sum, i) {
    if (i === candidates.length) {
      if (sum === target) {
        output.push(result);
      }
      return;
    }
    if (sum + candidates[i] <= target) {
      subset(
        candidates,
        target,
        result.concat([candidates[i]]),
        sum + candidates[i],
        i + 1
      );
    }
    while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
      i += 1;
    }

    subset(candidates, target, result, sum, i + 1);
  }
  subset(candidates, target, [], 0, 0);
  return output;
};


let candidates =
[14,6,25,9,30,20,33,34,28,30,16,12,31,9,9,12,34,16,25,32,8,7,30,12,33,20,21,29,24,17,27,34,11,17,30,6,32,21,27,17,16,8,24,12,12,28,11,33,10,32,22,13,34,18,12],
  target = 27;
console.log(combinationSum2(candidates, target));
