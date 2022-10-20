/*
Alternate Capitalization 7kyu

Given a string, capitalize the letters that occupy even indexes and odd 
indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. 

The input will be a lowercase string with no spaces.

Good luck!

This kata is giving us a single string as an argument. This string will be 
in all lowercase letters. We are asked to return two strings, which match
the input string except every Even index'd letter should be capitalized, and for the 
second string the odd index'd letters should be capitalized. We are asked to return
these two strings inside an array.

In order to achieve this we can turn the input string into an array to use some
additional functions and functionality. Then we can create two holding variables
that will contain our answer strings. Next we can run a for loop that's step
counter is +2, and the loop runs for the length of the input string divided by 2.
for each step in the for loop we will add the appropriate capitalized letter to 
each of our holding variables. Finally we can
use .join('') to convert the holding variables into strings, and return them inside 
an array.

*/

function capitalize(s){
    s = s.split('');
    let a = [];
    let b = [];
    for(let i = 0; i < s.length; i++){
      if(i == 0 || i % 2 == 0){
        // Even itterations
        b.push(s[i])
        a.push(s[i].toUpperCase());
      }else{
        // Odd itterations
        a.push(s[i])
        b.push(s[i].toUpperCase());
      }
    }
    return [a.join(''), b.join('')]
  };