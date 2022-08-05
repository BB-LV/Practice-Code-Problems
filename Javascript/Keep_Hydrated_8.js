/*
Keep Hydrated 8kyu

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
*/

/* (P.R.E.P)
    P = One parameter, an integer. It'll be a positive number.

    R = We must return one integer representing the parameter multiplied by 0.5, and rounded down to the nearest whole number.

    E = 
        time = 3 ----> litres = 1

        time = 6.7---> litres = 3

        time = 11.8--> litres = 5
    P = We can just multiply the input by 0.5 and return the answer
*/

// Answer

function litres(time) {
    return Math.floor(time * 0.5);
}

const litres = time => Math.floor(time * 0.5);