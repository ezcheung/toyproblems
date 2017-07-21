/**
* You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
*
* #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
*
* n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
*/

class LongestConsec {
    
  public static String longestConsec(String[] strarr, int k) {
    if(strarr.length == 0 || strarr.length < k || k <= 0) return "";
    String longest;
    int longLen = 0;

    for(int i = 0; i <= strarr.length - k; i++) {
      String current = "";
      for(int j = 0; j < k; j++) {
        current += strarr[i+j];
      }
      if(current.length() > longLen) {
        longest = current;
        longLen = current.length();
      }
    }
    return longest;
  }
}