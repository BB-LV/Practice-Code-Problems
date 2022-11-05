/*
FizzBuzz 7kyu

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

This kata is giving us a single input, that is an integer.
Its asking us to return an array with the length of the input integer, and each index
of the input array must either be an integer starting from 1 at index 0 or one of 
three different strings. If the current index (minus 1) is divisible by 5 and 3 the 
string is "FizzBuzz", if the index is divisible by only 5 than the string is "Buzz", and 
if the string is divisible by only 3 than the string should be "Fizz". 
Finally we can return that array.

We can achieve this by setting a holding variable as an empty array and using a for loop
with conditionals the push the appropriate integer or string to the array, and finally
returning the array.
*/

const fizzbuzz = n => {
    let answer = [];
    for(let i = 1; answer.length < n; i++){
      if(i % 5 === 0 && i % 3 === 0){
        answer.push('FizzBuzz');
      }else if(i % 5 === 0){
        answer.push('Buzz');
      }else if(i % 3 === 0){
        answer.push('Fizz');
      }else{
        answer.push(i)
      }
    }
    return answer
  }