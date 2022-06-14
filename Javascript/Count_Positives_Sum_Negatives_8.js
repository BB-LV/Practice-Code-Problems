/*
Count Positives Sum of Negatives 8kyu

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
*/

/* (P.R.E.P)
    P = we are given one parameter. It can be null, an empty array, or an array filled with positive or negative integers

    R = we must return one array with two indexes. the first index is the count of how many integers > 0 in the input array, and the second count is each integer < 0
        summed together. 
        OR we must return an empty array if the input is null or an empty array

    E = 
        For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

    P = we can first check to make sure that the input isnt null or empty, if it is we can return an empty array. Next we can create a 'holding' array to 
        add our 'counts' to. We can then use a for loop to loop through the array and use the counters as intended. Finally we can return our 'holding' array.
*/

// Answer

function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
        return [];
    }
    var array = [0, 0];

    for(var i = 0; i < input.length; i++) {
        if(input[i] <= 0) {
            array[1] += input[i];
      } else {
            array[0] += 1;
      }
    }
    return array;
}