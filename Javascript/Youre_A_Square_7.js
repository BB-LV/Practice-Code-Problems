/*
Name #kyu

A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.
*/

/* (P.R.E.P)
    P = we are given one integer. positive or negative

    R = we must return a boolean value true/false representing if the input integer is a "perfect square" meaning a number can multiply itself by itself to equal our "perfect square"

    E = 
        -1  =>  false
        0  =>  true
        3  =>  false
        4  =>  true
        25  =>  true
        26  =>  false

    P = we can use Math.sqrt() to square the input integer, and than use isInteger() to determine if the answer is a whole number. A whole number should return true 
*/

// Answer

var isSquare = function(n){
    let answer = Math.sqrt(n);
    if(Number.isInteger(answer)){
        return true;
    }else{
        return false;
    }
  }