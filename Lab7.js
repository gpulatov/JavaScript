
// LAB 7. Today is 8/6/18.

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
