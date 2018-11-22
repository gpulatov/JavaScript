// JavaScript string Manipulation methods.

//=======================================================================
// Length of string Method.

//length method returns count of total numbers of characters.
/*
var string= "Java Script";
var x="";
var y=" ";
console.log(string.length);//11
console.log(x.length);//0
console.log(y.length);//1
*/
//Task. Declare 2 variables and assign your name and last name. Display in the console total numbers of characters.
/*
var firstName="Gulom";
var lastName="Pulatov";
console.log(firstName.length+lastName.length);
*/


//======================================================================
 //charAt() Method.

//charAt() method returns a char value at the given index number.

//var target= "End of the Java Script course-find a 110K job";
//console.log(target.charAt(11));//J
//console.log(target.charAt(5));//f

//Task.
/*
var x="Java Script";

for (i=0; i<x.length; i++){
    console.log(x.charAt(i));
}
*/


//=================================================================
//concat() Method

//concat() method combines specified string at the end of this string. It returns combined string. It is like appending another string. 
/*
var s1="Hello ";
var s2="World";
var s3= s1.concat(s2);
console.log(s3); // Hello World
*/

//Task. Create a function called passwordCreate(string1,string2). String1 and String2 should be able to entered to entered by user in runtime.

//Password should be first 3 characters of String1 and concat of second string length. Display the password in the console.
 /*
var a="";
var string1="";
var string2="";
var passwordCreate=function(string1,string2){
   string1=prompt("Enter your first word");
   string2=prompt("Enter your second word");
   for (i=0; i<string1.length; i++){
        a=a.concat(string1.charAt(i));
       if(i==2){
        break;
       }
   }
    return a.concat(string2.length);
}

var password = passwordCreate(string1, string2);
console.log(password);
*/


// Today is 8/7/18

//=========================================================
// includes() Method //

//includes() method determines whether one string may be found within another string, returning true or false.

//var str= "Hello Mike, welcome to Amazon world.";
//var n= str.includes("Mike");
//console.log(n); // true


//Task. Write a function that accepts 2 strings( str1, str2) and prints the length of the str2 if str2 is existing in str1. If it doesnot exist, print "not found"
/*
var checkedString=function(str1, str2){
    if(str1.includes(str2)){
        console.log(str2.length);
    }else{
        concole.log("not found");
    }
}
checkedString("I am a student of Cybertek school!","Cybertek");
*/


//===========================================================
//indexOf() Method

//indexOf() method returns the index within the calling String of the first occurence of the specified value starting fromIndex. Returns-1 if the value is not found.

//var str="Hello Mike, welcome to Amazon world.";
//var n = str.indexOf("Amazon");
//var m = str.charAt(35);
//console.log(n); //23
//console.log(m); // .
/*
var checkedString=function(str1, str2){
    if(str1.includes(str2)){
        console.log(str1.indexOf(str2));
    }else{
        concole.log("not found");
    }
}
checkedString("Your order confirmation number is XYZ","confirmation");
*/


//===========================================================

// replace() Method.
//replace() method returns a string replacing all the old char or CharSequence to new char or CharSequence.
//The original string will remain unchanged.


/*
  var replaced=function(s1,s2){
      
  var firstTwo=s1.charAt(0).concat(s1.charAt(1)) 
  var lastTwo =s2.charAt(s2.length-2).concat(s2.charAt(s2.length-1));
  var replaced1=s2.replace(lastTwo, firstTwo);
  console.log(replaced1);
}
  
replaced("Gulomjon","Pulatov");
replaced("Orcun","Canlilar");
*/


//===========================================================

//  search() Method. 
//search() Method searches a string for a specified value, and returns the position of the match.
/*
var str="I want to be number 1 test automation developer.";
console.log(str.search("auto")); //27
console.log(str.search("1")); //20
console.log(str.search("w")); //2
console.log(str.search(" ")); //1

// difference of indexOf() and search()
console.log(str.search("a")); //3
console.log(str.indexOf("a")); //3 /but on indexOf we can search second "a" as well
console.log(str.indexOf("a",4)); //27

//Task:
var str="In order to be a good test automation developer, I need to practice at least 2 or 3 hours a day."

if(str.search("automation")>=0){
    console.log("found");
}else{
    console.log("not found");
}
*/

//=================================================================
// slice() Method.

// slice() method extracts a section of a string and returns it as a new string.

/*
var str="The morning is upon us.";

console.log(str.slice(1,8)); //he morn
console.log(str.slice(4,-2)); //morning is upon u
console.log(str.slice(3)); //morning is upon us.
console.log(str.slice(8,15)); //ing is 
*/


// Task:
/*
 var str="In order to be a good test automation developer, I need to practice at least 2 or 3 hours a day."
 
var str2="automation";
var start= str.indexOf("automation");
var end=str.indexOf("automation")+str2.length;

if(str.slice(start,end)=="automation"){
    console.log("found");
}else{
    console.log("not found");
}
*/


//=================================================================
//  Split() Method. 

//split() method 

