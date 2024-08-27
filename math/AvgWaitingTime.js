var averageWaitingTime = function(customers) {
    let total = 0, last = 0
    let n = customers.length
    for(let  i = 0; i < n; i++) {
        if (last > customers[i][0]) {
            total += last - customers[i][0]
        } else {
            last = customers[i][0]
        }
        total += customers[i][1]
        last += customers[i][1]
    }
    return total / n;
};

let customers = [[5,2],[5,4],[10,3],[20,1]]
console.log(averageWaitingTime(customers));