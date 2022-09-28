/*
    Find The Divisors 7kyu

    Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), 
    from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

    Example:
    divisors(12); // should return [2,3,4,6]
    divisors(25); // should return [5]
    divisors(13); // should return "13 is prime"'

    We set an empty array variable, than we can use a for loop to cycle through each divisor of the input integer, if the number is a divisor we can add it to our array,
    finally we can return the created array. If the number is a prime number we can return integer is a prime number as a template literal.
*/

function divisors(integer) {
    let array = [];
    for(let i = 2; i < integer; i++){
      if(Number.isInteger(integer / i)){
        array.push(i);
      }
    }
    console.log(array)
    if(array.length < 1){
      return `${integer} is prime`;
    }else{
      return array;
    }
  };