function nToOne(n, i) {
    if (i === n+1) {
        return
    } else {
        console.log(i);
        nToOne(10, i + 1);
    }
}

nToOne(10, 1);