/*
Sum of Arrays 8kyu

Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
*/

/* (P.R.E.P)
    P = Input is one single array. Filled with an unknown quantity of integers and decimals. Positive or Negative. We also must return 0 if our input is a blank array or 0.

    R = We must return one single number, which represents all of the numbers in the input array summed together. OR 0 if our input is 0 or a blank array.

    E = Input: [1, 5.2, 4, 0, -1]
        Output: 9.2

        Input: []
        Output: 0

        Input: [-2.398]
        Output: -2.398

    P = after we check to see if our input is not a blank array or 0, we can use the Array.reduce() method to calculate all of the numbers in the array, and return the result.
*/

// Answer

function sum (numbers) {
    if(numbers == 0 || numbers == []){
      return 0
    }else{
      return numbers.reduce((x, y) => x + y)
    }
  };
  
  // Reduced

const sum = numbers => numbers == 0 || numbers == [] ? 0 : numbers.reduce((x, y) => x + y);
