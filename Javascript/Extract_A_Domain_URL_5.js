/*
Extract the domain name from a URL 5kyu

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
*/

/* (P.R.E.P)
    P = we are given one parameter, a string of unknown length representing a URL.

    R = we are returning a single string, consisting of the input URL without the http://, https://, or www., characters
            as well as without anything that comes after the . in .com. 

    E = 
    * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
    * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
    * url = "https://www.cnet.com"                -> domain name = cnet"

    P = we can use the replace method on the string to filter out our phrases we want to filter out, then use the split method to essentiall filter out
        the string at the first instance of "." where .com or .org or .gov would come into the string. using .split('.')[0] would give us everything before the .
*/

// Answer

// function domainName(url){
//   return url.replace("http://", "").replace("https://", "").replace("www.", "").split(".")[0];
// }

const domainName = url => url.replace("http://", "").replace("https://", "").replace("www.", "").split(".")[0];