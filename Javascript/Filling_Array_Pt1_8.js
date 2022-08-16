/*
Filling of an Array Part 1 8kyu

We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.
Note: The parameter is optional. So you have to give it a default value.
*/

/* (P.R.E.P)
    P = We are given either ZERO arguments or a single integer as an argument. 

    R = If given ZERO arguments, than we must return an empty array. If given an integer as an argument, 
            we must return an array filled with every number less than the input integer.

    E = arr(5) // => [0,1,2,3,4]

    P = First we can check to see if we are given ZERO arguments in order to return a blank array, than we can use the Array.from() constructor to return the specified array.
*/

// Answer

const arr = N => !N ? [] : Array.from({length: N}, (v, i) => i);