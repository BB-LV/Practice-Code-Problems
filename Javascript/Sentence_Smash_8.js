/*
Sentence Smash 8kyu

Write a function that takes an array of words and smashes them together 
into a sentence and returns the sentence. You can ignore any need to sanitize 
words or add punctuation, but you should add spaces between each word. Be careful, 
there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

This kata is giving us an array filled with strings and asking us to return a single string,
consisting of all of the strings in our input, seperated by a space.

In order to accomplish this we can use the .join() method. If we include "" quotation marks
inside of it with a space, it will add a space in between each element.

*/

function smash (words) {
    return words.join(' ')
 };