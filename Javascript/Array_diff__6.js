/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

/*  Strategy - I think this is a fairly straightforward problem, take the input of two arrays and return a the first array
                without any values from the second array. 
                A simple filter function that uses the Array.includes() method.

*/

// Answer

/* 
function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x));
  }
*/

// Which can be simplified and shortened with another arrow function

const arrayDiff = (a, b) => a.filter(x => !b.includes(x));

// Have a nice day!