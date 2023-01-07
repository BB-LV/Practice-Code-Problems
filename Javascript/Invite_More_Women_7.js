/*
Simple Fun #152: Invite More Women?

King Arthur and his knights are having a New Years party. L
ast year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.

To prevent this from happening again, Arthur wants to make sure that there 
are at least as many women as men at this year's party. He gave you a list 
of integers of all the party goers.

Arthur needs you to return true if he needs to invite more women or false 
if he is all set.

Input/Output
[input] integer array L ($a in PHP)
An array (guaranteed non-associative in PHP) representing the genders of 
the attendees, where -1 represents women and 1 represents men.

2 <= L.length <= 50

[output] a boolean value

true if Arthur need to invite more women, false otherwise.

This kata is giving us an array filled with integers as input, the integers are all 
either 1 or -1. We are asked to return a boolean value that represents if there's more
1's in the input array than -1's. If there's more 1's than we must return true, else 
we must return false.
*/

function inviteMoreWomen(L) {
    let women = 0;
    let men = 0;
    for(let i = 0; i < L.length; i++){
      if(L[i] > 0){
        men++
      }else{
        women++
      }
    }
    if(men > women){
      return true
    }else{
      return false;
    }
  }