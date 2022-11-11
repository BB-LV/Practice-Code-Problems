/*
Spacify 7kyu

Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"

This kata is giving us a string as an argument and asking us to return a string as output.
The string we return must add a space " " between each element in the inital input string.
We can use the .split() method to convert the input to an array, and than use the .join(" ")
method which will convert the array back into a string, but we can add elements between 
the elements of the created string.

*/

// function spacify(str) {
//   return str.split('').join(' ');
// }

const spacify = str => str.split('').join(' ');