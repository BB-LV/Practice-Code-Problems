/*
Sum Of Positive 8kyu

Description
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = Input is One array of numbers. Numbers will be positive or negative, floating or whole.

    Returns = Returning one integer that is the sum of every index in the input array that is greater than 0.

    Examples = const { assert } = require("chai")
                    describe("Basic tests", () => {
                        it("Testing for fixed tests", () => {
                            assert.strictEqual(positiveSum([1,2,3,4,5]),15);
                            assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
                            assert.strictEqual(positiveSum([]),0);
                            assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
                            assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
                        });
                    });

    Pseudo-Code = I will write a loop that loops through the array and if the number is greater than 0, will add it to a 'holding' variable.
*/

/* Initial Attempt

function positiveSum(arr) {
  let answer = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr > 0){
      answer += arr[i];
    }
  }
  return answer;
}

*/

// How to Clean Up
// I can use the reduce function on the array instead of a for loop.

// Final Answer

const positiveSum = arr => arr.reduce((sum, b) => b > 0 ? sum + b : sum, 0);