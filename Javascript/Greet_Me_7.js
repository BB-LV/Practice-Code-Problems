/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!

*/



/* Strategy: Fairly simple question, take a string and capitalize the first letter in the name and add's 'Hello '
    to the string. I can use the charAt() and slice() methods to work with the string in place.
*/
/*
var greet = function(name) {
    let answerStr = 'Hello '
    let fixedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + '!';
    return answerStr + fixedName;
  };
*/

// I can clean up the above code a little bit and reduce using an arrow function.

var greet = (name) =>  'Hello ' + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + '!';