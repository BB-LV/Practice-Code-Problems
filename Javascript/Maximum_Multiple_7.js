/*
Maximum Multiple 7kyu

Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
Input >> Output Examples
maxMultiple (2,7) ==> return (6)

This kata is giving us two integers and asking us to return an integer. The return
integer has to be the largest divisor that is less than or equal to bound and greater
than zero. 

We can run a for loop that countsdown instead of up, starting at the 'bound' we
can count down to find the largest number that is divisible by the divisor. 

*/

function maxMultiple(divisor, bound){
    for(let i = bound; i >= 0; i--){
      console.log(i)
      if(i > 0 && i % divisor == 0){
        return i;
      }
    }
  }