/*
Triangular Treasure 7kyu

Triangular numbers are so called because of the equilateral triangular shape 
that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for 
out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0


This kata is giving us a single integer as input, and asking us to return a single integer.
We are asked to return the next highest "triangular number" that is higher than our input
integer. 

In order to do this we can first test if a number is valid or not (and return 0  if not)
and than we can run the formula for a triangular number, n*(n + 1) / 2
*/

function triangular( n ) {
    if(n < 1){
      return 0;
    }else{
      return (n * (n + 1)) / 2
    }
  }