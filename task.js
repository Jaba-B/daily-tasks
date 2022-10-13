// Best Time to Buy and Sell Stock

function buyAndSellStocks(arr) {
  let minPrice = Math.min(...arr)  // O(n)
  let pricesAfterBuying = arr.slice(arr.indexOf(minPrice) + 1) // O(n)
  if(pricesAfterBuying.length === 0) { return 0 } // 1
  let maxPriceAfterBuying = Math.max(...pricesAfterBuying) // O(n)
  if(maxPriceAfterBuying === minPrice) {   // 1
    return 0
  } else {
    return (maxPriceAfterBuying - minPrice)
  }
}

console.log(buyAndSellStocks([7,1,5,3,6,4]));
console.log(buyAndSellStocks([7,6,4,3,1]));
  

// Time Complexity = 3 x O(n) + 2 = O(n)

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.