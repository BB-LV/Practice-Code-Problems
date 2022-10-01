/*
    Sum Of Digital/Digital Root 6kyu

    Digital root is the recursive sum of all the digits in a number.

    Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

    Examples
        16  -->  1 + 6 = 7
       942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
    132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
    493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

    We can create and use a recursive function that will reduce the number down to a digital root. If the input number is less than 10, we can return the input number. Else (greater than 10),
    we can use a recursive function to split/reduce accordingly and pass that back into the original function.
*/

function digitalRoot(n) {
    if(n < 10){
      return n;
    }else{
      return digitalRoot(n.toString().split('').reduce((a, b) => {
        return a + + b
      }, 0))
    }
}