/*

Find Multiples Of A Number 8kyu

In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.

*/

/* (P.R.E.P)
    P = there are two parameters. the first parameter is a positive integer (whole number), and the second parameter is a positive integer as well.

    R = we must return an array that contains each multiple of the first parameter (integer), that is less than the second parameter (limit)

    E = 
        Test.assertSimilar(findMultiples(5, 25), [5, 10, 15, 20, 25])
        Test.assertSimilar(findMultiples(1, 2), [1, 2])
        Test.assertSimilar(findMultiples(5, 7), [5])
        Test.assertSimilar(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
        Test.assertSimilar(findMultiples(11, 54), [11, 22, 33, 44])

    P = we can create an empty array and use it as a 'holding' array. than we can divide the limit by the integer (parameter 2 / parameter 1) and create another variable
            representing how many times our for loop will 'loop'. Then we create a for loop to multiply our integer (p1) by the for loop incrementor and use .push() to
            push that number to our holding array. Finally we can return the holding array.
*/

// Answer

function findMultiples(integer, limit) {
    const count = Math.floor(limit/integer);
    const answer = [];
    for(let i = 1; i <= count; i++){
      answer.push(integer*i)
    }
    return answer;
  }


  // Revised
  // instead of creating a count variable we can implement the for loop to stop when integer*i is <= our limit

  function findMultiples(int,limit){
    var array = [];
    for (i=1; int*i <= limit; i++) {
      array[i-1] = int*i;
    }
    return array;
  }