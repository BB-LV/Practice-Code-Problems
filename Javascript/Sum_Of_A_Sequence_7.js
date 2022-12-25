/*
Sum Of A Sequence 7kyu

Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)

This question is giving us three inputs, each are integers. The question is asking
us to return a single integer representing an summed together. The array we would be
summing together would have to be generated according to information provided. The 
first variable given to us is the beginning of the array and the second integer given 
represents the end of the array. The third integer given is the step count to increase
our generated array (in between the begin/end). Once we have this generated array we can
use a reduce function on it and return the final number.


*/

const sequenceSum = (begin, end, step) => {
    let sequence = Array.from({length : (end - begin) / step + 1}, (_, i) => begin + i * step)
    console.log(sequence)
    return sequence.reduce((a, b) => a + b, 0);
  };