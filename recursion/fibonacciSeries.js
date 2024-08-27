/*
Fibonacci series upto a given number n
*/

function fibIterative(n) {
    let result = '0';
    if (n < 1) {
        return;
    }
    let prev = 0, current= 1;
    while (current <= n) {
        result += ', ' + current;
        let temp = prev + current;
        prev = current;
        current = temp;
    }
    console.log(result);
}

function fibRecursive(n) {
    
}