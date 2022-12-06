/*
You Only Need One - Beginner 8kyu
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

We are given two inputs, an array filled with various strings or values and the seperate input is a single value or string.
We must return a boolean value if the second input value is included inside the original array.

    assert.strictEqual(check([66, 101], 66), true);
    assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
    assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
    assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);

We can use the .includes method on the first input (the array) and see if it includes the second input.

*/

function check(a, x) {
    return a.includes(x)
  }

const check = (a, x) => a.includes(x);