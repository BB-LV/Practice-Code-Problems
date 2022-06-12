/*
Find The Smallest Integer In The Array

Given an array of integers your solution should find the smallest integer.
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

/* (P.R.E.P)
    P = One array of integers, will have at least one index. 

    R = Return the Integer (within the parameter array) with the lowest value.

    E = 
        Given [34, 15, 88, 2] your solution will return 2
        Given [34, -345, -1, 100] your solution will return -345

    P = we can use Math.min() method and use the spread syntax to input the parameter array
*/

// Answer

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }