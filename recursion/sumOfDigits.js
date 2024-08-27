function sum(num, total = 0) {
    if (num <= 9) {
        return num + total;
    }
    return sum(Math.trunc(num / 10), total + (num % 10));
}

console.log(sum(253));