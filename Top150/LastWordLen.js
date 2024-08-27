var lengthOfLastWord = function(s) {
    s = s.trim();
    return s.split(' ').at(-1).length
};

let s = "luffy is still joyboy"
lengthOfLastWord(s)