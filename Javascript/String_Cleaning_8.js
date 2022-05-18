/*
String Cleaning 8kyu

Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
Examples (input -> output)

'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'

Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = 1 Variable that is a string of words

    Returns = input with no numbers[0-9] in any of the words inside the string.

    Examples = stringClean(s){
                        // Create a filter array for each digit we want to filter from the input array(0-9).
                        // Split array into an array of words. Each word will be a string.
                        // Filter each index(word) of numbers(0-9);
                        // Return the filtered array as one string with spaced in-between the words.
                    }
                    stringClean('This looks5 grea8t!') // 'This looks great!'
                    stringClean('123456789') // ''
                    stringClean('! !') // '! !'

    Pseudo-Code = 1. create filter array 0-9
                  2. create a copy of input string & use .split() to transform 
                    the input to an array
                  3. use a for loop to loop through the input arrays index's
                  4. convert each index(a string) into an array with .split, and use the
                    .filter() combined with .includes() method to filter each word, finally 
                    use the .join() at the end of the for loop to convert back to a string.
                  5. return the filtered copy of the input string
    
    Strategy:
    1. Step
    2. Step
    3. Step
*/

/* First Attempt

function stringClean(s){
  let filter = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  let holder = s.split(' ');
  for(let i = 0; i < holder.length; i++){
    holder[i] = holder[i].split('').filter(x => !filter.includes(x)).join('');
  }
  return holder.join(' ');
}

*/

// We can use an arrow function to shorten the function

const stringClean = s => {
    let filter = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let holder = s.split(' ');
    for(let i = 0; i < holder.length; i++){
      holder[i] = holder[i].split('').filter(x => !filter.includes(x)).join('');
    }
    return holder.join(' ')
  }

  RRkVopwcCTCmdOxpjdCcQsrtJcwDTGCfEMkNcgGRVJxChNEmRCEccCVQFQScCEcckI
  RRkVopwTmdOxpjQsrtJwDTGEMkNgGRVJNEmREVQFQSEkI
  RRkVopwTdOxpjQsrtJwDTGEMkNgGRVJNEmREVQFQSEkI

