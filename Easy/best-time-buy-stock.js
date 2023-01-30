// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

//     1 <= prices.length <= 105
//     0 <= prices[i] <= 104

// two pointer
// initialize left pointer = 0, right pointer = 1, max profit = 0
// while right pointer < length of prices array
// if left is < right
// then calculate profit
// if profit is > maxProfit 
// then profit = maxProfit
// else left = right: avoid non-important peaks, left becomes next low
// finally right += 1
// return max profit

var maxProfit = function(prices) {
  let left = 0
  let right = 0
  let maxProfit = 0
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      profit = prices[right] - prices[left]
      maxProfit = Math.max(profit, maxProfit)
    } else {
      left = right
    }
    right += 1
  }
  return maxProfit
};

prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices))// 5

prices = [7, 6, 4, 3, 1]
console.log(maxProfit(prices))// 0