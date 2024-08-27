var reverseParentheses = function(s) {
    let stack = [];
    for(let i = 0; i<s.length; i++) {
        if(s[i] !== ')') {
            stack.push(s[i]);
        } else if (s[i] === ')') {
            let res = [], ch = stack.pop();
            while(ch !== '(') {
                res.push(ch);
                ch = stack.pop()
            }
            let j = 0;
            while(j < res.length) {
                stack.push(res[j]);
                j++;
            }
            res =[];
            
        }
    }
    return stack.join('')
};

let s = '(ed(et(oc))el)'
console.log(reverseParentheses(s));