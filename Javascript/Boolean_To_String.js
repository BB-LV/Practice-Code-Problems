/*
Convert a boolean to a string 8kyu

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = only 2 inputs are possible, true or false aka a boolean value

    Returns = returning one string representing "false" for a false boolean value and "true" for a true boolean valule

    Examples = true / "true" | false / "false"

    Pseudo-Code = return a string from a y/n statement
*/

// Final Answer

const booleanToString = b => b ? "true" : "false";