/*
Speed Code 2 Array Madness 8kyu

Given two integer arrays a, b, both of length >= 1, 
create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
*/

/* (P.R.E.P)
    P = We are given two parameters. Both are arrays filled with at least one or more integers.    

    R = We must return a Boolean Statement. True/False. Representing if the sum of the squares of each number in the first parameter is STRICTLY GREATER THAN
        the sum of the cubes in the second input array. 

    E = arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

    P = We can use a reduce function on each input array to compare which array is greater than the other and return the boolean statement accordingly.
*/

// Answer

// function arrayMadness(a, b) {
//   let holder1 = a.reduce((x, y) => x + y**2, 0);
//   let holder2 = b.reduce((x, y) => x + y**3, 0);
//   if(holder1 > holder2){
//     return true;
//   }else{
//     return false;
//   }
// }

const arrayMadness = (a, b) => a.reduce((x, y) => x + y**2, 0) > b.reduce((x, y) => x + y**3, 0) ? true : false;