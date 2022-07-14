/*
Find All Pairs 7kyu

You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

    Array can be empty or contain only one value; in this case return 0
    If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
    Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = One single array as an input. Array contains between 0-1000 integers >= 0.

    Returns = If input array has 0 or 1 elements inside, return -1. Else return the amount each integer
                appears in the array divided by two. Rounded down. (math.floor())

    Examples =      [1, 2, 5, 6, 5, 2]  -->  2 (because there are 2 pairs: 2 and 5)
                    [1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4 (because there are 4 pairs: 2, 20, 6 and 2)
    Pseudo-Code = We can sort the input array and use a for loop to itterate through the sorted array.
                    if the index is equal to the index next to it, than add one to the counter && add 1 to the for loop counter.
*/

function duplicates(array){
    let holder = 0;
    array.sort((x, y) => x - y);
    for(let i = 0; i < array.length; i++){
      if(array[i] == array[i + 1]){
        holder += 1;
        i++;
      }
    }
    return holder;
  }