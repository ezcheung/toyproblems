/**
In this kata we want to simulate the coin return of a vending machine.

In the constructor, the machine receives the valid coins. The format is [{value: quantity}, ...].

function VendingMachine(coins) {
    this.coins = coins;
}
The vending method receives the item price and the coins used to buy it and returns the change out using the the max value coins (for example, return {6:1, 2:1} is preferred over {4:2}).

VendingMachine.prototype.vending = function(price, credit) {
   ...
}

If the credit is less than the item price, it returns the coins inserted.
It will return any money that is not valid for the machine.
If it can not return the exact change out, it returns the least amount that is closest to the change out. The machine never loses money!
*/

function VendingMachine(coins) {
  this.coins = coins;
}

VendingMachine.prototype.vending = function(price, credit) {
  let returnCoins = {};

  let paid = 0;
  for(let c in credit) {
    if(this.coins[c] === undefined) {
      // invalid coin
      returnCoins[c] = credit[c];
      continue;
    }
    paid += credit[c] * c;
  }

  if(paid < price) return credit;
  for(let i in credit) {
    this.coins[i] += credit[i];
  }
  if(paid === price) {
    return returnCoins;
  }
  
  let change = paid - price;
  let validCoins = Object.keys(this.coins).sort((a, b) => b-a);
  let coinStack = [];
  var _this = this;
  closestStack = [];
  closest = change;
  function changeMake(left=change) {
    if(left === 0) return true;
    for(let c = 0; c < validCoins.length; c++) {
      if(left >= validCoins[c]) {
        if(_this.coins[validCoins[c]]) {          
          coinStack.push(validCoins[c]);
          _this.coins[validCoins[c]] -= 1;
          if(changeMake(left - validCoins[c]) === true){
            return true;
          }
          let value = change - coinStack.reduce((a, e) => Number(a)+Number(e), 0);
          if(value < closest) {
            closest = value;
            closestStack = coinStack.slice();
          }
          let popped = coinStack.pop();
          _this.coins[popped] += 1;
        }
      }
    }
    return false;
  }
  let notExact = false;
  if(changeMake() === false) {
    coinStack = closestStack;
    notExact = true;
  }
  for(let i = 0; i < coinStack.length; i++) {
    if(returnCoins[coinStack[i]] === undefined) returnCoins[coinStack[i]] = 0;
    if(notExact) this.coins[coinStack[i]] -= 1;
    returnCoins[coinStack[i]] += 1;
  }
  return returnCoins;
}