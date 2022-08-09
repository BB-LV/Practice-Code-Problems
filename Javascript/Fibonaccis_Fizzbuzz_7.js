/*
Fibonacci's Fizzbuzz 7kyu

Instructions
The goal of this kata is two-fold:

1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

For the sake of this kata, you can assume all input will be a positive integer.

Use Cases
Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.
*/

/* (P.R.E.P)
    P = we are given one positive integer

    R = we must return one array, its index total count is the input integer. Each index will follow the Fibonacci sequence (each subsequent
            number will be the sum of its previous two index's), also if the index value is divisible by 3 we must subsitute the string "Fizz",
            if the number is divisible by 5 we must subsitute the string "Buzz" and if the value is divisible by 3 && 5 we must subsitute "FizzBuzz"

    E = fibsFizzBuzz(5) // [ 1, 1, 2, 'Fizz', 'Buzz' ]
        fibsFizzBuzz(20) // [1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]

    P = This spin on fizzbuzz will require the standard is value % 3 === 0 or value % 5 === 0 for the fizzbuzz portion but first we can 
        create a variable that is an array and set it equal to a new array with the length of the parameter integer. We can than use a for loop
        to go (start at index 2) loop through the array and set each index equal to the sum of its previous two index's. After the for loop we can
        itterate through the array once more and change each index to the appropriate string if needed.
*/

// Answer
var fibsFizzBuzz = function(n) {
    if(n===1){
      return [1]
    }
    const arr = [1, 1]
    for(let i = 0; i <= n - 3; i++){
      let num = arr[i] + arr[i + 1];
      (arr.push(num));
    }
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 3 === 0 && arr[i] % 5 === 0){
        arr[i] = 'FizzBuzz';
      }else if(arr[i] % 3 === 0){
        arr[i] = 'Fizz';
      }else if(arr[i] % 5 === 0){
        arr[i] ='Buzz';
      }
    }
    return arr
}
