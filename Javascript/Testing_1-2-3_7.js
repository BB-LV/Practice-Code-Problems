/*
Testing 1-2-3 7kyu

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

We are given a single array as input
we must return the input array with a numerical order attached to it as a string for each index.


We can use a map method on the input array to return each index in the array with the 
additional information (the numbers in front of each index) we want to store.
*/



const number = array => array.map((x, i) => `${i + 1}: ${x}`)