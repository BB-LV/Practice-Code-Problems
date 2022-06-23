/*
String Templates: Bug Fixing #5

Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = Fix the below function so that the input is a template literal
                    function buildString(...template){
                        return `I like #{template.join(',')}!`;
}

    Returns = return the function above as a working function that outputs the input as a template literal in the sentence "I like ''!"

    Examples = 
                function buildString(...template){
                        return `I like #{template.join(',')}!`;

    Pseudo-Code = the hash mark instead of a bling symbol, and its missing a closing bracket for the function. There's a gramatical error, there should be a space after the comma 
                    to imitate proper grammar syntax. We can also reduce it to an arrow function.
*/

/*
function buildString(...template){
    return `I like ${template.join(', ')}!`;
}
*/
// Final Answer

const buildString = (...template) => `I like ${template.join(', ')}!`;