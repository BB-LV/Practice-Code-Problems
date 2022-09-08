/*
Odd Even String Sort 7kyu

Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)
*/

/* (P.R.E.P)
    P = one parameter, its a string. 

    R = return one string. representing the even and odd indexes of the input string concatenated together    

    E = 
        input: 'CodeWars'
        output 'CdWr oeas'

        S[0] = 'C'
        S[1] = 'o'
        S[2] = 'd'
        S[3] = 'e'
        S[4] = 'W'
        S[5] = 'a'
        S[6] = 'r'
        S[7] = 's'
    P = first we can set two different variables to empty arrays, the two variables will represent even indexes and odd indexes.
        second we can split the input string into an array, and run a for loop through the converted array, using .shift() method to 
          populate the first two arrays we set on the first step, even and odd indexes accordingly.
        finally we can concatenate the arrays and convert them into strings with the .join() method and + operand.
*/

// Answer

function sortMyString(S) {
    let s = S.split('');
    let answer1 = [];
    let answer2 = [];
    for(let i = 0; i < s.length; i++){
      if(i == 0 || i % 2 == 0){
        answer1.push(s[i]);
      }else{
        answer2.push(s[i]);
      }
    }
  return answer1.join('') + " " + answer2.join('')
}