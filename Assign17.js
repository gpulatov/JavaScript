//Question-1
//The deers in VA spend most of the day playing. In particular, they play if the temperature is between 60 and 90. Unless it is summer, then the upper limit is 100 instead of 90.
//Write a function that accempts temperature and a boolean isSummer, prints true if the deers play and false otherwise.

//squirrelPlay(70, false) → true
//squirrelPlay(95, false) → false
//squirrelPlay(95, true) → true


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
Question-2
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
Question-3
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, write a funtion that accepts the indexOfDay and isVacation and prints a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".

alarmClock(1, false); ->"7:00"
alarmClock(5, false); ->"7:00"
alarmClock(0, false); ->"10:00"
alarmClock(2,true); ->"10:00"
alarmClock(7,true); ->off
*/