/*
Friend or Foe 7kyu

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

We have one parameter, a single array, populated with strings of unknown length. 
We have to return a single array, populated with only the strings from the input array, that are exactly 4 characters in length.

we can return a the filter method to filter only the strings that have a length of 4.
*/

// function friend(friends){
//     return friends.filter(x => x.length === 4);
//   }

const friend = friends => friends.filter(x => x.length === 4);