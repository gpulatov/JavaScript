//******Today is 8/16/18 **************

//================================
//******Date() Method
//================================

//******How to instantiate a date?
//==============================
/*
//Creates a new date object with the current date and time
var d = new Date();
console.log(d); //Thu Aug 16 2018 09:26:46 GMT-0500 (Central Daylight Time)

//Creates a new date object as zero time plus the number.
var d = new Date(10000000000);
console.log(d); //Sun Apr 26 1970 12:46:40 GMT-0500 (Central Daylight Time)

//Creates a new date object from the specified date nad time.
var d = new Date("October 13, 2018 11:13:00");
console.log(d); //Sat Oct 13 2018 11:13:00 GMT-0500 (Central Daylight Time)

//Creates a new date object with the specified date nad time.
var d = new Date(99,5,24,11,33,30,0); 
console.log(d); //Thu Jun 24 1999 11:33:30 GMT-0500 (Central Daylight Time)

//Months are zero index
var d = new Date(2018,4,24,11,33,30); 
console.log(d); // Thu May 24 2018 11:33:30 GMT-0500 (Central Daylight Time)

// if no arguments are provided, the constructor creates a JavaScript Date Object for the current date and time according to system settings for timezone offset. 
// if at least two arguments are supplied, missing arguments are either set to first day of index month and zero (0) for others.

var d = new Date (2018, 1);
console.log(d); //Thu Feb 01 2018 00:00:00 GMT-0600 (Central Standard Time)
*/
/*
var ISOdate = new Date("2015-03-25");
console.log(ISOdate); //Tue Mar 24 2015 19:00:00 GMT-0500 (Central Daylight Time)

var shortDate = new Date("03/25/2015");
console.log(shortDate); // Wed Mar 25 2015 00:00:00 GMT-0500 (Central Daylight Time)

var longDate = new Date("March 25 2015");
console.log(longDate); // Wed Mar 25 2015 00:00:00 GMT-0500 (Central Daylight Time)

var fullDate = new Date("Wednesday March 25 2015");
console.log(fullDate); // Wed Mar 25 2015 00:00:00 GMT-0500 (Central Daylight Time)
*/



//================================================================
//****** getFullYear(), getMonth() and etc..... Methods ***********
//==================================================================

//getFullYear() method returns the year of the specified date according to local time
/*
var moonLanding = new Date ('July 20, 69 00:20:18');
console.log(moonLanding.getFullYear()); //1969

var today = new Date();
var year = today.getFullYear();
console.log(year);

//getMonth() method returns the month of the specified date according to local time

var moonLanding = new Date ('July 20, 69 00:20:18');
console.log(moonLanding.getMonth()); //6

var today = new Date();
var month = today.getMonth();
console.log(month); //7

//getDate() method returns the date of the specified date according to local time

var moonLanding = new Date ('July 20, 69 00:20:18');
console.log(moonLanding.getDate()); //20

var today = new Date();
var date = today.getDate();
console.log(date); //16

//getHours() method returns the hours of the specified date according to local time

var moonLanding = new Date ('July 20, 69 00:20:18');
console.log(moonLanding.getHours()); //0

var today = new Date();
var hour = today.getHours();
console.log(hour); //10

 //getMinutes() method returns the minutes of the specified date according to local time

var moonLanding = new Date ('July 20, 69 00:20:18');
console.log(moonLanding.getMinutes()); //20

var today = new Date();
var minute = today.getMinutes();
console.log(minute); //25

//getSeconds() method returns the seconds of the specified date according to local time

var moonLanding = new Date ('July 20, 69 00:20:18');
console.log(moonLanding.getSeconds()); //18

var today = new Date();
var second = today.getSeconds();
console.log(second); //47

//getTime() Method returns the numeric value corresponding to the time for the specified date according to universal time
var moonLanding = new Date ('July 20, 69 00:20:18');
console.log(moonLanding.getTime()); //-14236782000

var today = new Date();
var time = today.getTime();
console.log(time); //1534433451555


//getDay() Method returns the numeric value corresponding to the time for the specified date according to universal time
var moonLanding = new Date ('July 20, 69 00:20:18');
console.log(moonLanding.getDay()); //0

var today = new Date();
var time = today.getDay();
console.log(time); //4
*/


//============================================================================
// setFullYear(), setMonth(), setDate, setHours and etc..... Methods ***********
//=============================================================================
/*
//setDate() Method sets the day of the Date object relative to the beginning of the currently set month.
var event = new Date("August 19, 1975 23:15:30");
event.setDate(24);
console.log(event.getDate()); //24
console.log(event);//Sun Aug 24 1975 23:15:30 


//setFullYear() Method sets the full year for a specified date according to local time.

var event = new Date("August 19, 1975 23:15:30");
event.setFullYear(1999);
console.log(event.getFullYear()); //1999
console.log(event);//Thu Aug 19 1999 23:15:30 

event.setFullYear()


//setHours() Method sets the hours for a specified date according to local time.

var event = new Date("August 19, 1975 23:15:30");
event.setHours(20);
console.log(event);//Thu Aug 19 1975  20:21:30

event.setHours(20,21,22);
console.log(event);//Tue Aug 19 1975 20:21:22

var bigDay = new Date();
bigDay.setHours(10);
console.log(bigDay);//Thu Aug 16 2018 10:57:2


//setMinutes() Method sets the minutes for a specified date according to local time.
var event = new Date("August 19, 1975 23:15:30");
event.setMinutes(20);
console.log(event);//Tue Aug 19 1975 23:20:30

var bigDay = new Date();
bigDay.setMinutes(10);
console.log(bigDay);//Thu Aug 16 2018 10:10:41


//setMonth() Method sets the month for a specified date according to local time.
var event = new Date("August 19, 1975 23:15:30");
event.setMonth(3);
console.log(event);//Sat Apr 19 1975 23:15:30

var bigDay = new Date();
bigDay.setMonth(10);
console.log(bigDay);//Fri Nov 16 2018 11:18:26


//setSeconds() Method sets the seconds for a specified date according to local time.
var event = new Date("August 19, 1975 23:15:30");
event.setSeconds(00);
console.log(event);//Tue Aug 19 1975 23:15:00

var bigDay = new Date();
bigDay.setSeconds(10);
console.log(bigDay);//Thu Aug 16 2018 11:20:10


//setTime() Method sets the Date object to the time represented by number of milliseconds January
var event1 = new Date("August 19, 1975 23:15:30");
event.setTime(00);
console.log(event);//Tue Aug 19 1975 23:15:00

var bigDay = new Date();
bigDay.setTime(10);
console.log(bigDay);//Thu Aug 16 2018 11:20:10
*/



//=====================
// ******  TASK. ******
//====================

//Write a programm to calculate your age.
//Note: if your birthday not happened yet, do not include that year

var birthDay =new Date("07/15/2000");
var today=new Date();

var years=today.getFullYear()-birthDay.getFullYear();
birthDay.setFullYear(today.getFullYear());

if(today<birthDay){
   years--;   
}
console.log(years);


















