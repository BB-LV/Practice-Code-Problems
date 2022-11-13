/*

    Given an array/list of integers, find the Nth smallest element in the array.
        Array/list size is at least 3.
        Array/list's numbers could be a mixture of positives , negatives and zeros.
        Repetition in array/list's numbers could occur, so don't remove duplications.


    Example:
                arr=[3,1,2]            n=2    ==> return 2 
                arr=[15,20,7,10,4,3]   n=3    ==> return 7 
                arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
                arr=[2,1,3,3,1,2],     n=3    ==> return 2 

    We can use an equation for this (max - min + 1) * (min + max)/2, but first we must establish which
        variable is the lower value and wich is the higher value. Next we can just plug those into the  
        equation.
*/

 

function getSum( a,b )
{
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  return (max - min + 1) * (min + max)/2
}