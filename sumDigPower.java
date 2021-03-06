// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

import java.util.List;
import java.util.ArrayList;
class SumDigPower {
    
    public static List<Long> sumDigPow(long a, long b) {
      List<Long> lst = new ArrayList<Long>();

      for(long i = a; i <= b; i++) {
        String digits = i + "";
        long total = 0;
        long digsLeft = i;
        for(int j = digits.length() - 1; j >= 0; j--) {
          long dig = digsLeft % 10;
          long pow = (long)Math.pow(dig, j + 1);
          total += pow;
          digsLeft = digsLeft / 10;
        }
        if(total == i) lst.add(i);
      }

      return lst;
    }
}