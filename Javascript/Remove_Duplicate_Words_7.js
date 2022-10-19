/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

This kata gives us a string filled with various words. We are asked to return a single string
that is filled with all of the input strings words, but only one of each word.

In order to achieve this we can use a Set. When creating a Set, javascript will remove
duplicate entries. First we can make a new set from the input string and 
convert it into an array. Secondly we can return the created set as an array with the .join() method.



*/


function removeDuplicateWords (s) {
  const answer = new Set(s.split(' '));
  return Array.from(answer).join(' ');
}
