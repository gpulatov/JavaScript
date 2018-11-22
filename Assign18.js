/*
====================================================
Assignment 18 - String Manipulation Tasks // Today is 8/13/18
===================================================
Due No Due Date Points 0 Submitting a text entry box 
*/

/*
Question 1=============================================
Create a function that accepts 1 string, e.g. "Bob", return a greeting of the form "Hello Bob!".

var helloName = function (string){
    var str="hello"
    console.log("Hello "+string+"!");// str.concat(string).concat("!")
}
helloName("Bob") //→ "Hello Bob!"
helloName("Alice") //→ "Hello Alice!"
helloName("X") //→ "Hello X!"
*/

/*
Question 2=============================================
Create a function that accepts two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
*/
/*
var makeAbba = function(a, b){
    console.log(a.concat(b).concat(b).concat(a));// or a+b+b+a
}


makeAbba("Hi", "Bye") //→ "HiByeByeHi"
makeAbba("Yo", "Alice") //→ "YoAliceAliceYo"
makeAbba("What", "Up") //→ "WhatUpUpWhat"
*/
/*
Question 3=============================================
Create a function return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.
*/
/*
var extraEnd = function (string){
    var lastOfTwo=string.charAt(string.length-2).concat(string.charAt(string.length-1));// or string.substr(-2,2)
    console.log(lastOfTwo.concat(lastOfTwo).concat(lastOfTwo));
}
extraEnd("Hello") //→ "lololo"
extraEnd("ab") //→ "ababab"
extraEnd("Hi") //→ "HiHiHi"
*/

/*
Question 4=============================================
Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.
*/
/*
var firstTwo = function(string){
    if(string.length>=2){
        console.log(string.substr(0,2));
    }else{
        console.log(string);
    }
}
firstTwo("Hello") //→ "He"
firstTwo("abcdefg") //→ "ab"
firstTwo("ab") //→ "ab"
firstTwo("X") //→ "X"
firstTwo("") //→ ""
*/
/*
Question 5==============================================
Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".
*/
/*
var firstHalf = function(string){
    if(string.length%2==0){
        var half=string.length/2;
        console.log(string.substr(0,half));
    }else{
        console.log("The string's length is not even!");
    }
}
firstHalf("WooHoo") //→ Woo
firstHalf("HelloThere") //→ Hello
firstHalf("abcdef") //→ abc
firstHalf("hello World") //→ The string's length is not even!
*/

/*
Question 6===============================================
Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.
*/
/*
var withoutEnd = function(string){
    if(string.length>=2){
        var n=string.length;
        console.log(string.slice(1,n-1))
    }else{
        console.log("The string length is shorter than 2!");
    }
}
withoutEnd("Hello") //→ "ell"
withoutEnd("java") //→ "av"
withoutEnd("coding") //→ "odin"
withoutEnd("JS") //→ ""
withoutEnd("J") //→ The string length is shorter than 2!
*/

/*
Question 7===============================================
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. 

var comboString = function(a,b){
    if(a.length>b.length){
        console.log(b.concat(a).concat(b));
    }else if(a.length<b.length){
        console.log(a.concat(b).concat(a));
    }else{
        console.log("Two strings length are equal!");
    }
}
comboString("Hello", "hi") //→ "hiHellohi"
comboString("hi", "Hello") //→ "hiHellohi"
comboString("aaa", "b") //→ "baaab"
comboString("aaa", "bbb") //→ Two strings length are equal!
*/

/*
Question 8================================================
Given 2 strings, return their concatenation, except omit the first char of each.
*/
/*
var nonStart = function(a,b){
    console.log(a.slice(1)+b.slice(1));
}
nonStart("Hello", "There") //→ "ellohere"
nonStart("java", "code") //→ "avaode"
nonStart("shotl", "java") //→ "hotlava"
*/

/*
Question 9================================================
Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.

var left2 = function(string){
    if(string.length>=2){
        firstTwo=string.substr(0,2);
        leftPart=string.substr(2);
        console.log(leftPart+firstTwo);
    }else{
        console.log("The string length is shorter than 2!");
    }
}
left2("Hello") //→ "lloHe"
left2("java") //→ "vaja"
left2("Hi") //→ "Hi"
left2("H") //→ "The string length is shorter than 2!"
*/

/*
Question 10===============================================
Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.
*/
/*
var right2 = function(string){
    if(string.length>=2){
        lastTwo=string.substr(-2,2);
        leftPart=string.substr(0, string.length-2);
        console.log(lastTwo+leftPart);
    }else{
        console.log("The string length is shorter than 2!");
    }
}

right2("Hello") //→ "loHel"
right2("java") //→ "vaja"
right2("Hi") //→ "Hi"
right2("H") //→ "The string length is shorter than 2!"
*/