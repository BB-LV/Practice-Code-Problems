/*
Wilson Primes 8kyu

Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/

/* (P.R.E.P)
    P = we have one parameter, a prime number

    R = we must return a boolean statement informing if the parameter is plugged into the below equation, returns a whole number.
        ((P-1)! + 1) / (P * P)

    E = 
        assert.strictEqual(amIWilson(5), true)  
        assert.strictEqual(amIWilson(9), false)
        assert.strictEqual(amIWilson(6), false)

    P = we can use a simple if/else statement where if the parameter 'plugged' into the above equation returns a whole number than we can return true / false
*/

// Answer
function amIWilson(p){
    function factorial(n){
      return n <=1 ? 1 : n * factorial(n-1);
    }
    let answer = (factorial(p-1) + 1) / (p*p)
    if(answer % 1 !== 0){
      return false;
    }else{
      return true;
    }
  }

// using the above answer uses up unnecessary memory, instead we can use the below function to create an array and reduce it for the factorial, than complete the 
//  provided function and check if its a wilson prime by comparing it to the value 1. Wilson primes will solve to a 1 when run through the equation.

function amIWilson(p){
    return (Array.from({length: p - 1},(_,index) => index + 1).reduce((prev,curr) => prev * curr, 1) + 1) / (p * p) % 1 == 0;
  }