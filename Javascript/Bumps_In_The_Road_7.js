/*
Bumps In The Road 7kyu

Your car is old, it breaks easily. The shock absorbers are gone and you think it 
can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either 
flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

This kata is giving us a single string as input, and asking us to return
one of two different strings. If there are 15 or more 'n' characters in our
input string we are asked to return "Car Dead", if not than we return "Woohoo!".

We can set up a holding variable to count the instances of 'n' in our input variable.
Next we can split our input string into an array and use a for loop to loop through and
increase our holding variable by one for each 'n' found in our array. Finally we can 
return the string depending on the value of our holding variable.
*/

function bump(x){
    x = x.split('');
    let bumps = 0;
    for(let i = 0; i < x.length; i++){
      if(x[i] === 'n'){
        bumps++;
      }
    }
    if(bumps <= 15){
      return "Woohoo!";
    }else{
      return "Car Dead";
    }
  }