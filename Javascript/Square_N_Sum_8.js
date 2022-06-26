/*
Square(n) Sum 8kyu

Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/

/* (P.R.E.P)
    P = we are given one array, with various amounts of positive integers inside them

    R = we must return one single integer that represents each index in the parameter array squared, and then added together.

    E = 
            assert.strictEqual(squareSum([1,2]), 5);
            assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
            assert.strictEqual(squareSum([]), 0);
    P = we can use a for loop to go through each index and square the index, than we can use the reduce() method to get our final answer
*/

// Answer

/*
function squareSum(numbers){
    for(let i = 0; i < numbers.length; i++){
      numbers[i] = numbers[i]**2;
    }
    let answer = numbers.reduce((x, y) => x + y, 0);
    return answer;
  }
*/

// Or we can use a map function instead of a for loop


  function squareSum(numbers){
    return numbers.map(x => x * x).reduce((a, b) => a + b, 0);
  }