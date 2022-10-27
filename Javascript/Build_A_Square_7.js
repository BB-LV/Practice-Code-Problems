/*
Build A Square 7kyu

I will give you an integer. Give me back a shape that is as 
long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

We are given a single integer as input and asked to return a string of "+" in addition
to "\n" characters to create a cube. Our string's size will be determined by the 
input integer.

We can return our appropriate string with the .repeat() method and than use .trim() at the end
    to trim off the extra \n from our repeat.

*/

const generateShape = (integer) => ('+'.repeat(integer) + '\n').repeat(integer).trim()