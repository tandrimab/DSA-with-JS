/*
You are given a string word containing lowercase English letters.

Telephone keypads have keys mapped with distinct collections of lowercase English letters, which can be used to form words by pushing them. For example, the key 2 is mapped with ["a","b","c"], we need to push the key one time to type "a", two times to type "b", and three times to type "c" .

It is allowed to remap the keys numbered 2 to 9 to distinct collections of letters. The keys can be remapped to any amount of letters, but each letter must be mapped to exactly one key. You need to find the minimum number of times the keys will be pushed to type the string word.

Return the minimum number of pushes needed to type word after remapping the keys.

An example mapping of letters to keys on a telephone keypad is given below. Note that 1, *, #, and 0 do not map to any letters.

*/

var minimumPushes = function(word) {
  let mapped = new Array(26).fill(0)

  for(let i of word) {    
    ++mapped[i.charCodeAt()-97];
  }

  mapped.sort((a,b) => b- a)
  
  let totalPress = 0
  
  for(let i = 0; i<26; i++) {
    if (mapped[i] === 0) break;
    totalPress += Math.floor((i / 8 + 1)) * mapped[i]

  }
  return totalPress;
};

let word = "aabbccddeeffgghhiiiiii"
console.log(minimumPushes(word));
