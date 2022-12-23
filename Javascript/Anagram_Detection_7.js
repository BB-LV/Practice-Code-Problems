/*
Anagram Detection 7kyu
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

This Kata is giving us two input variables and asking us to return a boolean true/false
representing if the two input variables are 'anagrams' of each other.
The two input variables will both be strings of unknown length.
We can first reset each input variable so its easier to work with, 
by using toLowerCase() method, split() method, and sort() method, we can
reorganize each input variable so it is comparable with a === comparison. 


**In order to test for an Anagram we just need to rearrange the letters alphabetically (.sort())
    if the two words have the same amount of each letter, they are an anagram!**


Finally we can use an if/else comparison to compare the two sorted variables and 
return the boolean statement accordingly.

*/

var isAnagram = function(test, original) {
    test = test.toLowerCase().split('').sort();
    original = original.toLowerCase().split('').sort();
    if(test.join('') === original.join('')){
      return true;
    }else{
      return false;
    }
  };