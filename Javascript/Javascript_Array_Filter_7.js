/*
Javascript Array Filter 7kyu

JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
*/

/* (P.R.E.P)
    P = We are given a single array filled with integers.

    R = We must return a single array with only Even integers. 

    E = getEvenNumbers([2,4,5,6]) // should == [2,4,6]

    P = We can use the remainder(%) operand to determine if each integer is even or not. We can return the input array with a .filter() method 
        used to determine if the number is even or odd with x % 2 === 0
*/

// Answer
function getEvenNumbers(numbersArray){
    return numbersArray.filter(x => x % 2 === 0)
  }
// Reduced
const getEvenNumbers = a => a.filter(x => x % 2 === 0);
