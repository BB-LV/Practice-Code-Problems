/*
Descending Order 7kyu
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

/* Strategy
    I will receive a number as an input and the goal is to rearrange the number with the highest values closest to the zero index.
    Using the sort method is the best option I believe but I will need to convert the number to an array to make that happen. I will 
        use the toString() and split() methods to accomplish the conversion.
*/

/* First attempt

function descendingOrder(n){
    n = n.toString().split('')
    n = n.sort((a, b) => b - a);
    return Number(n.join(''))
  }

*/

/* I solved the problem but the code needs to be cleaned and simplified using an arrow
  function and condensing the redundant code.
*/

// Second attempt

const descendingOrder = n => Number(n.toString().split('').sort((a,b) => b - a).join(''));

  