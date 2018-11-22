

/*
Question-1
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


/*
Question-8
The deers in VA spend most of the day playing. In particular, they play if the temperature is between 60 and 90. Unless it is summer, then the upper limit is 100 instead of 90.
Write a function that accempts temperature and a boolean isSummer, prints true if the deers play and false otherwise.

squirrelPlay(70, false) → true
squirrelPlay(95, false) → false
squirrelPlay(95, true) → true
*/

/*
function deerPlay(temp,isSummer){
    if(isSummer){
        if(temp>60 && temp<100){
            console.log("true");
        }else{
            console.log("false");
        }
    }else{
        if(temp>60 && temp<90){
            console.log("true");
        }else{
            console.log("false");
        }
        
    }
}

deerPlay(70, false);//true
deerPlay(95, false);//false
deerPlay(95, true);//true
*/

/*
Question-9
You are driving a little too fast, and a police officer stops you. Write a function to compute the result: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

caughtSpeeding(60, false) → 0
caughtSpeeding(65, false) → 1
caughtSpeeding(65, true) → 0
*/
/*
var caughtSpeeding=function(speed, isBirthday){
    if(isBirthday){
        if(speed>0 && speed<=65){
            var noTicket=0;
            console.log(noTicket);
        }else if(speed<=85){
            var smallTicket=1;
            console.log(smallTicket);
        }else{
            var bigTicket=2;
            console.log(bigTicket);
        }
    }else{
        if(speed>0 && speed<=60){
            var noTicket=0;
            console.log(noTicket);
        }else if(speed<=80){
            var smallTicket=1;
            console.log(smallTicket);
        }else{
            var bigTicket=2;
            console.log(bigTicket);
        }
    }
}
caughtSpeeding(60, false) // → 0
caughtSpeeding(65, false) // → 1
caughtSpeeding(65, true) // → 0
*/

/*
Question-10
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, write a funtion that accepts the indexOfDay and isVacation and prints a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".

alarmClock(1, false); ->"7:00"
alarmClock(5, false); ->"7:00"
alarmClock(0, false); ->"10:00"
alarmClock(2,true); ->"10:00"
alarmClock(7,true); ->off
*/