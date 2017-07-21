/**
* Find the number with the most digits.
* 
* If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

public class MostDigits {
  public static int findLongest(int[] numbers) {
    if(numbers.length <= 0) return 0;
    int longIndex = 0;
    for(int i = 1; i < numbers.length; i++) {
      int number = numbers[i];
      int longNum = numbers[longIndex];
      if(number < 0) number = number * -1;
      if(longNum < 0) longNum = longNum * -1;
      if((number + "").length() > (longNum + "").length()) longIndex = i;
    }
    return numbers[longIndex];
  }
}