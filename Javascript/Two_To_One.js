/*
Two to One 7kyu
Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

We are given two different parameters, both consist of a single string of letters. 

We must return a single string that consist of only the letters that are included in the two parameter strings.
But no letters can appear more than once.

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

We can use the filter method on an array to remove any duplicates for this function. But first we must 
concatenate the two strings, and sort them with the .sort() method. After that we can use a 
filter function to remove duplicates, reconvert the array back to a string, and return the string
*/

function longest(s1, s2) {
    return (s1 + s2).split('').filter((item, pos, self) => self.indexOf(item) == pos).sort().join('')
  }