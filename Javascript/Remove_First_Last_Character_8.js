/*
Remove First and Last Character 8kyu

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters.
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = one input, a string with 2 or more characters

    Returns = (where to return the answer to, data type/s of answer, how many answers to return)
    Returns = returning one string, with the first and last character removed. If input only had 2 characters than
                returning an empty string.

    Examples =  eloquent: loquen
                country : ountr
                person : erso
                place : lac

    Pseudo-Code = we can use the .slice() method on the string(). starting at index 1 and ending with -1 will 
                    start at the second index and will end at one index from the end of the string.
*/

const removeChar = str => str.slice(1,-1);