var reverse = function(x) {  
  let remainder, result = 0;

  const range = Math.pow(2, 31);
  
  const range0 = -(range - 1);

  while (x !== 0) {    
    let dividend = Math.trunc(x / 10)
    
    remainder = x % 10;
    
    result = result * 10 + remainder;
    
    if (result <= range0 || result >= range) {
        return 0;
    }

    x = dividend;
}

  return result
};

console.log(reverse(-2147483647));