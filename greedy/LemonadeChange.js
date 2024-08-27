/*
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.

*/

var lemonadeChange = function (bills) {
  let ten = 0,
    five = 0;
  for (let bill of bills) {
    if (bill === 5) {
      five++;
    } else if (bill === 10) {
      five--;
      ten++;
    } else {
      if (ten > 0) {
        ten--;
        bill -= 10;
      }
      five -= bill / 5 - 1;
    }
    if (five < 0) {
      return false;
    }
  }
  return true;
};

let bills = [5,5,5,10,20]
console.log(lemonadeChange(bills));
