/*
Grasshopper => Summation 8kyu

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
*/

/* (P.R.E.P)
    P = our parameter will consist of one integer       

    R = we must return one integer consisting of every number less than our parameter, added together, (no negative numbers)

    E = 1 // 1     8 // 36

    P = we can use a counting variable and a for loop to just add to the counting variable for each loop. 
*/

// Answer

var summation = function (num) {
    let counter = 0;
    for(let i = 0; i <= num; i++){
      counter = counter + i;
    }
    return counter;
  }