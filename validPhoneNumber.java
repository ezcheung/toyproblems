// Write a function that accepts a string, and returns true if it is in the form of a phone number. 
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses) 

import java.util.regex.*;
public class Kata {
  public static boolean validPhoneNumber(String phoneNumber) {
    return Pattern.matches("[(]\\d\\d\\d[)] \\d\\d\\d-\\d\\d\\d\\d", phoneNumber);
  }
}