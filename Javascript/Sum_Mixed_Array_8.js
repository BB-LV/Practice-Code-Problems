/*
Sum of A Mixed Array 8kyu

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

/* (P.R.E.P)
    P = We are given an array of integers and strings. The strings are strings of integers. Unknown quantity of integers / strings, and unknown if positive or negative.

    R = We must return one single integer. This integer represents the sum of all of integers and strings in the input array.

    E = 
        assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
        assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
        assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

    P = We can make use of the unary plus for this problem. By using a unary plus we can use a regular reduce function to return the reduced input array.
*/

// Answer

function sumMix(x){
    return x.reduce((a, b) => +a + +b, 0)
   }

// Reduced

const sumMix = x => x.reduce((a, b) => +a + +b, 0);