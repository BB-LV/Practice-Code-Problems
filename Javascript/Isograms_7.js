/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function 
that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/


/* Third Approach -  Using a regular expressions. This Approach is going to take some more research. I will come back to this problem to solve 
    with RegExp.
*/



/* Second Approach - Researched Javascript Sets and used the approach of measuring the length properties or (size for Sets*). A Set does not have duplicates
    of values and attempting to add a duplicate value will result in the duplicate not being added (or dropped) from the Set object being created. Comparing 
    the number of unique elements (*size) in the Set and the length property of the initial word will let Javascript handle the problem in a different way.
*/


function isIsogram(str) {
    return str.length == new Set(str.toLowerCase()).size; // returns a T/F statement comparing if the number of unique elements in the new set is the same number as the string length
}  




/* First Approach - Decided to use a holding variable to copy, lowercase and split the str input into an array of individual letters.
    .includes is case-sensitive, meaning in order to use it I have to account for what im putting into the .includes is 'cased' correctly.
    The reason for the array is to use the for loop to easily itterate through each piece of the input string/array.
    Than I used a for loop to itterate through the piece of data, not including the itterative piece. If a match is found the loop is broken
    and the function returns that the string is not an Isogram. If the for loop completes with no matches, than the string is an Isogram.

function isIsogram(str){
  let Lcstr = str.slice().toLowerCase().split('');
  for(let i = 0; i < Lcstr.length; i++){
    if(Lcstr.includes(Lcstr[i], i+1)){
      return false;
    }
  }
  return true;
}
*/