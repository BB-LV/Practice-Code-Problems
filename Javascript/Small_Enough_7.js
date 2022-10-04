/*
Small Enough 7kyu

You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

This kata is giving us two input variables and asking us to return a single boolean value.
The boolean value will represent if all of the integers in the first input variable,
are smaller than the second input variable (a single integer)

We can make use of the .every() method on the input array wich returns a boolean value directly.
*/

// function smallEnough(a, limit){
//     return a.every(x => x <= limit)
//   }

const smallEnough = (a, l) => a.every(x => x <= l);