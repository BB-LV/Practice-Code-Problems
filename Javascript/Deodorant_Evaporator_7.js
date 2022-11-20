/*
Deodorant Evaporator 7kyu

This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or 
gas lost every day (evap_per_day) and the threshold (threshold) in percentage 
beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will 
be out of use.

Example:
evaporator(10, 10, 5) -> 29
Note:
Content is in fact not necessary in the body of the function "evaporator", 
you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

This kata is giving us three variables as input. We are asked to return a single integer. 
This integer represents the 'number of days' that have passed for the first input variable to 
be less than or equal to a specific percentage of the third input variable. That specific
percentage is the third input variable multiplied times .01. Our second input variable (multiplied
    by .01 - to represent a percentage decrease) will represent how much our first input variable
    will be decreased by 'per day'.

For us to achieve this we need to determine our final threshold, we can set a variable 
to this amount first. 
Second we can run a for loop that represents each 'day' that has passed, and can reduce
our first input variable (content) by the appropriate amount each loop. We can
insert an if clause to exit the loop if our current content gets reduced or equal to our
established threshold. Returning that loop number which represented the day.
*/

function evaporator(content, evap_per_day, threshold){ 
    threshold = content * (threshold * .01);
    for(let i = 1; content >= threshold; i++){
      content = content - (content * (evap_per_day * .01));
      if(content <= threshold){
        return i;
      }
    }
  }