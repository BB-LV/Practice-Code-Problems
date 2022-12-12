/*
Find the Perfect Square 7kyu

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.



121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square


so first we can run a check to see if the input is a perfect square or not, If not we will return a -1. Next we can run a for loop that keeps increasing if the number is not a perfect square,
until conditions are met. If all the conditions are true (the input is a perfect square, and our for loop counter is the perfect square of the input) we can just return our for loop counter + 1 and square it.
*/

// function findNextSquare(x) {
//     for(let i = 1; i < x; i++){
//       if(x / i == i){
//         return (i + 1) * (i + 1)
//       }
//     }
//     return -1;
//   }

const findNextSquare = x => {
  for(let i = 1; i < x; i++){
  if(x / i == i){
    return (i + 1) * (i + 1)
  }
}
return -1;
}