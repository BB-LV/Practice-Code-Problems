/*
Two Fighters, One Winner. 7kyu

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

This Kata gives us three variables, the first is a string representing a 'fighter',
the second is an integer represting 'health' of the fighter,
and the third is the 'attack' of the fighter (the damage or amount taken from the oposing fighter's 'health')

We are asked to return a string representing the 'winner' of the fight, whereas the 
amount of health of the 'loser' is <= 0 before the amount of health of the 'winner' is <= 0.

We can use a while loop with variables representing each fighter's health and damage output,
in each itteration of the while loop we can use the appropriate calculation of damage done to health of each character.
There will not be a draw because they do not attack at the same time. We are passed a third variable in the form of a string 
representing who will "attack" first (who starts the while loop).


*/



function declareWinner(fighter1, fighter2, firstAttacker) {
    if(firstAttacker == fighter2.name){
      while(fighter1.health >= 0 && fighter2.health >= 0){
        fighter1.health = fighter1.health - fighter2.damagePerAttack;
        if(fighter1.health <= 0){
          break;
        }
        fighter2.health = fighter2.health - fighter1.damagePerAttack;
      }
    }else{
      while(fighter1.health >= 0 && fighter2.health >= 0){
        fighter2.health = fighter2.health - fighter1.damagePerAttack;
        if(fighter2.health <= 0){
          break;
        }
        fighter1.health = fighter1.health - fighter2.damagePerAttack;
      }
    }
    if(fighter1.health <= 0){
      return fighter2.name;
    }else{
      return fighter1.name;
    }
  }


