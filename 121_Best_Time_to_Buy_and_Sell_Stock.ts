function maxProfit(prices: number[]): number {
  let ans = 0;
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > buy) {
      ans = Math.max(ans, prices[i] - buy);
    } else if (prices[i] < buy) {
      buy = prices[i];
    }
  }
  return ans;
};

const prices = [7,1,5,3,6,4];
console.log(`The maximum profit of one transaction of the prices - [${prices}] is`, maxProfit(prices));

export {};