/*
Sum of Array Singles 7kyu

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

*/

/* (P.R.E.P)
    P = We are given a single array, filled with an unknown number of integers.

    R = We must return a single integer, representing the sum of each number that only occurs once.

    E = 
        Test.assertEquals(repeats([4,5,7,5,4,8]),15);
        Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
        Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
        Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
        Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);

    P = We can use the filter method to filter out just the numbers that appear once. and then reduce those two numbers.
        To filter the numbers out we can use indexOf compared to lastIndexOf
*/

// Answer

function repeats(arr){
    return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)).reduce((a, b) => a + b);
  };