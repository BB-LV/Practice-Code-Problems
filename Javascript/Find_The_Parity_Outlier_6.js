/*
Find The Parity Outlier 6kyu

You are given an array (which will have a length of at least 3, 
but could be very large) containing integers. The array is 
either entirely comprised of odd integers or entirely comprised 
of even integers except for a single integer N. Write a method 
that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

This kata is giving us a single array filled with integers as input. We are asked to 
return a single integer/element inside of the array. In our input array all of our
elements will be either even or odd integers except for one element. We are asked
to return the element that is the single instance of an even or odd number.

We can set two different variables up to represent even and odd numbers and use the
filter() method on the input array to set those variables. Next we can return whichever
variable has only one element in it.

*/

function findOutlier(integers){
    let even = integers.filter(x => x % 2 === 0);
    let odd = integers.filter(y => y % 2 !== 0);
    return even.length === 1 ? even[0] : odd [0]
  }