var groupAnagrams = function(strs) {
    let mapped = new Map();

    for (let str of strs) {
        let actual = str;
        str = [...str].sort((a,b) => a.localeCompare(b)).join('');
        
        if(!mapped.has(str)) {
            mapped.set(str, [])
        } 
        let val = mapped.get(str);
        val.push(actual)
        mapped.set(str, val)
    }
     let res = [...mapped.values()];
     return res;
    
};

let strs = ["a"]
console.log(groupAnagrams(strs))