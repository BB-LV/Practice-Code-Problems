/*
The museum of incredible dull things

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
Task

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
Examples

* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

/* Strategy
    We are trying to remove the lowest value from an array without modifying the original array input. If duplicate values exist, than we remove the value with the lowest index.
    1. I will accomplish this by using the slice() method on the input array to create a copy of the input array to work with, and sorting this sliced method,
        I will than have identified the lowest value of the input array - in the first index of the sorted array.
    2. I can use the indexOf() method to identify the index of the lowest value in the input array
    3. The splice() method will allow me to return an array with the lowest value of the input array removed. ** Splice modifies the array its called on. This signifies that we must splice() a copy of the input array**
*/

// First Attempt
// I solved the problem at hand, but I want to clean the code up.

/*
function removeSmallest(numbers) {
  let inputHolder = numbers.slice();
  let inputSorter = numbers.slice().sort((x, y) => x-y);
  let c = numbers.findIndex(u => u == inputSorter[0]);
  let d = inputHolder.splice(c, 1);
  return inputHolder;
}
*/ 

// Second Attempt 
/* After studying the problem I decided to take a different approach and filter out the value of an indexOf() method on the input array.

function removeSmallest(numbers) {
    let inputHolder = numbers.slice();
    let inputSorter = numbers.slice().sort((x, y) => x-y);
    return numbers.filter((a, b) => b != numbers.indexOf(inputSorter[0]));
  }
*/

// Final Answer
// With the use of the Math.min property to identify the lowest value in the array As well as the use of arrow functions and the spread operator we can reduce the second attempt to one line of clean code.

const removeSmallest = numbers => numbers.filter((a, b) => b != numbers.indexOf(Math.min(...numbers)));



/*              THANKS FOR LOOKING! Have a nice day.
*/