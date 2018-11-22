//Write a function that accepts a string and a non negative number, and 
//prints a larger string that is number copies of the original String
//•
//stringTimes
//("Hi", 2) → "
//HiHi
//"
//•
//stringTimes
//("Hi", 3) → "
//HiHiHi
//"
//•
//stringTimes
//("Hi", 1) → "Hi"

//var string=prompt("Enter your string");
//var number=prompt("Enter your num");
//
//var stringTimes=function(string, number){
//    var counter="";
//    for(var i=0; i<number; i++){
//        counter+=string; 
//    }return counter;
//}
//var x=stringTimes(string, number);
//console.log(x);
//

//or 
// second option.
/*
var stringTimes=function(string, number){
    var counter="";
    for(var i=0; i<number; i++){
        counter+=string; 
    }return counter;
}
var x=stringTimes("apple", 4);
console.log(x);
*/

// Question 2.
/*
The number 6 is a truly great number. Write a function that accepts num1 
and num2, prints true if either one is 6. Or if their sum or difference is 6.
•love6(6, 4) → true
•love6(4, 5) → false
•love6(1, 5) → true
•love6(12, 6);->true
*/
/*
var optionsOfSix=function (num1, num2){
    
    if(num1==6 || num2==6 || (num1-num2)==6 ||(num2-num1)==6){
        condition=true;
    }else{
        condition=false;
    }return condition;
}
console.log(optionsOfSix(4,8));
console.log(optionsOfSix(14,8));
console.log(optionsOfSix(2,8));
console.log(optionsOfSix(20,8));
console.log(optionsOfSix(6,5));
console.log(optionsOfSix(2,6));
*/


/*
Question-3
We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Write a function that accepts a number and prints true if the given number is special.

specialEleven(22) → true
specialEleven(23) → true
specialEleven(24) → false
*/
/*
var specialEleven=function(number){
    
    if(number>0 && (number%11==0 || number%11==1)){
        console.log("true");
    }else{
        console.log("false");
    }
}
specialEleven(22);
specialEleven(23);
specialEleven(24);
specialEleven(20);
specialEleven(34);
*/


/*
Question-4
You and your date are trying to get a table at a restaurant. The parameter "yourStyle" is the stylishness of your clothes, in the range 0..10, and "dateStyle" is the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe). 
Write a function that accepts yourStyle and dateStyle and prints the result

dateFashion(5, 10) → 2
dateFashion(5, 2) → 0
dateFashion(5, 5) → 1
*/
/*
var dateFashion=function(myStyle, dateStyle){
    
    if ((myStyle>=8 && myStyle<=10) || (dateStyle>=8 && dateStyle<=10)){
        console.log(2);
    }else if((myStyle>=0 && myStyle<=2) || (dateStyle>=0 && dateStyle<=2)){
        console.log(0);
    }else{
        console.log(1);
    }
}
dateFashion(5,10);
dateFashion(5,2);
dateFashion(5,6);
*/

/*
Question-5
Write a function that accepts an array and prints the number of 9 s in the array

arrayCount9([1, 2, 9]) → 1
arrayCount9([1, 9, 9]) → 2
arrayCount9([1, 9, 9, 3, 9]) → 3
*/
/*
arrayCount9=function(Array){
   var timesOf9=0;
    for(var i=0; i<Array.length; i++){
    if(Array[i]==9){
        timesOf9+=1;
    }
  }console.log(timesOf9);
}

arrayCount9([1,2,9]);
arrayCount9([1,9,9]);
arrayCount9([1,9,9,3,9]);
*/

/*
Question-6
When chipmonks get together for a party, they like to have cigars. A chipmonk party is successfull when the number of cigars is between 40 and 60. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Write a function that accepts number of cigars and a boolean for weekend, and prints true if the party with the given values is successful, or false otherwise.

cigarParty(30, false) → false
cigarParty(50, false) → true
cigarParty(70, true) → true
*/
/*
var cigarParty = function(num, isWeekend){
    if(isWeekend){
        if(num>40){
          console.log("true");  
        }else{
          console.log("false");    
        } 
    }else{
        if(num>40 && num<60){
            console.log("true");
        }else{
            console.log("false");
        }
    }
}
cigarParty(30, false); //→ false
cigarParty(50, false); //→ true
cigarParty(70, true); //→ true
*/


/*
Question-7
Write a function that accepts an array and prints true if the first instance of "x" in the array is immediately followed by another "x". if array doesnt have "x", print "not found"

doubleX(["a","x","x","b","b"]) → true
doubleX(["a","x","a","x","a","x"]) → false
doubleX(["x","x","x","x","x"]) → true
doubleX(["a","a"]); -> not found
*/
/*
condition=false;
var doubleX=function(array){
    
    for(var i=0; i<array.length; i++){
        
      if(array[i]=="x" && array[i+1]=="x"){
          console.log(true);
          break;
      }else if(array[i]=="x" && array[i+1]!="x"){
         console.log(false);
         break;
      }else if(array[i]!="x" && array[i+1]!="x"){
          console.log("not found");
         break;
      }   
   }
}
doubleX(["a","x","x","b","b"])// → true
doubleX(["a","x","a","x","a","x"])// → false
doubleX(["x","x","x","x","x"]) //→ true
doubleX(["a","a"]); //-> not found
*/
