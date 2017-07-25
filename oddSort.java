// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. 
// If you have an empty array, you need to return it.

import java.util.Arrays;
public class Kata {
  public static int[] sortArray(int[] array) {
    if(array.length <= 1) return array;

    int[] odds = new int[array.length];
    int oddCount = 0;

    for(int i = 0; i < array.length; i++) {
      if(array[i] % 2 == 1) {
        odds[oddCount] = array[i];
        oddCount += 1;
      }
    }

    odds = Arrays.copyOfRange(odds, 0, oddCount);
    Arrays.sort(odds);

    int idx = 0;
    for(int i = 0; i < array.length; i++) {
      if(array[i] % 2 == 1) {
        array[i] = odds[idx];
        idx += 1;
      }
    }
    return array;
  }
}