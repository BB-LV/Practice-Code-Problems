/*
Make A Function That Does Arithmetic 7kyu

Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements!

This question is giving us two integers and a string as inputs and asking us
to interpret the string as either addition, subtraction, div, multiplication,
and run the arithmetic of the string on the two input numbers in order.

In order to do this I want to practice using a switch for the if/else statements
and I'll return the appropriate integer with the interpreted string.

*/

function arithmetic(a, b, operator){
    switch(operator) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
    }
  }