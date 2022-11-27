/*
Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript
developers coming from Europe 7kyu

You will be given an array of objects (hashes in ruby) representing data about 
developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
your function should return number 1.

If, there are no JavaScript developers from Europe then your function should return 0.

Notes:

The format of the strings will always be Europe and JavaScript.
All data will always be valid and uniform as in the example above.

This kata is giving us a single array as an argument. This array is populated with an
unknown quantity of objects. We are asked to return a single integer. This integer represents
the number of objects in our input array that contain two property/value pairs. The 
first pair it needs is a 'continent' of 'Europe' and the second is a 'language' of 'JavaScript'.

We can set a holding variable to 0 and use a for loop and conditionals to increase our
holing variable each time both conditionals are met. Finally returning the holding variable.
*/

function countDevelopers(list) {
    let answer = 0;
    for(let i = 0; i < list.length; i++){
      if(list[i].continent == 'Europe' && list[i].language == 'JavaScript'){
        answer++;
      }
    }
    return answer
  }