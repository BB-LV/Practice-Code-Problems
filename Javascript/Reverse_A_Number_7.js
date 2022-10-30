/*
Reverse A Number 7kyu

Given a number, write a function to output its reverse digits. 
(e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should 
still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1

This kata is giving us a single integer as an input. It is asking us to return
a single integer as an output.
We are asked to reverse the order of the digits of our input integer, and keep the 
negative or positive aspect of the number.

First we will determine if the number is positive or negative and then we can 
return two different conditionals. 
These conditionals will convert the number to a string,
then convert it to an array (so we can use .reverse()),
then use .reverse(), 
then we can rejoin the array back into a string.
Finally we can use the Number() Constructor on the final result and convert the string
    into back into a number. We can multiply times -1 if needed on our return.

*/

function reverseNumber(n) {
    if(n >= 0){
      return Number((n + "").split('').reverse().join(''));
    }else{
      return Number(((n * -1) + "").split('').reverse().join('')) * -1;
    }
  }