/*
Remove String Spaces 8kyu

Simple, remove the spaces from the string, then return the resultant string.
*/

/* (P.R.E.P)
    P = we are given one parameter. It is a string.

    R = we return one string, with zero spaces inside of it.

    E = "this is a string" would turn into "thisisastring"

    P = we can use the .split(' ') method on the input string to convert it into an array while
            simultaneously removing the spaces from the input string, then we can use the .join('') method 
            to return it as a string.
*/

// Answer

const noSpace = x => x.split(' ').join('');