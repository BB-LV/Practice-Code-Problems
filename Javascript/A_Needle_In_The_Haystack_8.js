/*
A Needle In The Haystack 8kyu

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:
*/

/* (P.R.E.P)
    P = We are given one array as a parameter. filled with an unknown number of any data types

    R = we must return one string that states "found the needle at position &&" where && indicates the index of 'needle' in our parameter array.

    E = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

    P = we can use .findIndex() to locate the index of the 'needle'
*/

// Answer

function findNeedle(haystack) {
    return "found the needle at position " + haystack.findIndex(x => x === 'needle');
  }

const findNeedle = haystack => 'found the needle at position ' + haystack.findIndex(x => x === 'needle');