/*
Switcheroo 7kyu

Given a string made up of letters a, b, and/or c, switch the position of 
letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

This kata is giving us a string as input and asking us to return a string as output.
Our output string but replace any letters a with the letter b, and any letters b with
the letter a. 

We can set a holding variable and than split our input string into an array.
Next we can use a for loop to loop through the input string and push the appropriate
character to our holding variable. 
Finally we can return our holding variable with the .join() method.

*/

function switcheroo(x){
    let answer = [];
    x = x.split('');
    for(let i = 0; i <= x.length; i++){
      if(x[i] === 'a'){
        answer.push('b');
      }else if(x[i] === 'b'){
        answer.push('a');
      }else{
        answer.push(x[i]);
      }
    }
    return answer.join('');
  }