/*
Maximum Product 7kyu

Given an array of integers , Find the maximum product obtained from 
multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6

Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50

Explanation:
Max product obtained from multiplying 5 * 10  =  50 .

This kata is giving us a single array as input, filled with an unkown amount of 
various integers. We are asked to return a single integer, wich represents the highest
possible value of two indexes inside of our input array multiplied together. The two index's
multiplied together must be adjacent index's.

For this kata we can establish a holding variable of the first two index's of the input array.
Next we can use a for loop to loop through the holding variable and determine if the
current two index's of the loop are greater than the holding variable's two index's than we can
replace the holding variable with the current index.
Finally we can return the holding variables index's multiplied together.

*/

function adjacentElementsProduct(array) {
    let currentH = [array[0], array[1]];
    for(let i = 0; i < array.length; i++){
      if(array[i] * array[i + 1] >= currentH[0] * currentH[1]){
        currentH[0] = array[i];
        currentH[1] = array[i + 1];
      }
    }
    return currentH[0] * currentH[1];
  }