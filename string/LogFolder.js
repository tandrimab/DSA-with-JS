var minOperations = function(logs) {
    if (!logs.length) return 0;

    let count = 0;
    let childFolderReg = /^[a-z0-9A-Z]+\//g;
    let moveToParentReg = /^\.{2}\//g;

    for (let i = 0; i< logs.length; i++) {
        if (logs[i].match(childFolderReg)) {
            count++;
        } else if(logs[i].match(moveToParentReg) && count > 0) {
            count--;
        }
    }

    return count;
};
let logs= ["d1/","d2/","./","d3/","../","d31/"]
console.log(minOperations(logs));