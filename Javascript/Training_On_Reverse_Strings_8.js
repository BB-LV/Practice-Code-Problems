/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

/* Strategy: One way to solve this is to use .split() on the string, .reverse() on the
                resulting array, and return that using .join() method
*/

/*
function solution(str){
  return str.split('').reverse().join('');
}
Can Simplify With Arrow Functions
*/

const solution = str => str.split('').reverse().join('');