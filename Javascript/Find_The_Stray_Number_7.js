/*
Find The Stray Numbers 7kyu

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

We are given a single array filled with an unknown quantity of integers. 
All of the Integers are the same number except for one number. We are tasked with 
isolating and returning the single integer that does not match the others.

We can sort the incoming array and that will either put the number we are looking for
at the beginning or the end of the array. Than we can just compare the first two indexes
and if they are the same we can return the last index, and if they are not the same we can
return the very first index since the array is sorted.
*/



function stray(numbers) {
    numbers.sort()
    if(numbers[0] == numbers[1]){
      return numbers[numbers.length - 1];
    }else{
      return numbers[0]
    }
  }