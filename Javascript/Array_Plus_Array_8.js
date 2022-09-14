/*
Array Plus Array 8kyu

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

/* (P.R.E.P)
    P = We are given two arrays as parameters. Each array is filled with whole numbers (integers), positive or negative and an unknown quantity.

    R = We must return one single integer, which represents the sum of all of the integers in each input array.

    E = 
        assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
        assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
        assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
        assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

    P = we can use the array.reduce() method to return both input array's added together, with both arrays using the .reduce() method.
*/

// Answer

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((x, y) => x + y) + arr2.reduce((a, b) => a + b);
  }

  // Reduced

  const arrayPlusArray = (a, b) => a.reduce((x, y) => x + y) + b.reduce((x, y) => x + y);