/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

###Arguments (Haskell)

    First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
    Second argument: the original string to be converted.

###Arguments (Other languages)

    First argument (required): the original string to be converted.
    Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

/*  Strategy: Check for outliers and than check to see if there's any minorWords
                that need to be filtered. 
                1. If no minorWords need to be filtered than just use
                .charAt(0).toUpperCase() + .slice(1).toLowerCase().
                2. Next we can use a forEach function on the title variable and
                create an array from minorWords. Than run a .indexOf() function
                the minorWords array, the .indexOf() function will return -1 if 
                there's no match of minorWords elements in each of titles variables.
                3. Finally we clean up the string and return the string with a .join() method.


*/

function titleCase(title, minorWords) {
    let finalAns = '';
    if(title == "" || title == undefined){
      return title;
    }else{
      if(minorWords == undefined || minorWords == ''){
        let a = title.toLowerCase().split(' ');
          a.forEach((x, y) => {
        if(y == 0){
          finalAns += x.charAt(0).toUpperCase() + x.slice(1).toLowerCase() + ' ';
        }else{
            finalAns += x.charAt(0).toUpperCase() + x.slice(1).toLowerCase() + ' ';
          };
        });
      }else{
      let a = title.toLowerCase().split(' ');
      let b = minorWords.toLowerCase().split(' ');
      a.forEach((x, y) => {
        if(y == 0){
          finalAns += x.charAt(0).toUpperCase() + x.slice(1).toLowerCase() + ' ';
        }else{
          if(b.indexOf(x) == -1){
            finalAns += x.charAt(0).toUpperCase() + x.slice(1).toLowerCase() + ' ';
          }else{
            finalAns += x.toLowerCase() + ' ';
          };
        };
      });
      };
    };
    finalAns = finalAns.split(' ')
    finalAns.pop()
    return finalAns.join(' ')
  };