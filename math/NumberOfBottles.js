var numWaterBottles = function(numBottles, numExchange) {
    let total = numBottles;
    while(numBottles >= numExchange ) {
        total += Math.trunc(numBottles / numExchange)
        let temp = numBottles % numExchange
        numBottles = Math.trunc(numBottles / numExchange) + temp
    }
    return total
};

let numBottles = 2, numExchange = 2
console.log(numWaterBottles(numBottles, numExchange));