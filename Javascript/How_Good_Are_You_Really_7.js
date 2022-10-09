/*
How Good Are You Really 8kyu

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than 
the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and 
compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. 
For calculating the average point you may add your point to the given array!

This kata is giving us two input variables, the first is an array of numbers, and the second is an integer.
We are asked to return a single boolean representing if the average of the first variable (the array)
is greater or less than the second input variable. 

we can use a reduce function to obtain the average and than return a boolean function accordingly.
*/


function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((a, b) => a + b) / classPoints.length < yourPoints
  }
