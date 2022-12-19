/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

For this question its giving us an array filled with three integers, we must return
the index of the integer that lies between the two numbers. 
([2, 3, 1]) => 0
([5, 10, 14]) => 1

To accomplish this we can first create a sorted "copy" of the input array and 
secondly we can return the index using indexof method on the initial input array.

*/




function gimme (triplet) {
  let sorted = triplet.slice();
  sorted.sort((a, b) => a - b);
  return triplet.indexOf(sorted[1])
}