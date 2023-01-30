/*
Simple Remove Duplicates 7kyu

Remove the duplicates from a list of integers, keeping the last ( rightmost ) 
occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!

This kata is giving us an array as input, this array is filled with integers. We are asked
to return an array that is filled with only one instance of each number from our input array.


For us to do this we can settup a new array and filter out duplicates from our array using the filter method.
Once we have done that we can loop through our input array and use the splice method to splice in 
the filtered out components of the filtered array, starting at index 1.
*/

function solve(arr) {
    let newArray = arr.slice().filter((n, i) => arr.indexOf(n) !== i)
    for(let i = 0; i< newArray.length; i++){
      arr.splice(arr.indexOf(newArray[i]), 1)
    }
    return arr
  }
