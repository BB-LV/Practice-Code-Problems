/*
Vowel Count 7

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = (number of inputs, data type of inputs[Number: Whole Number / Floated, Positive / Negative])
    Parameters = we are given one string, with only lower case letters and/or spaces

    Returns = returning an integer that represents how many a, e, i, o, u, characters
                there are in the string.

    Examples =  abracadabra : 5

    Pseudo-Code = we can convert the string to an array and use a for loop to cycle 
                    through the array. We can than use an if statement to filter for
                    vowels in the array. If a vowel is present than add it to a holding
                    variable. Finally return the length of the holding variable.
*/

/* Initial Attempt

function getCount(str) {
  str = str.split('');
  let answer = [];
  for(let i = 0; i < str.length; i ++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] == 'u'){
      answer.push(str[i]);
    }
  }
  return answer.length;
}

*/

// How to Clean Up

// can use a regex with combined with a .length to filter the vowels and return how many
// vowels are in the input string.

// Final Answer

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }