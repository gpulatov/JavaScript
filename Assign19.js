//=======================================================
//***** Assignment 19 - String Manipulation Tasks ******
//======================================================
/*
Question 1
Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".
*/
/*
var frontAgain = function(string){
    if(string.substr(0,2)==string.substr(-2)){
        console.log(true);
    }else{
        console.log(false);
    }
}

frontAgain("edited") //→ true
frontAgain("edit") //→ false
frontAgain("ed") //→ true
*/
/*
//===================================
Question 2
Return the number of times that the string "hi" appears anywhere in the given string.
*/
/*
var countHi = function(str){
    var counter=0;
    for(var i=0; i<str.length; i++){
        if(str.charAt(i)+str.charAt(i+1)=="hi"){
            counter++;
        }
    }
    console.log(counter);
}

countHi("abc hi ho") //→ 1
countHi("ABChi hi") //→ 2
countHi("hihi") //→ 2
*/
/*
==============================================
Question 3
Return true if the string "cat" and "dog" appear the same number of times in the given string.
*/
/*
var catDog = function (str){
    var counterCat=0;
    var counterDog=0;
    for(var i=0; i<str.length; i++){
        if(str.substr(i,3)=="cat"){
            counterCat++;
        }else if(str.substr(i,3)=="dog"){
            counterDog++;
        }
    }
    if(counterCat==counterDog){
        console.log(true);
    }else{
        console.log(false);
    }
}
catDog("catdog") //→ true
catDog("catcat") //→ false
catDog("1cat1cadodog") //→ true
*/
/*
============================================
Question 4
Given a string, return a string where for every char in the original, there are two chars.
*/
/*
var doubleChar = function(str){
    var concat="";
    for(var i=0; i<str.length; i++){
        concat+=str.charAt(i)+str.charAt(i);
    }
    console.log(concat);
}
doubleChar("The") //→ "TThhee"
doubleChar("AAbb") //→ "AAAAbbbb"
doubleChar("Hi-There") //→ "HHii--TThheerree"
*/
/*
=========================================================
Question 5
Given a string, return true if it ends in "ly".

var endsLy = function(myString){
    if(myString.substr(-2)=="ly"){
        console.log(true);
    }else{
        console.log(false);
    }
}
endsLy("oddly") //→ true
endsLy("y") //→ false
endsLy("oddy") //→ false
*/
/*
========================================================
Question 6
Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

var withoutEnd2 = function(string){
    if(string.length>=2){
        var n=string.length;
        console.log(string.slice(1,n-1))
    }
}
withoutEnd2("Hello") //→ "ell"
withoutEnd2("abc") //→ "b"
withoutEnd2("ab") //→ ""
withoutEnd2("a") //→ ""
*/

/*
=========================================================
Question 7
Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0. Note: use .equals() to compare 2 strings.
*/
/*
var hasBad = function(string){
    if (string.search("bad")==0 || string.search("bad")==1){
        console.log(true);
    }else{
        console.log(false);
    }
}
hasBad("badxx") //→ true
hasBad("xbadxx") //→ true
hasBad("xxbadxx") //→ false
*/

/*
Question 8
Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.

var atFirst = function(string){
    var firstTwo=string.slice(0,2);
    var charSpecial=string.charAt(0)+"@";
    if(string.length>=2){
        console.log(firstTwo);
    }else if(string.length==1){
        console.log(charSpecial)
    }else{
        console.log("@@");
    }
}

atFirst("hello") //→ "he"
atFirst("hi") //→ "hi"
atFirst("h") //→ "h@"
atFirst("") //→ "@@"
*/

//This example returns First = P Last = o.
//var cities = new String("Paris Moscow Tokyo");
//"First = " + cities.charAt(0) +
// "\nLast = " + cities.charAt(cities.length() - 1);


/*
//===================================
Assignment 21 - String Manipulation Tasks 

Question1
Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.
*/
/*
var sameStarChar = function (str){
   for(var i=0; i<str.length; i++){
       if(str.charAt(i)=="*" && str.charAt(i-1)==str.charAt(i+1)){
           console.log(true);
           break;
       }else if(i==str.length-1){
          console.log(false); 
       }
   } 
}
sameStarChar("xy*yzz") //→ true
sameStarChar("xy*zzz") //→ false
sameStarChar("*xa*az") //→ true
*/
/*
=======================================
Question2
We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.
*/
/*
var countTriple = function(str){
    var count=0;
    for(var i=0; i<str.length; i++){
       if(str.charAt(i)==str.charAt(i+1) && str.charAt(i+1)==str.charAt(i+2)){
           count++;
       }
    }
    console.log(count);
}
    
countTriple("abcXXXabc") //→ 1
countTriple("xxxabyyyycd") //→ 3
countTriple("a") //→ 0
*/
/*
Question3
We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.

function gHappy(str){
var condition=false;
    for(var i=0;i<str.length;i++){
        if(str[i]=="g" && str[i-1]=="g"||str[i+1]=="g"){
            condition=true;
        }else if(str[i]=="g" && str[i-1]!="g"&&str[i+1]!="g"){
            condition=false;
			break;
        }
    }console.log(condition);
}

gHappy("xxggxx") //→ true
gHappy("xxgxx") //→ false
gHappy("xxggyygxx") //→ false
*/
/*
Question4
Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

function equalIsNot(str){
    var count1=0;
    var count2=0;
    for(i=0; i<str.length; i++){
        if((str[i]+str[i+1])=="is"){
            count1++;
        }else if((str[i]+str[i+1]+str[i+2])=="not"){
            count2++;
        }
    }
    if(count1==count2){
        console.log(true);
    }else{
        console.log(false);
    }
}
equalIsNot("This is not") //→ false
equalIsNot("This is notnot") //→ true
equalIsNot("noisxxnotyynotxisi") //→ true
*/

/*
Question5
A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.

function getSandwich(str){
    var strSearch = "bread";
    var a=str.indexOf("bread");
    var b=str.lastIndexOf("bread");
        if(a!=b){
           console.log(str.slice((a+strSearch.length),b)); 
        }else{
            console.log("");
        }

}
getSandwich("breadjambread") //→ "jam"
getSandwich("xxbreadjambreadyy") //→ "jam"
getSandwich("xxbreadyy") //→ ""
*/
/*
Question6
Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.=
function endOther(str1,str2){
    var a=str1.toLowerCase();
    var b=str2.toLowerCase();
    if(a.includes(b) && a.substr(-b.length)==b){
        console.log(true);
    }else if(b.includes(a) && b.substr(-a.length)==a){
        console.log(true);
    }else{
        console.log(false);
    }
}
endOther("Hiabc", "abc") //→ true
endOther("AbC", "HiaBc") //→ true
endOther("abc", "abXabc") //→ true
*/

/*
Question7
Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.
*/
/*
function seeColor(str){
    var color1="red";
    var color2="blue";
    if(str.substr(0,color1.length)==color1){
        console.log(color1);
    }else if(str.substr(0,color2.length)==color2){
        console.log(color2);
    }else{
        console.log("");
    }
}
seeColor("redxx") //→ "red"
seeColor("xxred") //→ ""
seeColor("blueTimes") //→ "blue"
*/