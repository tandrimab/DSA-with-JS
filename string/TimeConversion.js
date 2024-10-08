function timeConversion(s) {
    // Write your code here
    let timeReg = /[0-9]{2}/g

    let match;
    while((match = timeReg.exec(s)) !== null) {
        console.log(match[0]);
        
    }

}

timeConversion('12:01:23AM')