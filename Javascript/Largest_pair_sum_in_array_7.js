/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.

*/

/* Second Approach - After studying the problem at hand I decided since the instructions didnt relay that the input array had to be unaltered
    I could just manipulate the input array in place and return the values requested.

*/
const largestPairSum = numbers => numbers.sort((a, b) => a - b).pop() + numbers.pop();

/* First Approach - I used a holder array to copy the number and not alter it
    then sorted the copy'd array in the same line. Than I sliced the last two numbers off of the sorted copy of our function input, stored
    the two pieces of data in a predefined empty array, and returned that array with a reduce function.  
     This method is a little  redundant and can be cleaned up with a different approach. Instead of not altering the input number I can sort
     the array in place and either use the pop method to add the last two numbers from the input array.
    function largestPairSum (numbers) {
        let z = []
        let holderArr = numbers.slice().sort((a, b) => a - b)
        z = holderArr.slice(-2)
        return z.reduce((n, l) => n + l)
}

*/