//====================================================
// Today is 8.13.18.    ES5  Object
//=======Object Properties========
//Objects contain properties and methods/functions:
/*
var plan1Name="Basic";
var plan1Price=3.99;
var plan1Space=100;
var plan1Data=1000;
var plan1Pages=10;

var plan2Name="Professional";
var plan2Price=5.99;
var plan2Space=500;
var plan2Data=5000;
var plan2Pages=50;

var plan2Name="Professional";
var plan2Price=9.99;
var plan2Space=2000;
var plan2Data=20000;
var plan2Pages=500;

//create object
*/
/*
var plan1={// plan1 is object name.
    name:"Basic", // name is 1st key name, "Basic" is value.
    price:3.99,   // price is 2nd key name, 3.99 is value.
    space:100,    // space is next key name, 100 is value
    data:1000,
    pages:10
};
console.log("the cost of the "+plan1.name+" package is $"+plan1.price+ " per month.");
*/
/*
var plan2={// plan1 is object name.
    name:"Professional", // name is 1st key name, "Professional" is value.
    price:5.99,   // price is 2nd key name, 5.99 is value.
    space:500,    // space is next key name, 500 is value
    data:5000,
    pages:50
};
console.log("the cost of the "+plan2.name+" package is $"+plan2.price+ " per month.");
*/
//How to access a property? To access a property in an object, start with the object name, follow it with a period and then use the property name.

//Syntax: objectName.keyName;

//=======================================================
//Task.

//var fiat = {
//    make:"Fiat",
//    model:500,
//    year: 1957,
//    color:"Medium Blue",
//    passengers:2,
//    convertible:false,
//    milage:8800
//};
//
//if(fiat.milage<5000 && fiat.make=="Fiat"){
//    console.log("Car is "+fiat.make+" and buy it");
//}else{
//    console.log("Do not buy it");
//}


//How to add a property to object?
// If the current month is July, August or December customer gets a 20 percent discount on the hosting plan.
/*
plan1.discountMonths=[7,8,12];
console.log(plan1);
//Output will be:
// {name: "Basic", price: 3.99, space: 100, data: 1000, pages: 10, …}
//data:1000
//discountMonths:(3) [7, 8, 12]
//name:"Basic"
//pages:10
//price:3.99
//space:100
//__proto__:Object


//How to change a value.
plan1.price=4.99; // in this case it changes price value 3.99 to 4.99

//How to delete a property.
delete plan1.data; // in this case it delete data property from object.

console.log(plan1);// {name: "Basic", price: 4.99, space: 100, pages: 10, discountMonths:(3) [7, 8, 12]}

//How to check if property in object or not?
console.log("data" in plan1);// false // because we have already deleted that property from our object.
console.log("price" in plan1);//
*/
/*
//==============================================================
//Task. Check if John's salary is less than or equal to 100, if it is increase it to 120. Also, check if Adam salary is included. If not, add his salary too. His salary is 150.

var salaries={
    john:100,
    Ann:160,
    Pete:130
};

if(salaries.john<=100){
    salaries.john=120;
}

if("Adam" in salaries==false){ // here we checked if property name "Adam" is in our object or not. If it not exist it gives result false, than false==false it goes into statement.
    salaries.Adam=150;// here it adds property name "Adam" with value 150 to our object and it will be one of property of object
}

console.log(salaries);
*/

//==================================================
// Task.

//Display: "My Honda Engine Size is 2.2 and hp is 500"
/*
var myHonda = {
    color:"red",
    wheels:4,
    engine:{ // here engine is inner object
        cylinders:4, // cylinders and size are properties of inner object
        size:2.2     // to access inner object properties outerObject.innerObject.property
    },
    hp:[300,500,100]
};
console.log("My Honda Engine Size is "+myHonda.engine.size+" and hp is "+myHonda.hp[1]);
*/


//==============================================================
// Adding behavior to object
//============================================================
/*
var car = {
    make: "honda",
    model: "Accord",
    drive: function(){
        console.log("I am driving");
    }
}
car.drive();
*/
/*
var plan1 = {
name: "Basic",
data:1000,
discountMonths: [7, 8, 12],
pages:10,
price:3.99,
space:100,
calcAnnual: function (percentDisc){
    var bestPrice=plan1.price;
    for(var i=0; i<plan1.discountMonths.length; i++){
            if(this.discountMonths[i]==7 || this.discountMonths[i]==8){
                bestPrice=this.price*percentDisc;
            }
        }
        return bestPrice*12;
    }    
};

// if user sign up in certain months, he gets discount for the entire year
//if user signs up for the basic plan in July or August he gets 20% off.

 
var x=plan1.calcAnnual(0.75);
console.log(x);
*/

