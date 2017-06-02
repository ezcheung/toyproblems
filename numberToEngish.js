/**
Write a function numberToEnglish, it should take a number and return the number as a string using English words.
helper objects: numbersToWords, numbersToPlace
*/

function numberToEnglish(number) {
  if(number === 0) return 'zero';
  ntw = (num) => numbersToWords[num.toString()];
  numbersToPlace = ['thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion'];

  function tens(number) {
    if(number === 0) return '';
    if(number < 21) return ntw(number) + " " + numbersToPlace[placeIndex];
    var ten = ntw(Math.floor(number / 10) * 10);
    var one = number % 10;
    one = one ? '-' + ntw(one) : '';
    return ten + one;
  }
  function parseBlock(number, placeIndex) {
    var hundreds = ntw(Math.floor(number / 100)) + ' hundred ';
  }
}