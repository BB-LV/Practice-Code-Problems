/*
Is He Gonna Survive

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

This kata is giving us two integers as inputs and asking us to return a boolean value
representing if our input integers meet a certain criteria.

We our asked if our second integer doubled, is greater than our first input integer.
We can return true/false accordingly with an if/else statement.


*/

function hero(bullets, dragons){
    if(dragons * 2 <= bullets){
      return true;
    }else{
      return false;
    }
  }