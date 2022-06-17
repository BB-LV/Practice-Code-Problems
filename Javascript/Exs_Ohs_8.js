/*
Ex's and Oh's 7kyu

Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.
*/

/* (P.R.E.P)
    P = the parameter is one string consisting of all letters capital and lowercase. 

    R = we must return a boolean true/false representing if the parameter has the same amount of "x" and "o" characters.

    E = 
        XO("ooxx") => true
        XO("xooxx") => false
        XO("ooxXm") => true
        XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
        XO("zzoo") => false

    P = we can create two counting variables, and than make a for loop to loop through the string.
        for each x or o we will add to the respective counting variables. Finally we will return a true/false statement
        regarding if the two counters are the same value
*/

// Answer

function XO(str) {
    let counto = 0;
    let countx = 0;
    str = str.split('');
    for(let i = 0; i<str.length; i++){
      if(str[i] == 'x' || str[i] == "X"){
        countx++;
      }else if(str[i] == 'o' || str[i] == ["O"]){
        counto++;
      }
    }
    if(countx == counto){
      return true;
    }else{
      return false;
    }
}

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }