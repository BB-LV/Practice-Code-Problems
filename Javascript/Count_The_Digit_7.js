/*
Count The Digit 7kyu

Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
Note that 121 has twice the digit 1.

I believe one way to solve this is to create an array of squared digits, up to
the input n. Once we have that array we can run a for loop and do a few things inside
of this for loop,
first for each of the indexes of the created array we must convert them to an array themselves,
Second we can run another for loop comparing each nested array with the input d,
Third if d and the nested array digit match we can add a 1 to a counter for each occurence.
Finally we can return our counter.
*/

function nbDig(n, d) {
    let squaredIntegers = [];
    for(let a = 0; a <= n; a++){
      squaredIntegers.push(a**2);
    }
    console.log(squaredIntegers)
    let numberOfTimes = 0;
    for(let i = 0; i < squaredIntegers.length; i++){
      squaredIntegers[i] = squaredIntegers[i] + "";
      for(let b = 0; b < squaredIntegers[i].length; b++){
        if(squaredIntegers[i][b] == d){
          numberOfTimes = numberOfTimes + 1;
        }
      }
    }
    
    return numberOfTimes;
  }