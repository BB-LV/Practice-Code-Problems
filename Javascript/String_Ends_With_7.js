/*
String Ends With? 7kyu

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
*/

/* (P.R.E.P)
    P = we are given two parameters, both strings of unknown length and characters.

    R = we must return a boolean statement describing if the second parameter is exactly equal in characters as the ending (last characters)
        of the first parameter.

    E = 
        solution('abc', 'bc') // returns true
        solution('abc', 'd') // returns false
    P = we can use the substring() method and exactly compare the second variable (===) to the .length of the first variable - .length of the second variable.
*/

// Answer

// function solution(str, ending){
//     let endOfStr = str.substring(str.length - ending.length)
//     if(endOfStr === ending){
//       return true;
//     }else{
//       return false;
//     }
//   }

// const solution = (str, ending) => str.substring(str.length - ending.length) === ending ? true : false;

// after Review another approach could have been to use the .endswith() method as such

const solution = (str, ending) => str.endsWith(ending);