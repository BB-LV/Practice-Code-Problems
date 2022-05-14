/*
Cancer Cells 8kyu

Your task is to write a function which cuts cancer cells from the body.
Cancer cells are divided into two types:

    Advance stage,described as letter C
    Initial stage,described as letter c

Rest cells are divided as follows:

    Normal cell,described as lowercase letter
    Important cell,described as uppercase letter

Prerequisites:

    Important cell,cannot be cut out.
    Advance cancer cell,should be cut out with adjacent cells if it can be done.

Function input is a string (representing a body), remove "cancer" characters (based on the described rules) and return the body cured of those "cancer" characters.
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = One string consisting of letters a - z. The Letters can be capitalized or lowercase.

    Returns = Return the string with every capital C removed as well as the immediate lowercase letters next to it. Uppercase letters are exempt(other than C).

    Examples = cutCancerCells(organism)){
                        // split string into an array of individual letters and create a blank array to hold 'non-cancerous' letters
                        // use a for loop combined with an if/else if/else statement to iterate through each index and
                            if the index is a capital C than run another if/else (1). else if the index is a lowercase C
                            than dont add that index to the blank array. else the index is neither a capital or lowercase C and can be kept.
                            (1) if/else statement: if the adjacent index's are a capital letter than the adjacent index 
                                does get added to the blank array, nor the current index('C'). else the adjacent index is a lowercase letter it does not get added to the blank array, nor the current index('C'). 
                        // return the array of filtered letters with a .join('') method to return a string.
                    }
        doTest('CAAC') // 'AA'
		doTest('CaaC') // ''
		doTest('C') // ''
    Pseudo-Code = cutCancerCells(organism){
        organism = organism.split('');
        let cancerCured = [];
        for(let i = 0; i < organism.length; i ++){
            if(organism[i] !== 'C' || organism[i]){
                organism
            }
        }
    }
*/

/* First Attempt

attempt

*/

// How to Clean Up

// Final Answer