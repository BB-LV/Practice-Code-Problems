/*
Persistent Bugger 6ky

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

This kata is giving us a single integer as input and asking us to return a single integer. The integer
we are asked to return is the 'multiplicative persistence' of the input integer. The 
multiplicative persistence is the number of itterations we must execute to get our number
down to a single digit. Each itteration we multiply each individual number of the input number, against each other.
To do this we can use a counting variable and a while loop. For each itteration of our while loop
we can add to our counting variable and also manipulate our input number as needed. I will
be creating a string object and splitting it from our input integer, then using the reduce method on that. 
Repeating as neccesary until our input number is down to a single digit.
*/

function persistence(num) {
    let value = 0;
   while(num >= 10){
     num = String(num).split('').reduce((a, b) => a * b);
     value++;
   }
   return value;
 }