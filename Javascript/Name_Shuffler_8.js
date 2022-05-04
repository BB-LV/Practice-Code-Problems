/*
Name Shuffler

Write a function that returns a string in which first name is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
*/



/* Strategy
    This Kata was fairly simple. My approach was to split the string into an array of two words,
        use the reverse() method and than just join the array back together with a space 
        between the words.
*/



/* First Approach - (Can be simplified in an arrow function)


function nameShuffler(str){
    return str.split(' ').reverse().join(" ");
  }

*/


const nameShuffler = str => str.split(' ').reverse().join(" ")