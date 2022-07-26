/*
Convert a Number to A String 8kyu

We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?
*/

/* (P.R.E.P)
    P = one parameter, an integer.  

    R = return one string. The parameter converted to a string. 

    E = 
        123  --> "123"
        999  --> "999"
        -100 --> "-100"

    P = There's multiple methods to convert a number to a string. I will answer this question with a few examples
        such as the String() object, Concatenating the string to the number, as well as using a template literal.   
*/

// Answer

function numberToString(num) {
    return num + "";
  }

const numberToString = num => num + "";

function numberToString(num) {
    return `${num}`;
  };

const numberToString = num => `${num}`;

const numberToString = num => String(num);