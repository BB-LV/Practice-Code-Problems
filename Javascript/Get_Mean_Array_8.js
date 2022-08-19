/*
Get the Mean of an Array 8kyu

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

/* (P.R.E.P)
    P = We are given a single array as a parameter. It is filled with an unknown quantity of non negative integers.

    R = We must return a single integer. Which represents the average of all of the integers in the input array. Rounded down to as an integer.

    E = Test.assertEquals(getAverage([2,2,2,2]),2);
        Test.assertEquals(getAverage([1,2,3,4,5,]),3);
        Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);

    P = We can return the input array reduced divided by the input array's length with the Math.floor property
        
*/

// Answer

function getAverage(marks){
    return Math.floor(marks.reduce((x, y) => x + y)/marks.length)
  }

// Reduced

const getAverage = marks => Math.floor(marks.reduce((x, y) => x + y) / marks.length);