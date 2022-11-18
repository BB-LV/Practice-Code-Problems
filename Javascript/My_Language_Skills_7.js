/*
My Language Skills 7kyu

Task
You are given a dictionary/hash/object containing some languages and 
your test results in the given languages. Return the list of languages 
where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

This kata is giving us an object filled with strings and integers as an input.
We are asked to return a single array filled with just strings. We are asked to 
return only the strings inside of the input that have a value attached to them that is 
greater or equal to 60. 

We can accomplish this by using the Object.keys() method and filtering the results that
meet the criteria. Next we can sort the results in descending order using the .sort() method
and finally return the created array.

*/

function myLanguages(results) {
    return Object.keys(results).filter(x => results[x] >= 60).sort((a, b) => results[b] - results[a])
    }