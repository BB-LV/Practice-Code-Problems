/*
Cancer Cells 8kyu

Your task is to write a function which cuts cancer cells from the body.
Cancer cells are divided into two types:

    Advance stage,described as letter C
    Initial stage,described as letter c

Rest cells are divided as follows:

    Normal cell,described as lowercase letter
    Important cell,described as uppercase letter

Prerequisites:

    Important cell,cannot be cut out.
    Advance cancer cell,should be cut out with adjacent cells if it can be done.

Function input is a string (representing a body), remove "cancer" characters (based on the described rules) and return the body cured of those "cancer" characters.
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = One string consisting of letters a - z. The Letters can be capitalized or lowercase.

    Returns = Return the string with every capital C removed as well as the immediate lowercase letters next to it. Uppercase letters are exempt(other than C). all lowercase c's should be removed as well

    Examples = 
    	doTest('CC', ''); | doTest('CAAC', 'AA'); | doTest('CaaC', ''); | doTest('C', ''); | doTest('acb', 'ab') | doTest('aCb', '') | doTest('acCb', 'a') | doTest('acCcb', 'ab')
        doTest('ab', 'ab') | doTest('aCZ', 'Z') | doTest('BCE', 'BE') | doTest('nce', 'ne') | doTest('NcE', 'NE')
    
*/

// Final Answer

function cutCancerCells(o){
    const s = o.split('');
    const s1 = s.filter((curr, i, arr) => {
      if ((arr[i + 1] !== 'C' && arr[i - 1] !== 'C') || curr.toUpperCase() === curr) {
        return true;
      }
      
      return false;
    });
    
    return s1.filter(curr => curr.toLowerCase() !== 'c').join('');
  }