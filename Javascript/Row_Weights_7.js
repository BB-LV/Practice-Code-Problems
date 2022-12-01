/*
Row Weights 7kyu

Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, 
the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), 
return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.

Examples:
    assert.deepEqual(rowWeights([80]), [80,0]);
    assert.deepEqual(rowWeights([100,50]), [100,50]);
    assert.deepEqual(rowWeights([50,60,70,80]), [120,140]);
    assert.deepEqual(rowWeights([13,27,49]), [62,27]);
    assert.deepEqual(rowWeights([70,58,75,34,91]), [236,92]);
    assert.deepEqual(rowWeights([29,83,67,53,19,28,96]), [211,164]);
    assert.deepEqual(rowWeights([0]), [0,0]);
    assert.deepEqual(rowWeights([100,51,50,100]), [150,151]);
    assert.deepEqual(rowWeights([39,84,74,18,59,72,35,61]), [207,235]);
    assert.deepEqual(rowWeights([0,1,0]), [0,1]);

This kata is giving us one single array filled with integers as an input. We are asked to
return a single array with only two numbers inside of it. The first number in our returned
array will represent all the odd index's of the input array added together, the second
number will represent all of the even index's of the input array added together. 

In order to achieve this we can start with two holding variables and run a for loop through
our input array. for each loop we can compare if our loop number is even or odd and
add the appropriate number to the appropriate variables we created. Finally we can return
that array.



*/

function rowWeights(array){
    let row1weight = 0;
    let row2weight = 0;
    for(let i = 0; i < array.length; i++){
      if( i % 2 === 0){
        row1weight += array[i];
      }else{
        row2weight += array[i];
      }
    }
    return [row1weight, row2weight]
  }