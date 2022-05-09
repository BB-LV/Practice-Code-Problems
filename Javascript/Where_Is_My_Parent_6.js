/*
Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb". 
*/

/* 
    Strategy:
        We can make the letters uniform to each other and than use the sort() method on an array to get the letters in the order we want them.
        Than we can use a for loop to iterate over each letter and compare it to the previous letter in the for loop, if the letters
            are different than we can capitalize the required letter.
*/

function findChildren(dancingBrigade) {
    dancingBrigade = dancingBrigade.toLowerCase().split('').sort();
    let answer = []
    for(let i = 0; i < dancingBrigade.length; i++){
      if(dancingBrigade[i] != dancingBrigade[i-1]){
        answer.push(dancingBrigade[i].toUpperCase());
      }else{
        answer.push(dancingBrigade[i]);
      }
    }
    return answer.join('');
  }