/*

var plan1 = {
   name: "Basic",
   price:3.99,
   space:100,
   data:1000,
   pages:10,
   discountMonths: [7,8,12]
};

//if user signs up in certain months, he gets discount for //the entire year.
// If user signs up for the basic plan in July, or August //he gets 20% off.

function calculateAnnual (percentDisc){
   var bestPrice = plan1.price;
   for(var i=0; i<plan1.discountMonths.length; i++){
       if(plan1.discountMonths[i]==7 || plan1.discountMonths[i]==8){
           bestPrice = plan1.price*percentDisc;
       }
   }
   return bestPrice*12;
}

var annualPrice = calculateAnnual(0.80);
console.log(annualPrice);
*/

/*
var plan1 = {
    name: "Basic",
    price:3.99,
    space:100,
    data:1000,
    pages:10,
    discountMonths: [7,8,12],
    calculateAnnual : function (percentDisc){
    
        var bestPrice = plan1.price;
        for(var i=0; i<plan1.discountMonths.length; i++){
            if(plan1.discountMonths[i]==7 || plan1.discountMonths[i]==8){
            bestPrice = plan1.price*percentDisc;
            }
        }
        return bestPrice*12;
    }
};

var annualPrice = plan1.calculateAnnual(0.85);
console.log(annualPrice);
*/

/*
var song = {
    name: "Walk This Way",
    artist: "Run-D.M.C",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: false,
    play: function () {
        if (!this.playing) {
            this.playing = true;
            console.log("Playing " + this.name + "by " + this.artist);
        }
    },
    pause: function () {
        if (this.playing) {
            this.playing = false;
        }
    }
}

song.play();
song.pause();
*/


//=======================================
//Task
//Create an object includes following properties and methods:

/*
var personal = {
    name: "Gulom",
    lastName: "Pulatov",
    yearOfBirth: 1982,
    job: "SDET",
    isMarried: true,
    family: ["wife","son","dighter"],
    calculateAge: function(){
            var age=2018-this.yearOfBirth;
            return age; // return function gives us use this age anywhere.
    }
};

var myAge=personal.calculateAge();
console.log(myAge);
*/

/*
//=======================================================
//            for .... in statement
//=======================================================
var car = {
    make: "Ford",
    model: "Mustang",
    year: 1955,
    color: "black",
    milage: 281341
};

for(x in car){
    console.log(x+": "+car[x]);
}


//================================================
//Task

var num = {
    a: 1,
    b: 2,
    c: 3
};
var a="";
for(x in num){
    a=a+num[x]
}
console.log(a);
*/

/*
===========================================
Create object
============================================
var car = {};
car.make="Honda";
car.model="Civic";
car.mileage=20000;
car.color="red";

car.drive=function(){
    console.log("Driving");
}

console.log(car);

for(var pr in car){
    console.log(car[pr]);
}
*/


//================================================
// Create new object
//===============================================
//var car = new Object();
//car.make="Honda";
//car.model="Civic";
//car.mileage=20000;
//car.color="red";
//
//car.drive=function(){
//    console.log("Driving");
//}
//console.log(car);


//===============================================
// Object Constructor Function
//===============================================
//Object constructors can use a function as a template for creating objects. First create the template with the object's properties and methods.
//this keyword is used instead of th object name to indicate that the property or method belongs to the object that this function creates.
/*
function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function(){
        return this.rooms-this.booked;
    };
}

//Based on template we can create many Objects.

var quayHotel = new Hotel("Quay", 40, 25);
var hiltonHotel = new Hotel("Hilton", 80, 50);
*/
/*
function Person(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

var person1 = new Person("John", "Mike", 20);
var person2 = new Person("Mike", "John", 25);
var person3 = new Person("Kevin", "Eric", 30);
var person4 = new Person("Eric", "Kevin", 32);

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
*/

//***** Adding a property and Method to constructor.*************



//========= TASK. ==========
/*
function Rectangle(Width, Height){
    this.rectWidth = Width;
    this.rectHeight = Height;
    this.area = function(){
        return this.rectWidth*this.rectHeight;
    }
}

var Rec1 = new Rectangle(5,9);
var Rec2 = new Rectangle(10,15);
var Rec3 = new Rectangle(20,9);

console.log(Rec1.area());
console.log(Rec2.area());
console.log(Rec3.area());
*/
/*
function plan(name, price, space, data, pages, discountedMonth){
    this.planName = name;
    this.monthlyRate = price;
    this.diskSpace = space;
    this.dataTransfer = data;
    this.sitePages = pages;
    this.discountMonth = discountedMonth;
    this.annualPrice = function(percentDisc){
        var bestPrice = this.monthlyRate;
        for(var i=0; i<this.discountMonth.length; i++){
            if(this.discountMonth[i]==7 || this.discountMonth[i]==8 || this.discountMonth[i]==12){
            bestPrice = this.monthlyRate*percentDisc;
                break;
            }
        }
        return bestPrice*12;
    }
}

var pl1 = new plan("Basic", 3.99, 100, 1000, 10, [7,8]);
var pl2 = new plan("Professional", 5.99, 500, 5000, 50, [7,8,12]);
var pl3 = new plan("Ultimate", 9.99, 2000, 20000, 500, [7,8]);

console.log(pl1);
console.log(pl1.annualPrice(0.85));
console.log(pl2.annualPrice(0.80));
console.log(pl3.annualPrice(0.95));
*/


