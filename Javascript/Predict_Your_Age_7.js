/*
Predict Your Age 7kyu


My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

This kata is givng us 8 different integers as inputs. We are asked to return a single
integer representing each input squared, after squaring each input we need to sum them together
and take the square root of that summed number and divide it by two, finally rounding the answer down and returning it.

we can set a holding variable equal to all of the inputs squared and summed, and Math.sqrt() that answer. Finally
returning that answer divided by two with a Math.floor() to round down.
*/

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let totalAge = Math.sqrt((age1**2) + (age2**2) + (age3**2) + (age4**2) +(age5**2) + (age6**2) + (age7**2) + (age8**2))
    return Math.floor(totalAge/2)
  }