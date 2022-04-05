/*
Rock Paper Scissors

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

// 2 Approaches

/*  Second Approach is to shorten the function with a set of 'rules' as an object. This approach
      would scale much more efficiently than my first solution and would come closer to adhearing 
      to Object Oriented Programming principles. Specifically Encapsulation of the rule-set and
      using a function to Abstract that rule-set.
*/
const rps = (p1, p2) => {
    const rules = {
      'paper': 'rock',
      'rock': 'scissors',
      'scissors': 'paper',
    }
    return rules[p1] === p2 ? 'Player 1 won!' : p1 === p2 ? 'Draw!' : 'Player 2 won!';
  };

/* First Approach - Simple if/else if/else statement for the possible outcomes. Solves the problem but 
      is a 'brute force' approach that is harder to scale than other approaches. */
    
      /*

      const rps = (p1, p2) => {
        if(p1 === p2){
          return 'Draw!';
        }else if(p1 === 'rock' && p2 === 'scissors'){
          return 'Player 1 won!';
        }else if(p1 === 'scissors' && p2 === 'paper'){
          return 'Player 1 won!';
        }else if(p1 === 'paper' && p2 === 'rock'){
          return 'Player 1 won!';
        }else{
          return 'Player 2 won!';
        }
      };

      -Above can be Shortened using Ternary Operators-

    const rps = (p1, p2) => {
        return p1 === p2 ? "Draw!"
        : p1 === 'scissors' && p2 ==='paper' ? "Player 1 won!"
        : p1 === 'rock' && p2 ==='scissors' ? "Player 1 won!"
        : p1 === 'paper' && p2 ==='rock' ? "Player 1 won!" 
        : "Player 2 won!"
    };

      */