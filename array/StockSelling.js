var maxProfit = function (prices) {
  if (prices.length <= 1) return 0;
  var profit = 0, maxProfit = 0, buyingPrice = prices[0];
  for(var i = 1; i<prices.length; i++) {
    if (prices[i] < buyingPrice) {
      buyingPrice = prices[i];
    } else {
      profit = prices[i] - buyingPrice;
      if(maxProfit < profit) {
        maxProfit = profit;
      }
    }
  }  
  return maxProfit;
};

let prices = [7]
// [3,2,6,5,0,3]
//[2, 4,1]
//[7,1,5,3,6,4]
//[3,3,5,0,0,3,1,4]
// [7,6,4,3,1]
console.log(maxProfit(prices));
