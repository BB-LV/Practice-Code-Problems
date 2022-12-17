/*
Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

We are asked to return a single integer representing the number of "breaks" it would
take to turn our input variables both into 1. Each break would represent a subtraction
of 1 from both the input variables (representing a 1x1 square). When We are down to a 
1x1 square we can return the number of breaks for the answer. 

An easy way to accomplish this is to just determine if we need any breaks in the 
first place and if we do we can return the two input variables multiplied against
each other (representing the total area) and subtract 1 from the toal area representing
that last 1x1 square. This final number is the number of breaks it would take to accomplish.



*/

// function breakChocolate(n,m) {
//   const breaks = 0;
//   if(n * m == 1 || n * m == 0){
//     return breaks;
//   }else{
//     return (n*m)-1
//   }
// }

const breakChocolate = (n, m) => n * m == 0 || n * m == 1 ? 0 : (n * m) - 1;