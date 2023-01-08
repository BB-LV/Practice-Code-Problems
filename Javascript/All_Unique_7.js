/*
All Unique

Write a program to determine if a string contains only unique characters. 
Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. 
Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

This kata is giving us a string as input and asking us to return a boolean true/false
value representing if there's any characters in our input string that appear more than
once. 

We can do this by using a for loop to loop through the input string. Inside the 
for loop we can use a conditional paired with the .includes() method to compare
if our input string has more than one instance of our currect index in our string.
We can return false if that conditional happens or we can return true later in the function.
*/

function hasUniqueChars(str){
    for(let i = 0; i < str.length; i++){
      if(str.includes(str[i], i + 1)){
         return false;
        }
    }
    return true;
  }