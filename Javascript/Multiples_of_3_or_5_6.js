/*
Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

*/

/* Strategy: 
1. Create an array with array.from method with a length attribute of the input number
2. Create if/else statement: if input number is <= zero, than we return 0 : else run a filter function on this new array, and filter every number with a % 3 or % 5 == 0
3. Now run a reduce() method on this filtered array we have created. This will give you a final answer

*/

/* First Attempt

function solution(number){
    let counterArray = Array.from({length: number}, (x, y) => y);
    if(number <= 0){
      return 0;
    }else{
      counterArray = counterArray.filter(z => z % 3 == 0 || z % 5 == 0);
      return counterArray.reduce((a, b) => a + b);
    }
  }
*/
// I wanted to clean the first attempt up. I reduced the function to one line with an arrow function, same concept. new array, filter, reduce.

// Second Attempt

  const solution = number => number > 0 ? Array.from({length: number}, (x, y) => y).filter(z => z % 3 == 0 || z % 5 == 0).reduce((a, b) => a + b) : 0;