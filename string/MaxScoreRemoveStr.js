
// var maximumGain = function (s, x, y) {
//   let gain = 0;

//   if (x > y) {
//     var reg1 = new RegExp("ab");
//     var reg2 = new RegExp("ba");
//   } else {
//     var reg2 = new RegExp("ab");
//     var reg1 = new RegExp("ba");
//   }

//   while (s.match(reg1)) {
//     s = s.replace(reg1, "");
//     gain += Math.max(x, y);
//   }

//   while (s.match(reg2)) {
//     s = s.replace(reg2, "");
//     gain += Math.min(x, y);
//   }

//   return gain;
// };

var maximumGain = function (s, x, y) {

    // let [a, b] = ['a', 'b'];
    // if (x < y) {
    //     [a, b] = [b, a];
    //     [x, y] = [y, x];
    // }
    let a = 'a', b = 'b';
    if (x < y) {
        a = 'b';
        b = 'a'
    }

    let minCharCnt = 0, maxCharCnt = 0, maxGain = 0;

    for (let ch of s) {
        if (ch === a) {
            maxCharCnt++;
        } else if (ch === b) {
            if (maxCharCnt) {
                maxGain += Math.max(x, y);
                maxCharCnt--;
            } else {
                minCharCnt++;
            }
        } else {
            maxGain += Math.min(maxCharCnt, minCharCnt) * Math.min(x, y);
            maxCharCnt = 0;
            minCharCnt = 0;
        }
    }
    maxGain += Math.min(maxCharCnt, minCharCnt) * Math.min(x, y);
    return maxGain;
}


let s = "cdbcbbaaabab",
  x = 4,
  y = 5;
console.log(maximumGain(s, x, y));
