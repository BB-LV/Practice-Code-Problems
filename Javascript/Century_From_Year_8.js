/*
Century From Year 8kyu  

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.
*/

/* (P.R.E.P)
    P = we are given a single positive integer

    R = we must return which "century" the integer is in, a single integer representing the century.
        Meaning 1-100 would return 1, 101-200 would return 2, etc... year 2000 would return 20

    E = 
        1705 --> 18
        1900 --> 19
        1601 --> 17
        2000 --> 20

    P = we can divide the year by 100, use Math.floor() to round down and lose the decimal, than add a 1 to determine the century
*/

// Answer

function century(year) {
    return Math.ceil(year/100)
  }

// Or

const century = year => Math.ceil(year/100)