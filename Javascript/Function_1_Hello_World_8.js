/*
Function 1 Hello World 8kyu

Description:
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?
*/

/* (P.R.E.P)
    P = we are given no parameters, we must make a function call itself.

    R = we must return 'hello world!'

    E = 'hello world'

    P = this is usually the first line of code many people learn to write when learning different languages, its a simple test to return a string. 
        this question in particular asks us to get creative so I will actually define the entire alphabet and build this string from each letter.
*/

// Answer

const greet = () => 'hello world!'


/*
This Next Bit of Code is for fun
*/

function greet (){
    var a = "a";
    var b = "b";
    var c = "c";
    var d = "d";
    var e = "e";
    var f = "f";
    var g = "g";
    var h = "h";
    var i = "i";
    var j = "j";
    var k = "k";
    var l = "l";
    var m = "m";
    var n = "n";
    var o = "o";
    var p = "p";
    var q = "q";
    var r = "r";
    var s = "s";
    var t = "t";
    var u = "u";
    var v = "v";
    var w = "w";
    var x = "x";
    var y = "y";
    var z = "z";
    var space = " ";
    var yellIt = '!';
    
    var theWordhello = [].concat(h).concat(e).concat(l).concat(l).concat(o).concat(space).join('');
    var theWordworld = [].concat(w).concat(o).concat(r).concat(l).concat(d).join('');
    
    return theWordhello + theWordworld + yellIt;
  }