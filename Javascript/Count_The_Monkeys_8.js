/*
Count The Monkeys 8kyu

You take your son to the forest to see the monkeys. 
ou know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), 
populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]

This kata is giving us a single integer as input, and asking us to return an array filled
with integers as output. Our array must contain each value less than our input integer, excluding 0.

We can use the Array.from() method which will create an array from an integer for us and
return the request array with a single method. 

Per MDN: 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
// Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]


*/

const monkeyCount = n => Array.from({length : n}, (v, i) => i + 1)