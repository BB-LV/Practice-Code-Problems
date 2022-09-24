/*
Shortest Word 7kyu

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

We are given a single string filled with an unknown quantity of words. We must return the length of the shortest word.

    "bitcoin take over the world maybe who knows perhaps"), 3);
    "turns out random test cases are easier than writing out basic ones"), 3); 
    "Let's travel abroad shall we"), 2);


We can use .split and .sort to convert the string to an array and then sort that array by word length. Then return the first index in that array
*/


function findShort(s){
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length || 0;
  }