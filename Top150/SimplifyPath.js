// console.log('/home/user/Documents//../Pictures'.replace('//', '/').split('/'));

var simplifyPath = function(path) {
    let stack = [];
    path = path.replace(/\/+/g, '/').replace('/./', '/').split('/');
    console.log(path);
    
    for (let i of path) {
        if (i !== '' ) {
            if(i === '.') {
                continue;
            }else if (i !== '..') {
                stack.push(i)
            } else {
                stack.pop();
            }
        }
    }
    return '/' + stack.join('/')
};

let path = "/a//b////c/d//././/.."
console.log(simplifyPath(path));

// console.log('/////'.replace(/\/+/g, '/'));
