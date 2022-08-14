/*
Jaden Casing Strings 7kyu

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
*/

/* (P.R.E.P)
    P = We are given one parameter. It is a string. But we are also working with a prototype

    R = We must return one string. The input string with the first letter of each word capitalized

    E = 
        Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
        Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

    P = we can use the split() method  to convert the input string to an array and than use the map() method to 
        capitalize the first letter of each word, with the slice() function to keep the rest of the word undercased.
        finally we can use the .join() method to convert it all back to a string. Since we are working with a prototype
        we will use the 'this' operand to target our input string.
*/

// Answer

String.prototype.toJadenCase = function () {
    return this.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
  };