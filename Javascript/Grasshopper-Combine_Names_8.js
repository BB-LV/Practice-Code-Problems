/*
Combine strings function

Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')

returns:

'James Stevens'
*/

/* Strategy
    This kata is fairly straightforward. Combine two strings with a space in between them. 
        We can accomplish this with a simple arrow function for conciseness.
*/

const combineNames = (firstN, lastN) => firstN + " " + lastN