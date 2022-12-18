/*
 Bit Counter 6kyu

     Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
    
    Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

    The question is asking us to 'count the bit's' in a binary number. Each '1' in the binary number represents a bit. So to 
    solve this problem we can create a variable that is the binary number of our input integer. Than we can convert that
    variable to an array and filter out all of the '0's' in our Array. Finally we can just return the length of our array 
    (the length is all of the 1's or 'bit's')
*/

var countBits = function(n) {
  let binary = n.toString(2);
  binary = binary.split('').filter(x => x == 1);
  return binary.length;
};