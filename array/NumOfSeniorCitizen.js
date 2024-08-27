var countSeniors = function(details) {
    let count = 0;
    for (let i = 0; i< details.length; i++) {
        let age = parseInt(details[i].substr(details[i].length - 4, 2))
        if (age > 60) {
            count++
        }
    }
    return count
};

let details = ["1313579440F2036","2921522980M5644"]
console.log(countSeniors(details));