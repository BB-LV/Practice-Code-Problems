/*
Reversed Sequence 8kyu

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

This kata is givng us a single integer as input. It is asking us to return an 
array filled will numbers up to the input integer.

We can return an array using the Array.from() method directly.

*/

const reverseSeq = length => Array.from({length}, () => length--)