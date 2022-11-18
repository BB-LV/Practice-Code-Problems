/*
Did I Get A Bonus 8kyu

It's bonus time in the big city! The fatcats are rubbing their paws in 
anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be 
an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, 
the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string 
prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), 
"$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

This kata gives us two arguments, the first is an integer and the second is a boolean
value (true/false). We are asked to return a string with a "£" included before our 
integer we must return. The integer will either be our first argument's integer, or our first
arguments integer multiplied by 10, depending if our second argumen (the boolean) is true or false.
(If true we multiply, if false we dont multiply)

We can set up a simple conditional to check for our second argument's value and return 
our required string accordingly by adding our integer to a string of "£". We can use
a ternary operator to simplify the function.

*/

// function bonusTime(salary, bonus) {
//   if(bonus === true){
//     return "£" + salary * 10;
//   }else{
//     return "£" + salary;
//   }
// }

const bonusTime = (s, b) => b === true ? "£" + s * 10 : "£" + s;