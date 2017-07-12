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
  if(paid === price) return returnCoins;
  
  let change = paid - price;
  let validCoins = Object.keys(this.coins).sort((a, b) => b-a);
  let coinStack = [];
  function changeMake(left=change, closestStack=[], closest = change) {
    if(left === 0) return true;
    for(let c = 0; c < validCoins.length; c++) {
      if(left >= validCoins[c]) {
        coinStack.push(validCoins[c]);
        this.coins[validCoins[c]] -= 1;
        if(changeMake(left - validCoins[c], closestStack, closest) === true){
          return true;
        }
        let value = coinStack.reduce((a, e) => a+e, 0);
        if(value < closest) {
          closest = value;
          closestStack = coinStack.slice();
        }
        let popped = coinStack.pop();
        this.coins[popped] += 1;
      }
    }
    return false;
  }
  console.log("Coin Stack: ", coinStack);
  for(let i = 0; i < coinStack.length; i++) {
    if(returnCoins[coinStack[i]] === undefined) returnCoins[coinStack[i]] = 0;
    returnCoins[coinStack[i]] += 1;
  }
  return returnCoins;
}