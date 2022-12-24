/*
Remove Anchor From URL

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

This function is giving us a string and wants us to return a string back. The string
we will be returning will be in the format of a URL and our question is asking us to 
return a properly formatted url starting at the www. mark and ending at an anchor (if an anchor is provided);

We can use a split method on our input string to convert it into and return the remainder of the string thats split.
*/

function removeUrlAnchor(url){
    return url.split("#")[0]
   }