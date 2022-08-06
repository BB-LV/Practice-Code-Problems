/*
Basic Mathematical Operations

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
*/

/* (P.R.E.P)
    P = we are given 3 parameters. A 'operation' and two values. The values will be numbers and the operation will 
        be either + - * /  

    R = we must return one numbers. It represents the two values using the operands

    E = 
        ('+', 4, 7) --> 11
        ('-', 15, 18) --> -3
        ('*', 5, 5) --> 25
        ('/', 49, 7) --> 7
    P = we can use an if/elseif/else statement for all 4 values to complete the solution.
*/

// Answer

function basicOp(operation, value1, value2){
    if(operation === '+'){
      return value1 + value2;
    }else if(operation === '-'){
      return value1 - value2;
    }else if(operation === '*'){
      return value1 * value2;
    }else{
      return value1 / value2;
    }
  }

  // We can simplify the if statement without if/else as well by using the eval() method.
  function basicOp(operation, value1, value2) {
    return eval(value1+operation+value2);
  }