/*
Flatten and Sort an Array 7kyu

Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

/* (P.R.E.P)
    P = We are given a single array as a parameter. This array is filled with an unknown number of sub-arrays populated with positive integers.

    R = We must return one single array, populated with all of the integers of the input sub-arrays AND sorted from lowest to highest value. 

    E = 
        assert.deepEqual(flattenAndSort([]), []);
        assert.deepEqual(flattenAndSort([[], []]), []);
        assert.deepEqual(flattenAndSort([[], [1]]), [1]);
        assert.deepEqual(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        assert.deepEqual(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);

    P = We can make use of the .flat() and .sort() methods and return the appropriate array using them in tandem.
*/

// Answer

function flattenAndSort(array) {
    return array.flat().sort((x, y) => x - y);
  }

const flattenAndSort = array => array.flat().sort((x, y) => x - y);