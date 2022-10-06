/*
Find The Capitals 7kyu

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

This kata is giving us a single string as an input variable and asking us to return
an array representing the index's of each capital letter in the input string.

First we can setup a blank array to  push the indices to, after that we can split the 
input string into an array to make it easier to work with,
thirdly we can run a for loop and compare each letter of the input string to an
uppercase version of itself, if its uppercase we can just push the itteration of the for loop
to the holding array.
finally we can return the holding array.

*/

var capitals = function (word) {
	let capitalIndexs = [];
  word = word.split('');
  for(let i = 0; i < word.length; i++){
    if(word[i] == word[i].toUpperCase()){
      capitalIndexs.push(i);
    }
  }
  return capitalIndexs;
};