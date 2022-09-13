/*
Printing Array elements with Comma delimiters 8kyu

Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
*/

/* (P.R.E.P)
    P = We are given a single array as a parameter.

    R = We must return a string with the array elements seperated by a comma (no-space)

    E = ["h","o","l","a"] // "h,o,l,a"

    P = we can use the .join() method with no space or comma's ('' || "") used as arguments.
*/

// Answer

function printArray(array){
    return array.join()
  }

// Reduced
const printArray = a => a.join();