//=====================================
//****** isNaN() Method checking value is a not number.
//======================================
/*
var a="apple";
console.log(isNaN(a)); //true

var b="23";
console.log(isNaN(b)); //false
console.log(typeof(b));// string

var c="abc23";
console.log(isNaN(c)); //true

var d=" ";
console.log(typeof(d));
console.log(isNaN(d)); //false

var e=23;
console.log(typeof(e));
console.log(isNaN(e)); //false
*/


//=====================================
//****** toFixed() Method *************
//======================================
/*
var a = 213.73145;
console.log(a.toFixed()); //214

var b = 213.73145;
console.log(b.toFixed(3)); //213.731

var c = 213.73145;
console.log(c.toFixed(2)); //213.74
*/


//======================================
//****** toPrecision() Method *********
//======================================
/*
var a = 13.3714;
console.log(a.toPrecision()); //13.3714
console.log(a.toPrecision(2)); //13
console.log(a.toPrecision(3)); //13.4

var b = 0.0016588;
console.log(b.toPrecision()); //0.0016588
console.log(b.toPrecision(2)); //0.0017
console.log(b.toPrecision(3)); //0.00166
*/

//======================================
//****** toExponential() Method *********
//======================================
/*
var c = 123456;
console.log(c.toExponential()); // 1.23456e+5

var c = 123.45;
console.log(c.toExponential()); // 1.2345e+2
*/


//Today is 8/15/18
//======================================
//****** toString() Method *********
//======================================
//****** toString() Method converts a number to a string
/*
var num=15;
var str = num.toString();
console.log(typeof(num)); //number
console.log(typeof(str)); //string
*/

//====================================
//Task.
/*
var S1="dfgsdA08awq #23423wefa^$#saaag5345sfs";
var numCount=0;
var NaNCount=0;
for(var i=0; i<S1.length; i++){
    if(isNaN(S1.charAt(i))){
        NaNCount++;
    }else{
        numCount++;
    }
}
console.log(NaNCount);
console.log(numCount);
*/

//======================================
//****** Math.round() Method *********
//======================================
// rounds number to the nearest integer
/*
var a =Math.round(2.60);
console.log(a); //3

var a =Math.round(2.50);
console.log(a); //3

var a =Math.round(2.49);
console.log(a); //2

var a =Math.round(-2.50);
console.log(a); //-2

var a =Math.round(-2.49);
console.log(a); //-2

var a =Math.round(-2.60);
console.log(a); //-3
*/

//======================================
//****** Math.sqrt() Method *********
//======================================
// returns square root of positive number
/*
var a = Math.sqrt(0);
console.log(a); //0

var a = Math.sqrt(1);
console.log(a); //1

var a = Math.sqrt(64);
console.log(a); //8

var a = Math.sqrt(-9);
console.log(a); //NaN
console.log(isNaN(a)); //true

var a = Math.sqrt(9);
console.log(a); //3
*/

//======================================
//****** Math.floor() Method *********
//======================================
// rounds number down to the nearest integer
/*
var a = Math.floor(0.70);
console.log(a); //0

var a = Math.floor(0.40);
console.log(a); //0

var a = Math.floor(5);
console.log(a); //5

var a = Math.floor(-5.2);
console.log(a); //-6

var a = Math.floor(-5.9);
console.log(a); //-6

var a = Math.floor(5.3);
console.log(a); //5
*/

//======================================
//****** Math.ceil() Method *********
//======================================
// rounds number up to the nearest integer
/*
var a = Math.ceil(0.70);
console.log(a); //1

var a = Math.ceil(0.40);
console.log(a); //1

var a = Math.ceil(5);
console.log(a); //5

var a = Math.ceil(-5.2);
console.log(a); //-5

var a = Math.ceil(-5.9);
console.log(a); //-5

var a = Math.ceil(5.2);
console.log(a); //6
*/

//======================================
//****** Math.random() Method *********
//======================================
/*
// returns a random number between 0 and 1
var a = Math.random();
console.log(a); 

// returns a random number between 1 and 10
var a = Math.random()*10+1;
console.log(Math.round(a)); 

// returns a random number between 1 and 100
var a = Math.random()*100+1;
console.log(Math.round(a)); 
*/

//=======================
//Task.
/*
var a = Math.random()*200;
var b = Math.round(a);
if(b>100){
    console.log("Random num is "+b+" and it is greater than 100");
}else{
    console.log("Random num is "+b+" and it is less or equal to 100");
}
*/



