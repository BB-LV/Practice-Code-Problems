/*
Square Every Digit 7kyu

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.
Note: The function accepts an integer and returns an integer
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = we are given one single integer, unknown if negative or positive

    Returns = (where to return the answer to, data type/s of answer, how many answers to return)
    Returns = returning one integer where each index in the input integer is squared. 

    Examples = 
                    3212 : 9414
                    2112 // 4114
                    0 : 0

    Pseudo-Code = we can create a variable that's a 'holding' array. Than convert the input number to an array. Next we can push the square of each index of the input number, to the holding array. 
                    Finally we can join the holding arrays indexs and convert it to a number, returning that number.
*/

// Final Answer

function squareDigits(num){
  num = num.toString().split('');
  holder = []
  num.forEach(x => holder.push(x**2))
  return holder;
}


