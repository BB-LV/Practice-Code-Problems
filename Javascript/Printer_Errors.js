/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

We are given one single input, a string of letters and unkown length
We must return two integers, the first is how many of the letters n-z appear in the input,
and the second number to return is the length of the input. We must return them with a "/" in between them.

First we can set the letters we dont want to count as an array variable. Then we can use the filter method to filter out all the letters we dont want to count,
Finally we can return the .length property of the newly created filtered variable and the input string.
*/


function printerError(s) {
    let a = s.split('');
    let filterOut = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
    a = a.filter(x => !filterOut.includes(x));
    return a.length + "/" + s.length
  }