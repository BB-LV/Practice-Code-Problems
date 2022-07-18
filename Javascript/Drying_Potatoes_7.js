/*
Drying Potatoes 7kyu

John bought potatoes: their weight is 100 kilograms. Potatoes contain water and dry matter. The water content is 99 percent of the total weight. He thinks they are too wet and puts them in an oven - at low temperature - for them to lose some water.

At the output the water content is only 98%.

What is the total weight in kilograms (water content plus dry matter) coming out of the oven?

He finds 50 kilograms and he thinks he made a mistake: "So much weight lost for such a small change in water content!"

Can you help him?
Task

Write function potatoes with

    int parameter p0 - initial percent of water-
    int parameter w0 - initial weight -
    int parameter p1 - final percent of water -

potatoesshould return the final weight coming out of the oven w1 truncated as an int.
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = 3 integers. p0 & p1 will be percentages, w0 will be positive whole or float number. 
    int parameter p0 - initial percent of water-
    int parameter w0 - initial weight -
    int parameter p1 - final percent of water -


    Returns = The remainder of the 

    Examples =      potatoes(82, 127, 80) // 114);
                    potatoes(93, 129, 91) // 100);
                    potatoes(99, 100, 98) // 50;

    Pseudo-Code = This problem can be solved by multiplying the starting weight by the initial water content and than dividing that by the ending water content
*/

/* First Attempt

attempt

*/

// How to Clean Up

// Final Answer

function potatoes(p0, w0, p1) {
    return Math.floor(w0 * (100 - p0) / (100 - p1))
    }