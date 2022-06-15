/*
Invert Values 8kyu

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
*/

/* (P.R.E.P)
    P = we are given one array as a parameter. It is filled with an unknown number of positive and negative integers

    R = we must return one array, with each index getting transformed into either the positive or negative version of itself, whichever is opposite.

    E = 
        invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
        invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
        invert([]) == []

    P = 
        we can also use a map method or for loop and return either iteration tool by multiplying each index by -1
*/
// Answer

function invert(array) {
    return array.map(x => x * -1)
}

const invert = array => array.map(x => x * -1);