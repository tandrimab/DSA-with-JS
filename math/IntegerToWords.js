var numberToWords = function(num) {
    let mapped = {
        100: 'Hundred',
        1000: 'Thousand',
        1000000: 'Million',
        1000000000: 'Billion',
    }

    let result  = '', dividend;

    for(let range = 1000000000; range >= 1000; range /= 1000) {
        dividend = Math.trunc(num / range);
        
        if (dividend > 0) {
            result += constructHundred(dividend) + ' ' + mapped[range] + ' '
        }
        num = num % range;
    }
    result += constructHundred(num)
    return result.trim() || 'Zero';

};

function constructHundred(num) {
    let tyMapped = {
        2: 'Twenty',
        3: 'Thirty',
        4: 'Forty',
        5: 'Fifty',
        6: 'Sixty',
        7: 'Seventy',
        8: 'Eighty',
        9: 'Ninety',
    }
    let oneMapped = {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
    }
    let teenMapped = {
        10: 'Ten',
        11: 'Eleven',
        12: 'Twelve',
        13: 'Thirteen',
        14: 'Fourteen',
        15: 'Fifteen',
        16: 'Sixteen',
        17: 'Seventeen',
        18: 'Eighteen',
        19: 'Nineteen', 
    }
    let result = '', val;
    // console.log('num',num);
    
    if (num >= 100) {
        val = Math.trunc(num / 100);
        result = oneMapped[val] + ' Hundred '
        num = num % 100;
    } 
    if (num >= 10 && num <= 19) {
        result += teenMapped[num] + ' '
    } 
    if (num >= 20) {        
        val = Math.trunc(num / 10);
        result += tyMapped[val] + ' ' ;
        if (num % 10) {
            result += oneMapped[num % 10]
        }
    }
    if(num >= 1 && num < 10) {
        result += oneMapped[num]        
    }
    result = result.trim()
    return result;
}

let num = 29
console.log(numberToWords(num));
