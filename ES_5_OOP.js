//Today is 8/29/18. ES5 OOP.

// In java we created classes and put methods inside and inherited these methods by using extends.

//JS(ES5) does not have classes but have PROTOTYPES

//It is not exactly same as class, because you do not create instance of it, but you can create methods that affect multiple objects by using isPrototypeOf
//function Bicycle(cadenceP, speedP, gearP, tirePressureP){
//    this.cadence= cadenceP;
//    this.speed = speedP;
//    this.gear = gearP;
//    this.tirePressure= tirePressureP;
//    
//    this.inflateTires = function(){
//        return this.tirePressure+=3;
//    }
//}
//
//var b1 = new Bicycle(50, 20, 4, 25);
//b1.inflateTires();
//
//function Mechanic(name){
//    this.name = name;
//}
/*
//When you create object, __proto__ is created by JS Engine automaticly.
function foo(){}
var obj = new foo();
console.log(obj);

//Set a property to foo prototype and access it from obj

foo.prototype.test= "this is an object";
console.log(obj.__proto__.test);//this is an object

obj.__proto__.hello = "Test is passed and this is prototype object property";
console.log(obj.hello);//Test is passed and this is prototype object property

obj.test = "this is object property";
console.log(obj.test);//this is object property
*/

/*
function Employee(nameP){
    this.name=nameP;
}
var empl1 = new Employee("Mike");
var empl2 = new Employee("Smith");

Employee.prototype.playPranks = function(){
    console.log("Lets play together")
}

empl1.playPranks();
empl2.playPranks();
*/

//In class modules, you have to to define all method upFront. 
//In prototype, you can put things at runtime. 
//The minute you add that extra property, every object that was created from the employee as a constructor, even the ones that were created before you added that on the property would still work. Because the prototype look up happens at runtime. 

/*
var simple = {};
var obj = new Object();

console.log(simple.__proto__ === obj.__proto__);// here function costructor comes from JS directly that name always will be Object.
console.log(simple.__proto__ === Object.prototype);
console.log(obj.__proto__ === Object.prototype);
*/

//=================================================
/*
function Employee(){}
var emp = new Employee();

// here if we put only '.' it means we accessing to property.
emp.test; // here programm check first object, if programm could not find it goes to check function prototype, if could not find it goes to Object's prototype.

//here if we put '.' and give value to property it means we adding to our object new property.
emp.prop = "This is object property";
emp.__proto__.parentProp = "This is function prototype property";
console.log(emp.__proto__.__proto__ === Object.prototype);
*/
//=============================================
/*
Object.prototype.grandParentProp = "Grand Parent";

function foo(){}
var temp =  new foo();
console.log(temp.grandParentProp);// since Object prototype is defined with value it relates to all objects with any name in programm.

console.log(Object.prototype.__proto__);// null
*/

//function Employee(nameP){
//    this.name= nameP;
//}
//
//Employee.prototype.getName = function(){
//    return this.name;
//}
//
//var empl1 = new Employee("Mike");
//console.log(empl1.getName());
//
////we have employee object and some behavior, also we have manager object. Managers are eployee too and have common properties but they have their own special behavior as well.
//
//function Manager(nameP, deptP){
//    this.name= nameP;
//    this.dept= deptP;
//}
//
//Manager.prototype.getDept = function(){
//    return this.dept;
//}
//
//var mgr = new Manager("Michael", "Sales");
//console.log(mgr.getDept());// sales
////console.log(mgr.getName());// mgr is not function, because this is not defined in Manager. prototype and mgr object has not access to Employee prototype.
//
//// First way is to share is put all common properties in the Top level which Object prototype.
//// Second way is Manager's prototype __proto__ points to Employee's prototype not object's prototype
//
//mgr.__proto__.__proto__ = Employee.prototype; // here we assigning Employee's prototype directly to Manager's prototype and giving access to object named mgr to get methods from Employee prototype.
//
//console.log(mgr.getName());
/*
let name, progrLanguage, school, startDate, companyName, workStartDate, job_title, salary;
name = prompt("What is your full name?");
progrLanguage = prompt("What is your main programming language?");
school = prompt("Where did you start your study?");
startDate = prompt("When did you start school?");
companyName = prompt("Where will you start to work?");
workStartDate = prompt("When will you start to work?");
job_title = prompt("What is your job position?");
salary = prompt("How much will be your salary?")

console.log(`My name is ${name}. I started to study ${progrLanguage} in ${school} on ${startDate}. I will start working in ${companyName} on ${workStartDate} as a ${job_title} with a salary of ${salary}`);
*/

