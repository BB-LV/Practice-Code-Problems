/*
Sum of Differences in an Array 8kyu

Your task is to sum the differences between consecutive pairs in the array in descending order.
If the array is empty or the array has only one element the result should be 0
*/

/* (P.R.E.P)
    P = We are given a single array as a parameter. Populated with positive or negative integers.

    R = we must return one single integer. Representing each number in the array subtracting the index to the right of it, then added together.

    E = [2, 1, 10]  -->  9 // IE: Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

    P = First we can set a holding variable equal to 0. Then we can sort the array and use a for loop on the sorted array to just add the difference
        of the two indexes to the holding variable. Finally we can return the holding variable.
*/

// Answer

function sumOfDifferences(arr) {
    arr = arr.sort((x, y) => y - x)
    let sum = 0;
    for(let i = 0; i < arr.length - 1; i++){
      sum += arr[i] - arr[i + 1];
    }
    return sum;
  }