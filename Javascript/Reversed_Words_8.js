/*
Reversed Words 8kyu

Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> 
"battle no requires which that is victory greatest The"

This kata is giving us a single string as input and asking us to just reverse the order
of words.

With the appropriate use of .split(), .reverse(), and .join() methods we can split the input
string up, reverse it appropriatly, and return it with a join() method.

*/

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }