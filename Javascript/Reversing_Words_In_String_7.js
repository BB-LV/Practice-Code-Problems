/*
Reversing Words In A String 7kyu


You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

We are given one string as a parameter. We must output one string, with the individual words inside of the string in reverse order.

We can use the .split, .reverse, and .join methods to split the string into an array, reverse the array, than join the array back into 
a string and return the string.
*/


function reverse(string){
    string = string.split(' ').reverse()
    return string.join(' ')
  }

const reverse = string => string.split(' ').reverse().join(' ')
