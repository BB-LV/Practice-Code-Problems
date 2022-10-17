/*
Jennys Secret Message 8kyu

Jenny has written a function that returns a greeting for a user. 
However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?

function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}

This kata is a syntactical error problem. It is asking us to fix the function above 
so that it outputs the correct response.

We can move line 2 to line 6 and fix the if statements {} brackets. 


*/

function greet(name){
    if(name === "Johnny"){
      return "Hello, my love!";
    }
    return "Hello, " + name + "!";
  }