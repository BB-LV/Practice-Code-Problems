/*
P.R.E.P. = parameters, return, example, psudocode.

Parameters = We will be given one argument to our function. This argument will consist
                of one single array with 10 integers. Each integer will have a letter of the alphabet
                corresponding to how far into the alphabet the letter is(a = 1, b = 2, c = 3, z = 26, etc...).
                There is no limit on how many occurences of the same number there is.


Return = We will return either one of two strings, "WIN" or "LOSE". A win will consist of an input
            array containing each number that corresponds to the letters B.I.N.G.O.(2, 9, 14, 7, 15).
            If all the above numbers are included in the input array than we will return a 'WIN'
            else we will return a "LOSE"

Example =   bingo([21,13,2,7,5,14,7,15,9,10]) // "WIN")
            bingo([1,2,3,4,5,6,7,8,9,10])     // "LOSE")

PsuedoCode =    bingo(1, 2, 9, 14, 7, 15, 3, 4, 5, 6){
                    bingoNumbers = [2, 9, 14, 7, 15]
                    if every value of bingoNumbers is included in bingo than return 'WIN"
                    else return "LOSE"
                }
*/

function bingo(a){
    let winningNums = [2, 9, 14, 7, 15]
    const isWin = (array1, array2) => {
      if(array2.every(num => array1.includes(num)) == true){
        return "WIN";
      }else
        return "LOSE";
    }
    return isWin(a, winningNums);
}