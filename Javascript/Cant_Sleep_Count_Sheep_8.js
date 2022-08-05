/*
If You Cant Sleep Just Count Sleep

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

/* (P.R.E.P)
    P = One single positive integer

    R = One single string, consisting of a repeated "1 sheep...2 sheep...3 sheep..." up to the input integer

    E = 
        assert.strictEqual(countSheep(0), "");
        assert.strictEqual(countSheep(1), "1 sheep...");
        assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
        assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
    P = We can create a holding array than use a if/else statement . If input is 0 than we must return an empty string. Else
        we can use a for loop to push each 'version' of the string to the holding array. Finally we can return the holding array
        with the .join() method.
*/

// Answer

var countSheep = function (num){
    let answer = [];
    
    if(num === 0){
      return "";
    }else{
      for(let i = 1; i <= num; i++){
        answer.push(`${i} sheep...`)
      }
      return answer.join('');
    }
  }

  