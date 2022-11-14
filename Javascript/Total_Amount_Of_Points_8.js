/*
Total Amount Of Points 8kyu

Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. 
Each match is represented by a string in the format "x:y", where 
x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and 
returns the number of points our team (x) got in the championship 
by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

This kata is giving us an array as input, filled with strings of 3 characters. We are asked
to return a single integer representing a "score" we create following certain condition's of
the strings. If the integer in index 0 is greater than the integer in index 2 than our score
is increased 3 points, if they are equal our score is increased one point. We are asked
to return our final score.

We can do this by first creating a variable that is a score and than using a for loop
to loop through the input array. In this for loop we can use conditionals/if/else to
add the appropriate amount of points to our score. Finally we can return our score.
*/

function points(games) {
    let score = 0; 
    for(let i = 0; i <= games.length - 1; i++){
      games[i] = games[i].split("");
      if(games[i][0] > games[i][2]){
        score += 3;
      }else if(games[i][0] === games[i][2]){
        score++;
      }
    }
    return score;
  }
