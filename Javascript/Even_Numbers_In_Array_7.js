/*
Even Numbers In An Array 7kyu

Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). 
The original array will be not empty and will contain at least "number" even numbers.
*/

/* (P.R.E.P)
    P = We are given two parameters, the first is an array filled with positive and negative integers. The second is a single positive integer.

    R = We must return one single array. Filled with the specified quantity(second parameter) of EVEN numbers, These numbers will
        be the last indices of the input array(first parameter).

    E = 
    ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
    ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
    ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

    P = First we can reverse the input array(first parameter). Then we can create a holding array variable that is empty. Third we will 
        use a for loop that runs until the holding arrays length is equal to the second parameter(specified quantity) and this look will 
        check to see if the index's value % 2 === 0 for an Even value. If it is, than we push that index to the holding array. 
        Finally we can return the holding array.
*/

// Answer

function evenNumbers(array, number) {
    let array1 = array.splice(0)
    let answer = [];
    for(let i = 0; i < array1.length; i++){
      if(array1[i] % 2 === 0){
        answer.push(array1[i])
      }
    }
    return answer.slice(answer.length - number)
  }