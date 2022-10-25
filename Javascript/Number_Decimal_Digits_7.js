/*
Number of Decimal Digits 7kyu

Determine the total number of digits in the integer (n>=0) 
given as input to the function. For example, 9 is a single digit, 
66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.

This kata is giving us a single integer as input, and asking us to return a single
integer on output. We are asked to return the length of our input integer.

Since we cant use the .length on a Number object in Javascript we can convert
the number to a string and use the .length property on that.
*/

function digits(n) {
    return (n + "").length;
  }