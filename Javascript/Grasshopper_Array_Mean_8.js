/*
Grasshopper Array Mean 8kyu

Find the mean (average) of a list of numbers in an array.
*/

/* (P.R.E.P)
    P = We are given a single array as a parameter. Populated with Integers.

    R = We must return a single integer. Representing the average of all of the integers in the input array

    E = 
        Test.assertEquals(findAverage([1]), 1)
        Test.assertEquals(findAverage([1, 3, 5, 7]), 4)

    P = We can reduce the input array with a reducer function and then return that answer, divided by the .length of the input array.
*/

// Answer

var findAverage = function (nums) {
    return nums.reduce((x, y) => x + y) / nums.length
  }

// Reduced

const findAverage = nums => nums.reduce((x, y) => x + y) / nums.length