//let weight, height, convertedWeight, convertedHeight, calBMI;
//weight = parseInt(prompt("What is weight in lbs?"));
//height = parseInt(prompt("What is height in inches?"));
//convertedWeight = parseFloat(weight * 0.545);
//convertedHeight = parseFloat(height * 0.0254);
//calBMI = parseInt(convertedWeight/(convertedHeight*convertedHeight));
//console.log(calBMI);
/*
let num;

function evenOrOddNum (num) {
    if (num%2==0 && num>0) {
        console.log(`Your entered ${num} and it is even number`);
    }else if (num%2!=0 && num>0) {
        console.log(`Your entered ${num} and it is ODD number`);
    }else {
        alert(`Your entered num is negative or equal to zero or NaN, please enter valid number`);
    }
}
evenOrOddNum(num = +prompt("Please enter your number let to now users it is ODD or EVEN!"));
*/
/*
let num;

function num_is_OK (num) {
    if (num%2==0 && num%3==0 && num>0) {
        console.log(`Your entered ${num} and it is OK`);
    }else if ((num%2!=0 || num%3!=0) && num>0) {
        console.log(`Your entered ${num} and it is NOT OK`);
    }else {
        alert(`Your entered num is negative or equal to zero or NaN, please enter valid number`);
    }
}
num_is_OK(num = +prompt("Please enter your number let to now users it is OK or NOT OK!"));
*/
/*
let num;

function divisibleByTwo_Three (num) {
    if (num%2==0 && num%3==0 && num>0) {
        console.log(`Your entered ${num} and it is divisible by 2 and 3`);
    }else if (num%2==0 && num%3!=0 && num>0) {
        console.log(`Your entered ${num} and it is divisible by 2`);
    }else if (num%2!=0 && num%3==0 && num>0) {
        console.log(`Your entered ${num} and it is divisible by 3`);
    }else {
        alert(`Your entered num is not divisible by 2 or 3, negative or equal to zero or NaN, please enter valid number`);
    }
}
divisibleByTwo_Three(num = +prompt("Please enter your number!"));
*/

/*
let num;

function divisibleBy456 (num) {
    if (num%4==0 && num%5==0 && num%6==0 && num>0) {
        console.log(`Your entered ${num} and it is good number`);
    }else if (num%4!=0 || num%5!=0 || num%6!=0 && num>0) {
        console.log(`Your entered ${num} and it is not good number`);
    }else {
        alert(`Your entered num is not divisible by 4,5 and 6, negative or equal to zero or NaN, please enter valid number`);
    }
}
divisibleBy456(num = +prompt("Please enter your number!"));
*/
/*
let num;

function numberBetween0_100 (num) {
    if (num%2==0 && num>0 && num<=100) {
        console.log(`Your entered ${num} and it is good number`);
    }else if (num%2!=0 || num<0 || num>100) {
        console.log(`Your entered ${num} and it is not good number`);
    }else {
        alert(`Your entered num is equal to zero or NaN, please enter valid number`);
    }
}
numberBetween0_100(num = +prompt("Please enter your number!"));
*/
/*
 let num1, num2, num3;
num1 = +prompt("Please enter your first number!");
num2 = +prompt("Please enter your second number!");
num3 = +prompt("Please enter your third number!");
if (num1>50 || num2>50 || num3> 50) {
     console.log(`It is good number`);
}else {
    console.log(`It is not good number`);
}
*/
//let num1, num2, num3;
//num1 = +prompt("Please enter your first number!");
//num2 = +prompt("Please enter your second number!");
//num3 = +prompt("Please enter your third number!");
//if (num1 > 0 && num2 > 0 && num3 > 0 && num1 % 2 == 0 && num2 % 2 == 0 && num3 % 2 == 0) {
//    console.log(`It is good number`);
//} else {
//    console.log(`It is not good number`);
//}

//1. 
//n>m
// for(let i=m; i<n; i++) {
//     /*here your code
//     *
//     */
// };

/*
//2.
for(let i=1; i<=100; i++) {
    console.log(i);
};

//3.
for(let i=1; i<=10; i++) {
    if(i==1) {
        console.log(`${i} mile is ${1.6*i} kms`);
    }else {
        console.log(`${i} miles is ${parseFloat(1.6*i).toFixed(2)} kms`);
    }
};

//4.
for(let i=30; i<=200; i++) {
    if(i%4==0 && i%6==0) {
        console.log(i);
    };
};

//5.
for(let i=1; i<=10; i++) {
    console.log(`${6} X ${i} = ${6*i}`);
};
*/
//===============================================================
//2.
// let arr = new Array(10);
// let arr2 = [];
// let sum = 0, sum2 = 0, count = 0;
// let x, x2;
// for(element of arr) {
//     element = parseInt(prompt("Please enter numbers for elements of Array!"));
//     arr2.push(element);
//     sum +=element;
// }
// x = sum/arr2.length;
// for(index of arr2) {
//     if(index >= x) {
//         count++;
//         sum2 += index;
//     }
// }
// x2 = sum2/count;
// console.log(x2);
// //===============================================
// //3.
// let arr = [];
// let num;
// while(arr.length<20) {
//     num = parseInt(prompt("Please enter numbers for elements of Array!"));
//     if(num>=1 && num<=20) {
//         arr.push(num);
//     } 
// }
// console.log(arr);



function calcSum(a, b) {
    return total = a+b;
}
function calcSum (a, b, c) {
    return total = a+b+c;
}

console.log(calcSum(10, 5));
console.log(calcSum(10, 10, 20));





