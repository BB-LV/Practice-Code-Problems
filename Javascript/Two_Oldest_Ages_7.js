/*
Two Oldes Ages 7kyu

The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]

This cata is giving us a single array as input, this array is filled with an unknown quantity of 
integers of unknown values. We are asked to return a single array with two integers inside of it, 
the two integers inside would be the highest valued integers from the input array.

We can accomplish this by sorting the input array and returning the last two indices of the
sorted array, in the form of an array. 
*/

// function twoOldestAges(ages){
//     ages.sort((a, b) => a - b);
//     return ages.splice(-2, 2)
// }


const twoOldestAges = ages => ages.sort((a, b) => a - b).splice(-2, 2);
