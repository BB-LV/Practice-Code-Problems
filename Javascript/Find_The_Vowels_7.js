/*
Find The Vowels

We want to know the index of the vowels in a given word, for example, 
there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)

This kata is giving us a string as input. It is asking us to return an array of integers as
output. This output array must be filled with the index numbers of each 'vowel' in the 
input string. 
***not zero indexed, index starts at 1***

In order to do this we can create a holding variable that's an empty array.
Next we can convert our input string into an array and use a for loop to 
loop through the array.
Third we can use a conditional inside the for loop that when the current index is a 'vowel'
we can add that index number (plus 1) to our holding array.
Finally we can return our holding array.

*/

function vowelIndices(word){
    word = word.split('');
    let answer = [];
    for(let i = 0; i < word.length; i++){
      if(word[i] === 'a'
        || word[i] === 'e'
        || word[i] === 'i'
        || word[i] === 'o'
        || word[i] === 'u'
        || word[i] === 'y'
        || word[i] === 'A'
        || word[i] === 'E'
        || word[i] === 'I'
        || word[i] === 'O'
        || word[i] === 'U'
        || word[i] === 'Y'){
        answer.push(i + 1);
      }
    }
    return answer;
  }