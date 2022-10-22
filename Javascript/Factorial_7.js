/*
Factorial 7kyu
Your task is to write function factorial.

For this kata we are given an integer and asked to return an integer. Our returned integer
represents our input 'factorialized'.

In order to do this we can set a conditional for an input of 0 or 1, and return 1 accordingly.
Secondly we can use a for loop to appropriatly factorialize our input integer. Finally
we can return our holding variable.
*/

function factorial(n){
    let answer = n;
    if(n === 1 || n === 0){
      return 1;
    }
    for(let i = n - 1; i >= 1; i--){
      answer = answer * i
    }
    return answer;
  }