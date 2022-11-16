/*
Help The Fruit Guy 7kyu


Our fruit guy has a bag of fruit (represented as an array of strings) 
where some fruits are rotten. He wants to replace all the rotten pieces 
of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] 
the replaced array should be ["apple","banana","apple"]. Your task is to 
implement a method that accepts an array of strings containing fruits 
should returns an array of strings where all the rotten fruits are replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.

This kata is giving us an array filled with strings as input and asking us to return
an array filled with strings as output. We are asked to filter and change elements
in the input array that include the word "rotten" at the beginning of the element, and
return the array with the elements, but without that word.

First we can use a conditional to check for a valid input, and then we can use a for 
loop to loop through our input and use .includes() method on each element to search
for elements with 'rotten' in them. If they do have 'rotten' we can split the element,
slice() the rotten off of the element, rejoin with .join() and ensure everything
is in lowercase letters. Finally we can return our input array once we are finished
with the loop.

*/

function removeRotten(bagOfFruits){
    if(bagOfFruits == null || bagOfFruits.length === 0){
      return []
    }
    for(let i = 0; i < bagOfFruits.length; i++){
      if(bagOfFruits[i].includes('rotten')){
        bagOfFruits[i] = bagOfFruits[i].split('').slice(6).join('').toLowerCase();
      }
    }
    return bagOfFruits;
  }
