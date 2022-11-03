/*
Sum Of Cubes 7kyu

Write a function that takes a positive integer n, 
sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

This kata is giving us an integer as input, and asking us to return an integer as output.
The integer we are asked to return is the sum of each number less than our input number, but cubed.

We can use a holding array to create all the values we want to sum together. We can
also use a for loop to build that holding array's values and than finally we can
return our holding array summed together with the .reduce() property.
*/

function sumCubes(n){
    let holdingArray = [];
    for(let i = 0; i <= n; i++){
      holdingArray.push(i**3)
    }
    return holdingArray.reduce((x, y) => x + y)
  }