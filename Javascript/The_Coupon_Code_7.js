/*
The Coupon Code 7kyu

Story
Your online store likes to give out coupons for special occasions. 
Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is 
valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. 
All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

This kata is giving us 4 arguments, the first two arguments (enteredCode, correctCode)
and the second two arguments (currentDate, expirationDate) are being asked to be compared
to each other. The first two must match identically, and the third and fourth represent
dates, in which we have to ensure the third argument is a date that comes before the 
fourth argument. The third and fourth argument will be in the "MONTH Date, Year" format.
We are asked to return a boolean value representing if the two comparisons are true or false.

For this kata we can use the Date Object in javascript in order to compare the dates.
We can return a comparison between the first two arguments and the second two arguments (using the date object).

*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
  }