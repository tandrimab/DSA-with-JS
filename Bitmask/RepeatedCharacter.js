var repeatedCharacter = function(s) {
  let repeated = 0;
  for(let ch of s) {
    let bit = 1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0));
    
    if ((repeated & bit) === bit) {
        return ch;
    }
    repeated |= bit
  }  
};

let s = "abccbaacz"
console.log(repeatedCharacter(s));
