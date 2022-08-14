/*
Abbreviate A Two Word Name 8kyu

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:
*/

/* (P.R.E.P)
    P = we are given one parameter. It is a string with two words seperated by a space

    R = we must return one string, with a '.' in between the first letters of each word from the parameter

    E = Sam Harris => S.H
        patrick feeney => P.F

    P = we can start by splitting the string into an array using the split() method. After that we can return 
        the two first letters of the string using charAt() method and addition operands. 
        ie. array[1].charAt(0) + . + array[2].charAt(0)
*/

// Answer

function abbrevName(name){
    name = name.split(' ');
    return (name[0].charAt(0) + '.' + name[1].charAt(0)).toUpperCase();
}

const abbrevName = name => {
    name = name.split(' ');
    return (name[0].charAt(0) + '.' + name[1].charAt(0)).toUpperCase();
}