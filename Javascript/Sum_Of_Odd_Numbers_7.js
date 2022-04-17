/*
Sum of Odd Numbers 7kyu
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

/* Strategy
    This problem is presented as a triangular pyramid where we must add all the values of the 'nth' row where n'th is the input of our function.
        1. I broke this problem down and mapped out the input numbers 1-10 on physical paper.
        2. There was a clear relationship of the input number and expected answer for each possible input I mapped out.
        3. The clear relationship was the expected answer was the input cubed. 
    Takeaway - this problem presents a complex problem that requires a simple solution. Mapping out possible input/ expected outputs can help 
                    'visualize' the approach needed to solve the problem.

*/

// Approach 
// Cube the input variable using Math.pow()

const rowSumOddNumbers = n => Math.pow(n, 3);