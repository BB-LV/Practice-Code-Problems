/*
Sum Of Angles 7kyu

Find the total sum of internal angles (in degrees) in an n-sided simple polygon. 
N will be greater than 2.


This kata is giving us a single integer as an argument and asking us to return an integer.
Our returned integer should represent the amount of degrees on the exterior of an n-sided
polygon. The n is our argument.

In order to find the amount of degrees we can multiply our input times 180 degrees. First
we must subtract 2 from our input to represent at least 2 sides.
*/

function angle(n) {
    return (n - 2) * 180
  }