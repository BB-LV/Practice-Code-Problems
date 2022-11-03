/*
Halving Sum 7kyu

Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47

This kata is giving us an integer as input and asking us to return an integer as output.
The integer we must return is an accumulation of the sum of our input integer plus our integer / 2.
until our halve is down to 0, than return all the halfs summed together.
*/

function halvingSum(n) {
    let totalSum = [n];
    for(let i = n; i > 0; i = Math.floor(i/2)){
      totalSum.push(Math.floor(i/2))
    }
    return totalSum.reduce((a, b) => a + b)
  }
  