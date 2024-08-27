function factorial (n, result = 1) {
    if (n === 0 || n === 1) {
        return result;
    } else {
        return factorial(n-1, n * result);
    }
}

console.log(factorial(4));