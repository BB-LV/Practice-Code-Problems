/*
Is The String Uppercase 8kyu

Create a method to see whether the string is ALL CAPS.
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = We are given a prototype string function 

    Returns = (where to return the answer to, data type/s of answer, how many answers to return)
    Returns = we need to return a boolean statement identifying if any letters in the input string are capitalized. true for yes and false for no.

    Examples = 
                String.prototype.isUpperCase = function() {
                  // pseudocode
                }

    Pseudo-Code = we can use to this operator to access the prototype. secondly we can run a return statement to a == operator to compare this to this.toUpperCase()
*/

// How to Clean Up

// Final Answer

String.prototype.isUpperCase = function() {
    return this == this.toUpperCase();
  }