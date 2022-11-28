/*
Love vs Friendship 7kyu

If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.

This kata is giving us a single string as an argument and asking us to return a single integer
as an answer. Our answer must represent each letter in the input string 'equaling a number' 
the number it equals is the order of the alphabet it is. a = 1, z = 26. We must sum each
character in the string together and return the answer.

We can make use of .charCodeAt() to assign each letter a value. First creating a holding
variable and splitting the string into an array to make it easier to work with. Secondly
we can use a for loop to loop through the new array and add the appropriate value to 
our holding variable for each letter in the input string/array. Finally we can return
our holiding variable.
*/

function wordsToMarks(string){
    let answer = 0;
    string = string.split('');
    for(let i = 0; i < string.length; i++){
      answer = answer + (string[i].charCodeAt() - 96)
      console.log(string[i].charCodeAt());
    }
    return answer;
  }