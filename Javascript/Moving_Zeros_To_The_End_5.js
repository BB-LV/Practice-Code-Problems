/*
Moving Zeros To The End 5kyu

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

/* (P.R.E.P)
    P = we are given one single array, possibly containing all data types inside of it.

    R = we must return one single array, The input array but with any 0 (zero's) moved towards the last indexes while maintaining the order of the array.

    E = moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

    P = we will create a counter and set it to zero. Next we can use a for loop to loop through the input array
        and 'count' how many zeros are in the array. After that for loop we can use .filter() to filter out all the 
        zero's from our array. 
        Next we can use a for loop combined with .push() to push zero's at the end index's of our array, up to our counter.
        Finally we can return our array.
*/

// Answer

function moveZeros(arr) {
    let count = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === 0){
            count++;
        }
    }
    arr = arr.filter(x => x !== 0);
    for(let i = 0; i < count; i++){
        arr.push(0);
    }
    return arr;
  }

  // After Reviewing Other Solutions I Refactored My Strategy Using .fill() Method

  var moveZeros = function (arr) {
    let result = arr.filter(c => c !== 0)
    let count = arr.length - result.length
    
    return result.concat(Array(count).fill(0))
  }

