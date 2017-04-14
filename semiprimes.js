/**
A semiprime is the product of two prime numbers. 
Given a semiprime, write a function that will return an array of 
both prime numbers that were used to create it. Only small 
semiprimes will be passed to your function so don’t worry about 
timing out.
*/

function semiPrime(number) {
  var highestFactor = Math.ceil(Math.sqrt(number));
  var res = [];

  for(var i = 2; i <= highestFactor; i++) {
    if((number % i) === 0) {
      res.push(i);
      res.push(number / i);
      break;
    }
  }
  return res;
}