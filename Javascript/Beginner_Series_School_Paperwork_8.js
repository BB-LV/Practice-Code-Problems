/*
Beginner Series School Paperwork 8kyu

Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
*/

/* (P.R.E.P)
    P = we are given 2 integers. they can be positive or negative

    R = we must return one integer representing the two inputs multiplied by each other. If either input integer is negative, we must return 0.

    E = 
        n= 5, m=5: 25
        n=-5, m=5:  0

    P = a simple if/else statement tied with an && operator can solve this problem
*/

// Answer
function paperwork(n, m) {
    if(n > 0 && m > 0){
      return n*m;
    }else{
      return 0;
    }
  }

  // reduced

  const paperwork = (n, m) => n >= 0 && m >= 0 ? n*m : 0;