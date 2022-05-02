/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.
*/

/* Strategy
    Split the string into an array, and use a == comparison for the arrays zero index.
*/

const areYouPlayingBanjo = name => {
    name = name.split('');
    if(name[0] == 'r' || name[0] == 'R'){
      return name.join('') + ' plays banjo'
    }else{
      return name.join('') + ' does not play banjo'
    }
  }