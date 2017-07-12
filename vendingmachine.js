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

