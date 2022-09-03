/*
Fix String Case 7kyu

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
*/

/* (P.R.E.P)
    P = we are given one parameter, it is a string of unknown length and characters.

    R = we must return one string. either in all lowercase or all uppercase characters, Cant have both. 

    E = 
        solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
        solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
        solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

    P = we can set counting variables and loop through the string by converting it to an array and using a for loop. On each loop we can compare if the character is either uppercase
        or lowercase by using .toUpperCase() and .toLowerCase() and increasing each counting variable for either uppercase or lowercase respectivly. Finally we can use an if/else
        statement and compare wich counting variable is larger (the uppercase or lowercase variable) and return the input string with either .toUpperCase() or .toLowerCase() respectivly.
*/

// Answer

// function solve(s){
//     let a = 0;
//     let b = 0;
//     let array1 = s.split('');
//     for(let i = 0; i < s.length; i++){
//         if(array1[i] === array1[i].toUpperCase()){
//           a++;
//         }else{
//           b++;
//         }
//     }
//     if(a > b){
//       return s.toUpperCase();
//     }else{
//       return s.toLowerCase();
//     }
//   }

const solve = s => {
    let a = 0
    let b = 0;
    let array1 = s.split('');
    for(let i = 0; i < s.length; i++){
        if(array1[i] === array1[i].toUpperCase()){
          a++;
        }else{
          b++;
        }
    }
    if(a > b){
      return s.toUpperCase();
    }else{
      return s.toLowerCase();
    }
}