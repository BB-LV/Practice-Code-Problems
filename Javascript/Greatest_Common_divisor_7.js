/*
Greatest Common Divisor 7kyu

Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = Two positive integers greater than or equal to one.

    Returns = Return the greatest Common Divisor between the two numbers. One single integer greater than or equal to 1.

    Examples = mygcd(x, y){

                    }
                    mygcd(30,12) // 6)
                    mygcd(8,9) // 1)
                    mygcd(1,1) // 1)
    Pseudo-Code = We will compare input integers to see wich is greater or if equal; if equal we will return x. We will than start a while loop with
                    an equation for finding the greatest common denominator. Using a while loop you can set a variable equal to the lowest input number
                    than set that number equal to the modulus of the greater input number and the lower input number (greater % lower). Finally set the
                    higher input equal to the original lowest input number.
                    the while loop will complete when the greatest number is 1 or the modulus of greater % lower input numbers is 0. 
                    
*/

/* First Attempt

function mygcd(x,y){
  if(x == y){
    return x;
  }else if(x > y){
    while(y){
      let t = y;
      y = x % y;
      x = t;
    }
    return x;
  }else{
    while(x){
      let t = x;
      x = y % x;
      y = t;
    }
    return y;
  }
}

*/

// You can shorten this method using a recursive function

const mygcd = (a, b) => b ? mygcd(b, a % b) : a;