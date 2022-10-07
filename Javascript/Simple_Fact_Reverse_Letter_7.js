/*
Simple Fun #176: Reverse Letter 7kyu

Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.


This kata is giving us one string as input. This string can be filled with 
any quantity or amount of characters. We are asked to return a single string,
where everything is filtered from the original input string OTHER than characters
of the alphabet (capital or not). We are also asked to return that string in reverse
order.

To accomplish this we can use .charCodeAt() method to target only alphabetical characters of the input string.
First we can create a holding array and convert our input string to an array,
Second we can run a for loop that filters and adds the correct characters to our holding array,
Third we can reverse our holding array and return it with the .join() method to return it back to a string.

*/

function reverseLetter(str) {
    //   str = str.split('').reverse();
      let answer = [];
      for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 || str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
          answer.push(str.charAt(i));
        }
      }
      return answer.reverse().join('')
    }