/*
Sum of Triangular Numbers 7kyu

Your task is to return the sum of Triangular Numbers up-to-and-including 
the nth Triangular Number.

Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) 
obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21]
e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

Triangular Numbers cannot be negative so return 0 if a negative number is given.

This kata is giving us a single integer as input and asking us to return a single
integer as output. The integer we return represents a cummulitive sum of each
'triangular number' that is less than our input integer. 

First we can determine if the input number is a valid input with a comparison to 0,
Second we can set a holding variable and use a for loop to add each triangular number to our
    holding variable. 
Finally we can return our holding variable.

*/

function sumTriangularNumbers(n) {
    if(n <= 0){
      return 0;
    }else{
      let answer = 0;
      for(let i = 1; i <= n; i++){
        answer += i * (i + 1) / 2
      }
      return answer;
    }
  }