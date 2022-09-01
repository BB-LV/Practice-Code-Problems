/*
Sort Array by String Length 7kyu

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
*/

/* (P.R.E.P)
    P = we are given one array as a parameter. This array is filled with strings of different lengths (2 indexes cant be same length for this problem). 
            unknown number of indexes inside the array.

    R = we must return one array. Filled with the same indexes as the our input parameter, just sorted by length. Shortest string at index 0 and longest
        string at the last index  (shortest to longest). 

    E = 
    For example, if this array were passed as an argument:

        ["Telescopes", "Glasses", "Eyes", "Monocles"]

    Your function would return the following array:

        ["Eyes", "Glasses", "Monocles", "Telescopes"]

    P = we can use the .sort() function on our input array. Our compare function for .sort() will involve .sort((a, b) => a.length - b.length) using the length 
            properties of what we pass into it(our sort function). we can simpily return our input array using this function.
*/

// Answer

// function sortByLength (array) {
//     return array.sort((a, b) => a.length - b.length)
//   };

const sortByLength = array => array.sort((a, b) => a.length - b.length);