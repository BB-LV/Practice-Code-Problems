/*
Palindrome Chain Length 7kyu

Number is a palindrome if it is equal to the number with digits in reversed order. 
For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

Write a function which takes a positive integer and returns the number of 
special steps needed to obtain a palindrome. The special step is: "reverse the digits, 
and add to the original number". If the resulting number is not a palindrome, 
repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

All inputs are guaranteed to have a final palindrome 
which does not overflow MAX_SAFE_INTEGER.

Example
For example, start with 87:

  87 +   78 =  165     - step 1, not a palindrome
 165 +  561 =  726     - step 2, not a palindrome
 726 +  627 = 1353     - step 3, not a palindrome
1353 + 3531 = 4884     - step 4, palindrome!
4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.

This kata is giving us an integer as input and asking us to return an integer as output.
Our integer must represent the number of steps it takes to get to an integer that is
a palendrome. For each step we must determine if the number is a palindrome of itself,
and if not than add it to its own palindrome. We must keep going until we reach a palindrome.

In order to do this we must first set a variable to a palindrome of our input number.
Next we can use a for loop with a conditional inside, the conditional will test
for a palindrome and if it is, return the current itteration of the for loop. If
not than we must add our created variable to our original integer and run the loop again.

Finally we can return our loop itteration if the number is a palindrome.


*/

var palindromeChainLength = function(n) {
    let m = Number((n + "").split('').reverse().join(''))
    for(let i = 0; i <= n; i++){
      if(n === m){
        return i;
      }else{
        n = n + m;
        m = Number((n + "").split('').reverse().join(''))
      }
    }
  };