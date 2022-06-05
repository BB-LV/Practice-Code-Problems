/*
Training JS #5: Basic data types--Object 8kyu

Description
In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

You can define the object attributes during initialization, like this:

var animal={name:"dog"}
you can also set/get some properties after the object definition, like this:

var animal={}
animal.name="dog"  (or animal["name"]="dog")
Task
Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."
When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.

Series
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = The input will consist of one parameter. This parameter will be an object with 3 key:value pairs. Each key:value 
                    pair will consist of a string as its keys, and either an integer or string as its value.

    Returns = We must return a string containing "This (Key:3) (Key:2) has (Key:1) legs."

    Examples =
               (animal({name:"dog",legs:4,color:"white"}) // "This white dog has 4 legs."
               (animal({name:"cock",legs:2,color:"red"}) // "This red cock has 2 legs."
               (animal({name:"rabbit",legs:4,color:"gray"}) // "This gray rabbit has 4 legs."

    Pseudo-Code = We can use the backticks(``) and bling($) to include the objects key/value pairs into a string. 
*/

/* Initial Attempt

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

*/

// How to Clean Up
// We can use an arrow function to simplify the function

// Final Answer

const animal = obj => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`