/* Task.

var str="In 1993, the National Center for Supercomputing Applications (NCSA), a unit of the University of Illinois at Urbana-Champaign, released NCSA Mosaic, the first popular graphical Web browser, which played an important part in expanding the growth of the nascent World Wide Web. In 1994, a company called Mosaic Communications was founded in Mountain View, California and employed many of the original NCSA Mosaic authors to create Mosaic Netscape. However, it intentionally shared no code with NCSA Mosaic. The internal codename for the company's browser was Mozilla, which stood for Mosaic killer, as the company's goal was to displace NCSA Mosaic as the world's number one web browser. The first version of the Web browser, Mosaic Netscape 0.9, was released in late 1994. Within four months it had already taken three-quarters of the browser market and became the main browser for the Internet in the 1990s. To avoid trademark ownership problems with the NCSA, the browser was subsequently renamed Netscape Navigator in the same year, and the company took the name Netscape Communications. Netscape Communications realized that the Web needed to become more dynamic. Marc Andreessen, the founder of the company believed that HTML needed a glue language that was easy to use by Web designers and part-time programmers to assemble components such as images and plugins, where the code could be written directly in the Web page markup";

var array=str.split(" ");
console.log(array);
console.log(array.length);

var counter=0;
var condition=false;
for(var i=0; i<array.length; i++){
    if(array[i]=="Netscape"){
        condition=true;
        counter++;
    }else{
        condition=false;
    }
}
if(condition=true){
   console.log("found it "+counter+" times"); 
}else{
   console.log("not found"); 
}
*/



//=====================================================================
//  substr() Method
// substr() method returns the part of string between the start index and a number of characters after it.
//Syntax: string.substr(start,length);
/*Start:
    •Required. The position where to start the extraction. First character is at index 0
    •If start is positive and greater than, or equal, to the length of the string, substr() returns an empty string.
    •If start is negative, substr() uses it as a character index from the end of the string.
    •If start is negative and larger than the length of the string, start is set to 0
•Length:
    •Optional. The number of characters to extract. If omitted, it extracts the rest of the string.
*/
/*
//substr() Method. 
var str="JavaScript";
console.log(str.substr(0,1)); // J
console.log(str.substr(1,0)); // " "
console.log(str.substr(-1,1)); // t
console.log(str.substr(1,-1)); // " "
console.log(str.substr(-3)); // ipt
console.log(str.substr(1)); // avaScript
console.log(str.substr(-20,2)); // Ja
console.log(str.substr(20,2)); // " "
console.log(str.substr(-2)); //pt
*/


//=================================================================
// substring() Method

// substring() method extracts characters from indexStart up to, but not including indexEnd.
//Syntax: string.substring(indexStart,indexEnd);
/*
var str = "Hello world!";

console.log(str.substring(0,1)); //H
console.log(str.substr(0,1)); //H

console.log(str.substring(1,0)); //H
console.log(str.substr(1,0)); //" "

console.log(str.substring(0,6)); //Hello
console.log(str.substr(0,6)); //Hello

console.log(str.substring(4)); //o world!
console.log(str.substr(4));    //o world!

console.log(str.substring(4,7)); //o w
console.log(str.substr(4,7)); // o world

console.log(str.substring(7,4));//o w
console.log(str.substr(7,4));// orld
*/


//Task
/*
var str ="JavaScript";

console.log(str.substring(str.length-4,2));//vaSc
console.log(str.substring(2,3));           //v
console.log(str.substring(str.length,2));//vaScript
*/


//==================================================================
// toLowerCase()  Method.
//toLowerCase()  method returns the calling string value converted to lowercase.

// Syntax:str.toLowerCase()
/*
var str= "JavaScript";
console.log(str.toLowerCase());// javascript
*/

//======================================================================
// toUpperCase()  Method.
//toUpperCase()  method returns the calling string value converted to uppercase.

// Syntax:str.toUpperCase()
/*
var str= "JavaScript";
console.log(str.toUpperCase());// JAVASCRIPT
*/


/*
//Task:

//Whrite a programm that converts second and fifth character of the string to uppercase.

var string = function(str){
var concat="";
for(var i=0; i<str.length; i++){
    if(i==2 || i==5){
       var letter=str.charAt(i).toUpperCase();
    }else{
        letter=str.charAt(i);
    }
    concat+=letter;
}
console.log(concat); 
}
string("Javascript");// JaVasCript
string("Hello world");// HeLlo world
string("Cybertek online"); //CyBerTek online
*/


//=================================================================
//  trim() Method.
// trim() method removes whitespases from both ends of a string.
/*
var str = "    JavaScript";
console.log(str.trim()); //JavaScript

var str = "JavaScript      ";
console.log(str.trim()); //JavaScript

var str = "    JavaScript    ";
console.log(str.trim()); //JavaScript

var str = "    Jav  aS  cri  pt   ";
console.log(str.trim()); //Jav  aS  cri  pt
*/


//Task
//Write a program to display |342| from given string. 
/*
var str = "   342   ";
console.log("|"+str.trim()+"|");//|342|
*/
