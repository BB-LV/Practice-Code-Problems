/*
Exclamation marks series #1: Remove an exclamation mark from the end of string 8kyu

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
*/

/* (P.R.E.P)
    P = One parameter, will be a string.

    R = we must return one string, with no exclamation mark "!" at the end of the string.

    E = 
        remove("Hi!") == "Hi"
        remove("Hi!!!") == "Hi!!"
        remove("!Hi") == "!Hi"
        remove("!Hi!") == "!Hi"
        remove("Hi! Hi!") == "Hi! Hi"
        remove("Hi") == "Hi"

    P = we can use the .slice() method on a string and remove just the last character by using -1. We must use an if/else statement to determine if the
            last character is an exclamation mark "!". Finally we can either return just the string (if there isnt an exclamation mark at the end) or we can return
            the string with the exclamation mark removed using the substring() method.
*/

// Answer

// function remove (string) {
//     let lastChar = string.slice(-1)
//     if(lastChar !== "!"){
//         return string;
//     }else{
//         return string.substring(0, string.length - 1);
//     }
//   }

  const remove = string => string.slice(-1) !== "!" ? string : string.substring(0, string.length - 1)