/*
No Oddities Here 7kyu

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the 
order they are given.

This kata is giving us an array as input, this array will be filled with integers.
We are asked to return an array, filled with only the even valued elements inside of the 
input array.
We can achieve this by setting a holding variable and using a for loop to loop through the 
input array and if the current index of the input array is even, we can use .push() 
to add it to our holding variable.
*/

function noOdds( values ){
    let answers = [];
    for(let i = 0; i < values.length; i++){
      if(values[i] % 2 == 0){
        answers.push(values[i]);
      }
    }
    return answers;
  }
