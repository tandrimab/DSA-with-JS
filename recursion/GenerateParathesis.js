var generateParenthesis = function(n) {
    function generate(pattern = '', l = n, r = n, res= []) {
        if (l === 0 && r === 0) {
            res.push(pattern);
            return;
        }
        if (l < 0 || r < 0 || l > r) {
            return;
        }

        pattern += '(';
        generate(pattern, l-1, r, res);
        pattern = pattern.slice(0, pattern.length - 1);

        pattern += ')';
        generate(pattern, l, r-1, res);
        pattern = pattern.slice(0, pattern.length - 1);

    }
    let res = [];
    generate('', n, n, res)
    return res;
};

console.log(generateParenthesis(3));