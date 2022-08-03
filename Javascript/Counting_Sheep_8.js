/*
Counting Sheep 8kyu

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
*/

/* (P.R.E.P)
    P = One parameter, an array, filled with boolean values, can be empty

    R = return oen integer, representing how many true boolean values are in the input array

    E = 
    [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
    
    The correct answer would be 17.
    Hint: Don't forget to check for bad values like null/undefined

    P = we can use the filter() method to filter all the true boolean values, than return the length of the filtered array
*/

// Answer

function countSheeps(arrayOfSheep) {
    arrayOfSheep = arrayOfSheep.filter(x => x === true);
    return arrayOfSheep.length;
  }