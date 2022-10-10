/*
Calculate Average 8kyu

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.


This kata is giving us one array filled with integers as an input variable. We are 
asked to return a single integer representing the average of the all of the integers
in the array.


We can use the reduce() method and divide the reduced array by its length. 
Returning the answer.
*/

const find_average = array => array.length === 0 ? 0 : array.reduce((a, b) => a + b) / array.length;