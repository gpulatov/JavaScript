/*
// Logical AND
console.log(true&&true);
console.log(true&&false);
console.log(false&&3==3);

// Logical OR

console.log(true||true);
console.log(true||false);
console.log(true||(3==4));

var applesCount=20;
var orangesCount=30;
var pearsCount=30;

var comp=applesCount<orangesCount || orangesCount>=pearsCount;
console.log(comp);


var outsideWeather;
var Degree;
outsideWeather="Shiny";
Degree=70;
var comp2=(!(outsideWeather=="Raining" || Degree==70))
console.log(comp2);
*/

/* 
var b=2;
var res= ++b == 2 || --b == 2 && --b ==2; 
console.log(res);

3=2 or (2=2 && 1=2)
True AND False ----> false
false OR false ----> false 
console.log(res);
result false
*/

/*
var x=true, z=true;
var y=20;
x=(y!=10)||(z=false);
true or false ---> true
*/


//Today is 7/18/18
/*
var name1, name2, age;

name1=prompt("What is you first name");
name2=prompt("What is you last name");
age=parseInt(prompt("When were you born?"));
age=2018-age;
console.log("Hi, my name is "+name1+" "+name2+","+" and my age is "+age+". Nice to meet you !");


var Area, r, PI;
PI=3.14;
r=parseInt(prompt("Please enter radius of circle"));
Area=r*r*PI;
console.log("Your circle radius is "+r+" and the area of the circle is "+Area);


var empl1Hour,empl1Rate,empl2Hour, empl2Rate;
empl1Hour=parseInt(prompt("Please first employee enter worked hours for this week"));
empl1Rate=parseInt(prompt("Please first employee enter your hourly payrate"));
empl2Hour=parseInt(prompt("Please second employee enter worked hours for this week"));
empl2Rate=parseInt(prompt("Please second employee enter your hourly payrate"));
empl1Earning=empl1Hour*empl1Rate;
empl2Earning=empl2Hour*empl2Rate;
compare=empl1Earning >= empl2Earning;
console.log("Empl1 earning is more than empl2: "+compare);
*/

var m=9, n=1, x=0;
m--;
n=n+2;
x=x+m+n;
console.log(x);