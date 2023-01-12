/*
Counting Duplicates 6kyu

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

This kata is giving us a string of unknown length and asking us to return an integer.
The integer we return must be a count of how many characters or numbers appear more than
once in the input string.

We can use the .filter() method to filter out each character that does not appear more
than once, and than return the length of the filtered array.
*/

function duplicateCount(text){
  return text.toLowerCase().split("").filter((val, i, arr) => {
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
} 