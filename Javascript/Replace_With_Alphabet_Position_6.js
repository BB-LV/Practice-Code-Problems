/*
Replace With Alphabet Position 6kyu

Welcome.

In this kata you are required to, given a string, replace every 
letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

This kata is giving us a string of letters as input and asking us to return a string of nubmers.
The numbers we return represent the number in the order of the alphabet each letter of the
input string.

We can make use of the .charCodeAt() method in javascript that assigns each input
letter a number. With this number we can push to a holding variable the appropriate number that
represents the input letters order in the alphabet, (a = 1, b/2, c/3, etc...)

First we just have to set up a holding variable and our input text. We can use
.toLowerCase() and than split it into an array. Next we can use two for loops, the first
will loop through each word in our input array, and the next will itterate through each
letter in the word. 
Third we can use a comparison to add the appropriate number to our holding variable if 
the individual letter is valid.
Finally we can return our holding variable with the .join() method.

*/

function alphabetPosition(text) {
    text = text.toLowerCase().split(' ');
    let answer = [];
    for(let i = 0; i < text.length; i++){
      for(let j = 0; j <= text[i].length; j++){
        if(text[i].charCodeAt(j) >= 97 && text[i].charCodeAt(j) <= 122){
          answer.push(text[i].charCodeAt(j) - 96)
        }
      }
    }
    return answer.join(' ');
  }
  

