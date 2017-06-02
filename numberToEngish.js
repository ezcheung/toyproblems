/**
Write a function numberToEnglish, it should take a number and return the number as a string using English words.
helper objects: numbersToWords, numbersToPlace
*/

function numberToEnglish(number) {
  if(number === 0) return 'zero';
  ntw = (num) => numbersToWords[num.toString()];
  numbersToPlace = ['thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion'];

  // Parse numbers less than 100
  function tens(number) {
    if(number === 0) return '';
    if(number < 21) return ntw(number);
    var ten = ntw(Math.floor(number / 10) * 10);
    var one = number % 10;
    one = one ? '-' + ntw(one) : '';
    return ten + one;
  }

  // Parse 3 decimal places
  function parseBlock(number, placeIndex) {
    if(number === 0) return '';
    var block = '';
    var small = tens(number % 100);
    if(number < 100) block = small;
    else {     
      var hundreds = ntw(Math.floor(number / 100)) + ' hundred';
      if(small) block = hundreds + ' ' + small;
      else block = hundreds;
    }
    return placeIndex !== -1 ? block + ' ' + numbersToPlace[placeIndex] : block;
  }

  var toReturn = '';
  var placeIndex = -1;

  // Loop through 3 at a time
  for(var i = number.toString().length - 1; i >= 0; i -= 3) {
    if(i < 2) toReturn = parseBlock(Number(number.toString().slice(0, i + 1)), placeIndex) + ' ' + toReturn;
    else toReturn = parseBlock(Number(number.toString().slice(i - 2, i + 1)), placeIndex) + ' ' + toReturn;
    placeIndex += 1;
  }
  return toReturn.trim();
}