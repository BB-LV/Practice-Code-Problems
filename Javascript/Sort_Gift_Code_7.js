/*
Sort The Gift Code 7kyu

Happy Holidays fellow Code Warriors!
Santa's senior gift organizer Elf developed a way to represent up to 26 
gifts by assigning a unique alphabetical character to each gift. 
After each gift was assigned a character, the gift organizer Elf then joined 
the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, 
but the Elf fell asleep from consuming too much hot chocolate and candy canes! 
Can you help him out?

Sort the Gift Code
Write a function called sortGiftCode/sort_gift_code/SortGiftCode 
that accepts a string containing up to 26 unique alphabetical characters, 
and returns a string containing the same characters in alphabetical order.

Examples (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

This kata is giving us a string as input and asking us to return the same string, but sorted
in alphabetical order. 
To achieve this we can split the string into an array, use the .sort() method to alphabetize it
and than finally convert the array back into a string and return the string.


*/

function sortGiftCode(code){
    return code.split('').sort().join('')
  }