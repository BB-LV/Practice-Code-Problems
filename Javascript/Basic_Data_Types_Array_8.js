/*

Training JS #4: Basic data types--Array 8kyu

I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

    1. getLength(arr)    should return length of arr
    2. getFirst(arr)     should return the first element of arr
    3. getLast(arr)      should return the last element of arr
    4. pushElement(arr)  should push an element to arr, and then return arr
    5. popElement(arr)   should pop an element from arr, and then return arr
*/

/* (P.R.E.P)
    P = We are given 5 functions as part of this problem. Each function has a single parameter that is an array of integers.

    R = We must return 5 functions each with a specified utility. These utilities must return the input array but altered in the specified way.

    E = 
        Test.assertSimilar(getLength([1,2,3]),3);
        Test.assertSimilar(getFirst([1,2,3]),1);
        Test.assertSimilar(getLast([1,2,3]),3);
        Test.assertSimilar(pushElement([1,2,3]).length,4);
        Test.assertSimilar(popElement([1,2,3]).length,2);

    P = Each function represents a different method for the array object in Javascript. We can simply return each function with the specified method utilized.
*/

// Answer

// function getLength(arr){
// //return length of arr
//     return arr.length;
// }
// Reduced
const getLength = arr => arr.length;

// function getFirst(arr){
// //return the first element of arr
//     return arr[0];
// }
// Reduced
const getFirst = arr => arr[0];

// function getLast(arr){
// //return the last element of arr
//     return arr[arr.length - 1];
// }
// Reduced
const getLast = arr => arr[arr.length - 1]

// function pushElement(arr){
//     var el=1;
// //push el to arr
//     arr.push(el)
//     return arr
// }
// Reduced
const pushElement = arr => {
  var el = 1;
  arr.push(el);
  return arr;
}
// function popElement(arr){
// //pop an element from arr
//   arr.pop()
//     return arr
// }
// Reduced 
const popElement = arr => arr.pop() && arr;