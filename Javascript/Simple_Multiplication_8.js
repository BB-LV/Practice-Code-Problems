/*
Simple Multiplication 8kyu

This kata is about multiplying a given number by eight if it is an even 
number and by nine otherwise.

This kata is giving us a single number as input and asking us to return a single
number back. If our input number is even we must return it multiplied by 8, if odd
multiplied by 9.

We can use the remainder (%) symbol on our input number and compare even vs odd.
Next we can return our input number multiplied by the appropriate number.


*/

function simpleMultiplication(number) {
    if(number % 2 === 0){
      return number * 8;
    }else{
      return number * 9;
    }
}