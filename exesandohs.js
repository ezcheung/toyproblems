/**
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.
*/

function XO(str) {
  return !str.length ? true : str.match(/[oO]/g) !== null && str.match(/[xX]/g) !== null && str.match(/[oO]/g).length === str.match(/[xX]/g).length;
}