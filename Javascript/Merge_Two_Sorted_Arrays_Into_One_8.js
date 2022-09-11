/*
Merge Two Sorted Arrays Into One 8kyu

You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
*/

/* (P.R.E.P)
    P = We are given two parameters. Each parameter is an array filled with an unknown quantity of integers. Unknown if positive or negative.

    R = We must return one array. Populated with all of the integers of the two input arrays, sorted in lowest - highest order, with duplicate numbers removed.

    E = 
    * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   
    * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

    P = We can use the filter method coupled with the concatinate and sort methods to return the specified array. 
*/

// Answer

function mergeArrays(arr1, arr2) {
  return arr1
    .filter((item) => !arr2.includes(item))
    .concat(arr2)
    .sort((a, b) => a - b)
}

// Reduced

const mergeArrays = (arr1, arr2) => arr1.filter(a => !arr2.includes(a)).concat(arr2).sort((x, y) => x - y);