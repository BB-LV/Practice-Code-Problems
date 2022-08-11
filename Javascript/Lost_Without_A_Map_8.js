/*
Lost Without A Map 8kyu

Given an array of integers, return a new array with each value doubled.
*/

/* (P.R.E.P)
    P = we are given one array, filled with an unknown number of integers.

    R = we must return the input array with each index doubled. 

    E = 
        [1, 2, 3] --> [2, 4, 6]

    P = we will return the answer using a map() method to multiply each index by 2
*/

// Answer

function maps(x){
    return x.map(i => i * 2);
}

const maps = x => x.map(i => i * 2);