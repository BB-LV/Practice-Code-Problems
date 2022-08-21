/*
Beginner Series #2 Clock 8kyu

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
*/

/* (P.R.E.P)
    P = we have 3 parameters. Each will be an integer. h can be between 0-23, m and s can be between 0 - 59 . These units all represent units of time.

    R = we must return one single integer, that represents how many miliseconds have lapsed since each number was at 0. (ie. midnight).

    E = 
        h = 0
        m = 1
        s = 1
        result = 61000

    P = we can return one number with one line of code. If we use order of operations and ( ) brackets to manipulate the math being done in the return. (h * how many miliseconds in an hour)
        + (m * how many miliseconds in a minute) + (s * how many miliseconds in a second(1000))

        h = 3,600,000
        m = 60000
        s = 1000

*/

// Answer

function past(h, m, s){
    return (h * 3600000) + (m * 60000) + (s * 1000);
}

const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);