/*
Sort Numbers 7kyu

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = One variable. It will be an array of integers, null, or an empty array.

    Returns = If empty array or null as input parameter, return an empty array. If its an array
                of integers, return the array sorted from lowest to highest value.

    Examples = solution(nums){
                        if nums is null or [] than return []
                        else return nums sorted from lowest value to highest (use.sort())
                    }
                    solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
                    solution(null); // should return []
    Pseudo-Code = if/else{return nums.sort((x, y) => x - y)}
*/

/* First Attempt

function solution(nums){
    if(nums == null || nums == []){
        return [];
    }else{
        return nums.sort((x, y) => x - y);
    }
}

*/

// Shortened

const solution = nums => nums == null ? [] : nums.sort((x, y) => x - y);