var plusOne = function(digits) {
    let carry = 0, last = digits.length - 1;
    let i = last - 1;
    let result;
    result = digits[last] + 1
    digits[last] = parseInt(result % 10 + carry);
    carry = parseInt(result / 10);
    while(carry && i >= 0) {
        result = digits[i] + carry;
        digits[i] = (parseInt(result) % 10);
        carry = parseInt(result / 10);
        i--;
    }

    if (carry) {
        digits.unshift(carry)
    }

    return digits
};

let digits = [1,0]

console.log(plusOne(digits));