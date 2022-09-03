/*
Grasshopper Check for Factor

This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.
*/

/* (P.R.E.P)
    P = two parameters, both integers. the first integer can be 0 or greater, and the second integer will be greater than 0.

    R = we must return a boolean statement describing if the remainder of base % factor = 0

    E = 

    Test.assertEquals(checkForFactor(10,2), true)
    Test.assertEquals(checkForFactor(63,7), true)
    Test.assertEquals(checkForFactor(2450,5), true)
    Test.assertEquals(checkForFactor(24612,3), true)

    P = we can create an if/else statement with a simple % operand between the two parameters. If the result is zero than the second digit is a factor.
*/

// Answer

// function checkForFactor (base, factor) {
//     if(base % factor == 0){
//       return true;
//     }else{
//       return false;
//     }
//   }

const checkForFactor = (base, factor) => base % factor === 0 ? true : false;