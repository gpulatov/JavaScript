/*
var day=["Sunday","Monday","Tuesday","Wednesday","Thusrday","Friday","Saturday"];

var alarmClock=function(num, isVacation){
    if(isVacation){ 
        if(day.indexOf("Sunday")==num || day.indexOf("Saturday")==num){
            console.log("off");
        }else{
            console.log("10:00");
        }
    }else{
        if(day.indexOf("Sunday")==num || day.indexOf("Saturday")==num){
            console.log("10:00");
        }else{
            console.log("7:00");
        }
    }
}
alarmClock(1, false);// ->"7:00"
alarmClock(5, false);// ->"7:00"
alarmClock(0, false);// ->"10:00"
alarmClock(2,true);// ->"10:00"
alarmClock(6,true);// ->off





Question 1
var sum28 = function(array){
    var counter=0;
    for(var i=0; i<array.length; i++){
        if(array[i]==2){
            counter++;
        }
    }
    if(counter==4){
        console.log("true");
    }else{
        console.log("false");
    }
}
//Sample Output:
sum28([2, 3, 2, 2, 4, 2]);// - >true
sum28([2, 3, 2, 2, 4, 2, 2]);// - >false
sum28([1, 2, 3, 4]);// - >false
*/

/*
Question-2
Write a function that accepts an array and prints true if the number 1's is gretaer than the number 4's
 
*/
/*
var more1Than4 = function(array){
    var counter1=0;
    var counter2=0;
    for(var i=0; i<array.length; i++){
        if(array[i]==1){
            counter1++;
        }else if(array[i]==4){
            counter2++;
        }
    }
    if(counter1>counter2){
        console.log("true");
    }else{
         console.log("false");
    }
}
//Sample Output:
more1Than4([1, 4, 1]); //->true
more1Than4([1, 4, 1, 4]); // ->false
more1Than4([1, 1]); //->true
*/

/*
==========================================================
Question-3
Write a function that acccepts a number and create and prints a new array of length number, containing the numbers 0,1,2,...number-1.

*/
/*
var fizzArray = function(number){
    var array=[];
    for(var i=0; i<number; i++){
       array.push(i); 
    }
    console.log(array);
}
//Sample Output:
fizzArray(4) //→ [0, 1, 2, 3]
fizzArray(1) //→ [0]
fizzArray(10) //→[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

