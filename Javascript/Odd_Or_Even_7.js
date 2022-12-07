/*
    Odd Or Even 7kyu

    Given a list of integers, determine whether the sum of its elements is odd or even.

    Give your answer as a string matching "odd" or "even".

    If the input array is empty consider it as: [0] (array with a zero).

    Examples:
    Input: [0]
    Output: "even"

    Input: [0, 1, 4]
    Output: "odd"

    Input: [0, -1, -5]
    Output: "even"
    Have fun!

    First we can use a conditional to determine if the array is empty. If not empty we can use the reduce method to sum the elements,
    and then we can use a final conditional to determine if the summed elements is even or odd (answer % 2 === 0) and if the answer
    is even we can return a string "even" and if the answer is odd we can return a string "odd".
*/

// const oddOrEven = array => {
//     if(array.reduce((a, b) => a + b, 0) % 2 === 0){
//         return 'even';
//     }else{
//         return 'odd';
//     }
// }

const oddOrEven = array => array.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';