/*
Sum Without Highest And Lowest Number 8kyu

Sum all the numbers of a given array ( cq. list ), except the highest and the 
lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, 
even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, 
or the given array is an empty list or a list with only 1 element, return 0

This kata is giving us an array of integers as input. We are asked to return a single
integer as output, representing the entire array summed together but without the 
highest valued element, or the lowest valued element. If the array is null or empty we
are asked to return 0.

We can first check to see if the array is valid and return 0 if not, then we can use
.sort() method to spot the highest and lowest numbers, remove them with .pop() and .shift()
methods and then finally return the trimmed array with the reduce method().
*/

function sumArray(array) {
    if(array == null || array.length < 3 ){
      return 0;
    }
    array = array.sort((a, b) => a - b);
    array.pop()
    array.shift()
    return array.reduce((x, y) => x + y)
  }