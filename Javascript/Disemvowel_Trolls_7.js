/*
Disemvowel Trolls

Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = input will be one string consisting of capital and lowercase letters, spaces, and other characters

    Returns = (where to return the answer to, data type/s of answer, how many answers to return)
    Returns = returning one string with the characters a, e, i, o, u, all removed from the input string

    Examples =      This website is for losers LOL! // Ths wbst s fr lsrs LL!
                    No offense but,\nYour writing is among the worst I've ever read // N ffns bt,\nYr wrtng s mng th wrst 'v vr rd
                    What are you, a communist? // Wht r y,  cmmnst?

    Pseudo-Code = using the .replace() method on the string combined with a regex filter we can return the input string.replace(regex, '');
*/

/* Initial Attempt */

function disemvowel(str) {
  let regex = /[aeiou]/gi
  str = str.replace(regex, '')
  return str;
}
