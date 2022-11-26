/*
Sorted? Yes? No? How? 7kyu

Complete the method which accepts an array of integers, 
and returns one of the following:

"yes, ascending" - 
if the numbers in the array are sorted in an ascending order
"yes, descending" - 
if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, 
and there will always be one correct answer.

This kata is giving us a single array filled with integers as an argument. We are asked
to return one of three different strings representing if the input array is sorted
in numberical value. 

In order to achieve this comparison we can use the .sort() method and compare/return the
strings and appropriate responses.

*/

function isSortedAndHow(array) {
    if(array.join('') === array.slice().sort((a, b) => a - b).join('')){
  //     console.log(array, array.sort((a, b) => a - b))
      return 'yes, ascending';
    }else if(array.join('') === array.slice().sort((c, d) => d - c).join('')){
      return 'yes, descending';
    }else{
      return 'no';
    }
  }