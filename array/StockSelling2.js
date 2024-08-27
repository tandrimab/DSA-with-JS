var maxProfit = function(prices) {
    let maxProfit = 0
  for (let i = 1; i < prices.length; i++)   {
    if (prices[i-1] < prices[i]) {
        maxProfit += prices[i] - prices[i-1]
    }
  }
  return maxProfit;
};

let prices =  [7,6,4,3,1]
//[1,2,3,4,5]
//[7,1,5,3,6,4]
console.log(maxProfit(prices))