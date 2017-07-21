/**
* Your objective is to complete a recursive function reverse() that receives str as String and returns the same string in reverse order
* 
* Rules:
*
* reverse function should be executed only N times. N = length of the input string
* helper functions are not allowed
* changing the signature of the function is not allowed
*/

public class Reverse {

    public String reverse(String str) {
       if(str.length() == 1) return str;
       else return str.charAt(str.length() - 1) + reverse(str.substring(0, str.length() - 1));
    }
}