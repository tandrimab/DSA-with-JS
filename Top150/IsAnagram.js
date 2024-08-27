var isAnagram = function(s, t) {
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')

    return s === t
};

s = "rat", t = "car"
console.log(isAnagram(s, t));