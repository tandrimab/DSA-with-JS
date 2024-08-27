function rope(n, a, b, c) {
    if (n < 0) {
        return -1;
    }
    if (n == 0) {
        return 0;
    }
    let val = Math.max(rope(n-a, a,b,c),
    rope(n-b, a,b,c),
    rope(n-c, a,b,c))
    if (val == -1)
    return -1
    return val + 1
}

console.log(rope(9, 2, 2, 2));