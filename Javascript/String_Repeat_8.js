/*
String Repeat 8kyu

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = (number of inputs, data type of inputs[Number: Whole Number / Floated, Positive / Negative])
    Parameters = we are given 2 parameters. "n" and "s". n will be a whole integer and s will be a string.

    Returns = we need to return the string input "s" printed as many times as the number "n" represents. ex. If n = 1. the string would be printed only once. 
                no grammar syntax in the repeats (spaces nor commas)

    Examples = 

    describe("Tests", function() {
        it ("Basic tests", function() {
            Test.assertSimilar(repeatStr(3, "*"), "***");
            Test.assertSimilar(repeatStr(5, "#"), "#####");
            Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
        });
    });

    Pseudo-Code = use the .repeat() method on the input string to return the string that many times as specified by 'n'
*/

// Final Answer

const repeatStr = (n, s) => s.repeat(n);