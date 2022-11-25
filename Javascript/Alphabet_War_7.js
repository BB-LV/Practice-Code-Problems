/*
Alphabet War 7kyu

Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side 
letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small 
letters and return who wins the fight. When the left side wins return Left side wins!, 
when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!

This kata is giving us a single string as an input. It is asing us to return one of three different strings.
The string we return depends on a criteria of rules, where certain alphabetical letters award a specific
amount of 'points' to one of two teams. Wichever team has the most points at the end will determine
the string we will return. Our input string will be only alphabetical letters.

We can accomplish this by assigning a 'score' to the letters that award points and keeping
track of the score. 
First we can assign each letter that awards points to variables, also create two score keeping variables.
Second we can split our input string into an array and use a for loop to loop through it,
awarding appropriate points to each team if the current letter in the array awards points.
Finally we can return our string depending on which team is in the lead.
*/

function alphabetWar(fight){
    let w = 4
    let m = 4
    let p = 3
    let b = 2
    let s = 1
    let q = 3
    let d = 2
    let z = 1
    let lscore = 0
    let rscore = 0
    fight = fight.split('');
   for(let i = 0; i < fight.length; i++){
     if(fight[i] == 'w'){
       lscore += 4
     }else if(fight[i] == 'p'){
       lscore += 3
     }else if(fight[i] == 'b'){
       lscore += 2
     }else if(fight[i] == 's'){
       lscore += 1
     }else if(fight[i] == 'm'){
       rscore += 4
     }else if(fight[i] == 'q'){
       rscore += 3
     }else if(fight[i] == 'd'){
       rscore += 2
     }else if(fight[i] == 'z'){
       rscore += 1
     }
   }
   if(lscore > rscore){
     return "Left side wins!"
   }else if(rscore > lscore){
     return "Right side wins!"
   }else{
     return "Let's fight again!"
   }
 }