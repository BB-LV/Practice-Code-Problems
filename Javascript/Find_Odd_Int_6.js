/*
    Find The Odd Integer 6kyu
    Given an array of integers, find the one that appears an odd number of times.

    There will always be only one integer that appears an odd number of times.

    Examples
    [7] should return 7, because it occurs 1 time (which is odd).
    [0] should return 0, because it occurs 1 time (which is odd).
    [1,1,2] should return 2, because it occurs 1 time (which is odd).
    [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
    [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

    We can use the fact that "There will always be only one integer that appears an odd number of times" as a guideline for this problem. If there's an integer that
    appears an odd number of times we can stop our function there and return that integer. 
    To solve this we can use a for loop inside of a for loop, and we are just testing to see if an integer appears an odd number of times. We must use a 'counter' variable
    to keep track of how many times a variable appears, and we must reset that counter variable for each integer in the first loop.

*/

function findOdd(i) {
    for(let a = 0; a < i.length; a++){
      let numOfTimes = 0;
      for(let b = 0; b < i.length; b++){
        if(i[a] === i[b]){
          numOfTimes = numOfTimes + 1;
        }
      }
      if(numOfTimes % 2 !== 0){
        return i[a];
      }
    }
  }