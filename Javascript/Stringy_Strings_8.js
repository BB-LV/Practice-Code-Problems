/* 
Stringy Strings 8kyu
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/


/* Second Attempt - After studying the problem more I learned that I could use a different approach rather than using "building" variables like I 
    used in my first attempt. Using the repeat method allows me to 'build' the string and then using the slice method lets me reduce the string
    to the length intended. Ending at the function input size. 
*/
    

const stringy = size => "10".repeat(size).slice(0,size);



/* First Attempt - Decided to create two different 'building' variables that I can use to manipulate the returned string with.
    Discovered I could use the repeat method and a formula representing how to repeat the building variables.

function stringy(size) {
  const evenStr = '10';
  const oddStr = '01';
  if(size == 0 || size == 1){
    return size;
  }else if(size % 2 === 0){
    return size = evenStr.repeat(size/2)
  }else{
    return size = '1' + oddStr.repeat((size - 1) / 2)
  }
}

*/