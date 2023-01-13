/*
Duplicate Encoder 6kyu

The goal of this exercise is to convert a string to a new string 
where each character in the new string is "(" if that character appears only once 
in the original string, or ")" if that character appears more than once in the 
original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read 
"...It Should encode XXX", the "XXX" is the expected result, not the input!

For this kata we are given a string as input. We are asked to return a string as output;
but with only two possible characters in our string. Either "(" or ")". For each character
in our return string we are asked to compare the input strings elements, and if they appear
more than once we are asked to substitue ")" in our return string where the duplicates occur.
If there is only one instance of the character in the string we are asked to substitute "("
inside the answer string, where the same index as our  single instance input strings number.


We can set a holding variable of an empty array first and set the input string to all LowerCase
Letters sicne the kata asks for it. Than we can split it into an array to make it easier to work with.
Third we can use a for loop to loop through the input array and use a comparison to determine
which "()" to push to our answer array. Finally we can return our answer array.
*/

function duplicateEncode(word){
    let answer = [];
    word = word.toLowerCase().split('');
    for(let i = 0; i < word.length; i++){
      if(word.findLastIndex(x => x == word[i]) == word.findIndex(y => y == word[i])){
        answer.push("(")
      }else{
        answer.push(")")
      }
    }
    return answer.join('')
  }