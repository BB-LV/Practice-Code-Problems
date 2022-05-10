/*
Reverse Words 7kyu

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

Fundamentals
Strings
*/

/* Strategy:
    We can utilize the .reverse() method on an array to solve this problem.
    First step is to split the string into an array of words, then we can split
    each word into its own array using a for loop. We can than use the .reverse()
    method on each 'word array' to reverse the word. Finally we join the nested
    arrays and return the result.
*/

function reverseWords(str) {
    str = str.split(' ')
    for(let i = 0; i < str.length; i++){
      str[i] = str[i].split('').reverse().join('');
    }
    return str.join(' ');
  }