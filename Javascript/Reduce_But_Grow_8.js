/*
Beginner - Reduce But Grow 8kyu

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

This kata is giving us an array of integers and asking us to return a single integer
representing the entire input array multiplied together (in order (order of operations takes care of that anyway))



*/

function grow(x){
    return x.reduce((a, b) => a * b)
  }