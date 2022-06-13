/*
Stop gninnipS My sdroW 6kyu

Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
*/

/* (P.R.E.P)
    P = We will have one parameter. It will be a string. It can have one or multiple words seperated with a space.

    R = We must return one string. The input string, but if any words are 5 letters long OR more we must 
        reverse the order of the indexes of that word. ie. fellow / wollef. 

    E = 
    spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
    spinWords( "This is a test") => returns "This is a test" 
    spinWords( "This is another test" )=> returns "This is rehtona test"

    P = we can take the input string and convert it into an array, than we must convert each index of 
        the array, into a sub array(so each word is its own array, this is done to use the .reverse() method later). 
        Once we have done this we can go through the array with a for loop, map function, or forEach() function 
        and use an if/else statement on each index. If the index.length is 5 or more than we can use the .reverse()
        method on that individual index. Finally we can return the converted string with a .flat() method and .join() methods.
*/

// Answer

function spinWords(string){
    string = string.split(' ');
    for(let i = 0; i < string.length; i++){
      string[i] = string[i].split('');
      if(string[i].length >= 5){
        string[i] = string[i].reverse();
      }
    }
    for(let a = 0; a < string.length; a++){
      string[a] = string[a].join('');
    }
    return string.join(' ');
}

// After Reviewing The Problem I found a simpler/cleaner version for this using the map method instead of for loops

function spinWords(words){
    return words.split(' ').map(w => w.length < 5 ? w : w.split('').reverse().join('')).join(' ');
  }