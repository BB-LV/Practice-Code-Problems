/*
List Filtering 7kyu

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/

/* (P.R.E.P)
    P = we are given one parameter. It is an array filled with various strings and integers.

    R = we must return a single array containing only the integers from the input array

    E = 
        filter_list([1,2,'a','b']) == [1,2]
        filter_list([1,'a','b',0,15]) == [1,0,15]
        filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

    P = we can return the input array using the .filter() method to filter only the integers 
*/

// Answer

function filter_list(l) {
    return l.filter(v => typeof v == "number")
   }

const filter_list = l => l.filter(v => typeof v == 'number')