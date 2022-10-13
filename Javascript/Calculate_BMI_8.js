/*
Calculate BMI

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

This kata is giving us two integers as inputs and asking us to return
one of four different strings. Each string represents range of possible answers
to the BMI Index calculation according to our input numbers.

We can create a holding variable that represents the BMI equation on our inputs.
Finally we can return the appropriate string according to the number with an if/else statement.



*/

function bmi(weight, height) {
    const bmiCalc = weight / height**2;
    if(bmiCalc <= 18.5){
      return 'Underweight';
    }else if(bmiCalc <= 25){
      return 'Normal'
    }else if(bmiCalc <= 30){
      return 'Overweight';
    }else{
      return 'Obese';
    }
  }