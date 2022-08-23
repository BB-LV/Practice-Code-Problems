/*
Credit Card Mask 7kyu

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

/* (P.R.E.P)
    P = we are given one string as a parameter, unknown length

    R = we must return one string that is the original string with each character
        replaced with a "#" unless its the last four characters of the string

    E = 
        "4556364607935616" --> "############5616"
         "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

        // "What was the name of your first pet?"
        
        "Skippy" --> "##ippy"
        
        "Nananananananananananananananana Batman!"
        -->
        "####################################man!"
        
    P = 
*/

// Answer

function maskify(cc) {
    cc = cc.split('');
    let lastfour = cc.length - 4
    for(let i = 0; i < cc.length; i++){
      if(i < lastfour){
        cc[i] = '#'
      }
    };
    return cc.join('');
  }