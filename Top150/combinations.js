/*
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.
*/

var combine = function(n, k) {
    let output = [], i = 1;
    function dfs(i, res) {
        if (i === n+1) {
            if (res.length === k) {
                output.push(res);
            }
            return;
        }
        
        dfs(i+1, res.concat([i]))
        dfs(i+1, res)
    }
    dfs(1, [])
    return output
};

let n = 1, k = 1
console.log(combine(n, k));
