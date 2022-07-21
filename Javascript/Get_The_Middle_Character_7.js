/*
Get The Middle Character 7kyu

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

/* (P.R.E.P)
    P = we are given one string, with no spaces. unknown length

    R = we must return a string consisting of the center index(s) of the input string. If the input string is an odd length, we return one character, if its even length we must return the center two characters.

    E = 
        Test.assertEquals(getMiddle("test"),"es");
        Test.assertEquals(getMiddle("testing"),"t");
        Test.assertEquals(getMiddle("middle"),"dd");
        Test.assertEquals(getMiddle("A"),"A");

    P = we can set up an if/else statement that calculates if the input string is odd or even by % 2 == 0. If even we will divide the inputstring.length / 2 and return that index as well
            as that index + 1, If the string length is odd we can just return the (input string length / 2) + 1 and Math.floor that answer, than return that index.
*/

// Answer

function getMiddle(s){
    s = s.split('');
    let answer = [];
    if(s.length % 2 === 0){
      let center = s.length/2
      answer.push(s[center-1])
      answer.push(s[center])
    }else{
      let centerOdd = Math.floor(s.length/2);
      answer.push(s[centerOdd]);
    }
    return answer.join('');
  }