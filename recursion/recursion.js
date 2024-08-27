function sum(n, total = 0) {
    if (n <= 0) {
        return total;
    }
    sum(n-1, total + n);
    return total;
}

sum(5)