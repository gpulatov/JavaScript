//Today is 8/30/2018  ******** ES6/ES2015 ******* (OOP) Object Oriented Programming
//                    ******** Updates on ES6 ********

/*

What is new?
    - Variable Declarations with 'let' and 'const';
    - Template Strings;
    - Arrow Functions;
    - Arrays;
    - Spread Operator;
    - Maps;
    - Classes and Subclasses;

*/
//===========================================================
//****** Variable Declarations with 'let' and 'const'*******


//ES5
//var nameES5 = "Mike Smith";
//var ageES5 = 23;
//nameES5 = "Mike Miller";
//console.log(nameES5); //Mike Smith


//ES6
//const nameES6 = "Mike Smith";
//let ageES6 = 23;
//
//console.log(nameES6+" is "+ageES6); //Mike Smith is 23
//
//nameES6 = "Mike Miller";
//console.log(nameES6+" is "+ageES6); //Uncaught TypeError: Assignment to constant variable.


//1.
// const: if value is not changing and we cannot reassign new value to variable. It gives error as Uncaught TypeError

//let : if value is changing. So we can reassign new value to variable.


//2.
// Variables declared with 'var' in ES5 is function scoped and 'let' & 'const' in ES6 block scoped.


/*
////ES5
function driverLicenseES5(passedTest){
    if(passedTest){
        var firstName = "Mike";
        var yearOfBirth = 1975;
        console.log(firstName+ ", born in "+yearOfBirth+ " is now officially allowed to drive a car");
    }  
}
driverLicenseES5(true);// function works, cause all variables are inside function(scoped with function)



//ES6
function driverLicenseES6(passedTest){
    if(passedTest){
        let firstName = "Mike";
        const yearOfBirth = 1975;
        console.log(firstName+ ", born in "+yearOfBirth+ " is now officially allowed to drive a car");
    }  
}
driverLicenseES6(true); // function works, cause all variables are inside block(scoped with block bracket)
*/

/*
//ES5
function driverLicenseES5(passedTest){
    if(passedTest){
        var firstName = "Mike";
        var yearOfBirth = 1975;
    }  
    console.log(firstName+ ", born in "+yearOfBirth+ " is now officially allowed to drive a car");
}
driverLicenseES5(true);// function works, cause all variables still are inside function(scoped with function)


//ES6
function driverLicenseES6(passedTest){
    if(passedTest){
        let firstName = "Mike";
        const yearOfBirth = 1975;
    }  
    console.log(firstName+ ", born in "+yearOfBirth+ " is now officially allowed to drive a car");
}
driverLicenseES6(true); // Uncaught ReferenceError: firstName is not defined--------- ----function doest work, cause 'let' & 'const' variables are inside block(scoped with block bracket), however console.log is out of block. Even console.log inside of function it is not same place with 'let' & 'const' variables. So it is difference between ES5 and ES6.
*/


/////////////////////////////////////////////

//Strings updates on ES6
/*
var a = 10;
var b = 10;

console.log("JavaScript first appeared "+(a+b)+" years ago.");


// Template String
console.log(`JavaScript first appeared ${a+b} years ago.`);
console.log(`JavaScript job pays $${100000} cash!`);
*/
/*
//Task
let firstName = "Mike";
let lastName = "Smith";
const yearOfBirth = 1970;
function calcAge(year){
    return 2018 - year;
}

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


// String Methods
let firstName = "Mike";
let lastName = "Smith";

const n = `${firstName} ${lastName}`;

console.log(n.startsWith("m"));// false // because it starts with Upper M

// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
console.log(n.endsWit("Sm"));// false //  because it ends with h
console.log(n.endsWith("th"));// true //

// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
console.log(firstName.repeat(5)); //MikeMikeMikeMikeMike
console.log(`${firstName} `.repeat(5)); // Mike Mike Mike Mike Mike 
*/


/////////////////////////////////////////////

//Arrow Functions
/*
//ES5 
var n = function(b){
    return b;
}
console.log(n("ES5")) //ES5

//ES6
let m = b => b; // here m is function name b is parameter, b is return the function
console.log(m("ES6")); //ES6


//if we do not have any parameters

//ES5
var x = function(){
    return console.log("Hello ES5");
}
x(); //Hello ES5
//ES6
let y = () => {console.log("Hello ES6")}; // here y is function name, here it has not parameter, a is return the function
y(); // Hello ES6



//if we have multiple parameters
//ES5 
var ES5 = function(a,b,c){
    return a+b+c;
}
console.log(ES5(1,2,3)); // 6

//ES6 
let ES6 = (a,b,c) => a+b+c;
console.log(ES6(1,2,3)); // 6
*/


//////////////////////////////////////////

//The map() method creates a new array with the results of calling a provided function on every element in the calling array.

/*
var array1 = [1,4,9,14];
let map1 = array1.map(x => x*2) // here 'x => x*2' is function itself; x here parameter; x*2 return function
console.log(map1); // (4) [2, 8, 18, 28]

const years = [1990, 1982, 1957];
let ages = years.map(elParam => 2018 - elParam);
console.log(ages);

//Task

var materials = ["hydrogen", "Helium", "Lithium", "Beryllium"];
let matNum = materials.map(str => str.length);
console.log(matNum);//
*/



//==========================================
// Arrow functions CAN NOT be used as a constructor and will throw an error when used with new 
// var Foo = () => {};
// var foo = new Foo();//Foo is not a constructor

// Arrow functions do not have a prototype property
// var Foo = () => {};
// console.log(Foo.prototype); // undefined
//==========================================


//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Destructuring
// Destructuring is a JS expression that makes it possible to unpack values from Array or properties from Objects, into distinct variable.

//ES5
//var john = ["John", 23];
//var name =john[0];
//var age =john[1];


//ES6
/*
let [name, age] = ["Mike", 26];
console.log(name);
console.log(age);

const obj = {
    firstName: "Michael",
    lastName: "Smith"
}
const{firstName, lastName} = obj;
console.log(firstName);
*/
/*
function calcAgeRetirement(year){
    const age = new Date().getFullYear()-year;
    return [age, 65-age];
}

const[age2,retirement]=calcAgeRetirement(1990);
console.log(age2); //28
console.log(retirement); //37
*/



///////////////////////////////////////

//***** TODAY is 8/31/18

//===============================
// ARRAYS
/*
let x = Array.from("JavaScript");
console.log(x); // (10) ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

//ES5

var ages = [12,17,8,21,14,11];
var full = ages.map(function(cur){
    return cur>=18;
})
console.log(full);// (6) [false, false, false, true, false, false]
console.log(full.indexOf(true)); //3
console.log(ages[full.indexOf(true)]); //21
*/

//ES6

// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.

// The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
/*
let ages = [12,17,8,21,14,11];
console.log(ages.findIndex(cur => cur >= 18)); //3  /here cur is function name; 'cur>=18' is return from function.

console.log(ages.find(cur => cur >= 18)); //21
*/

//for ..of LOOP
// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, Array-like objects, TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.
/*
let myArray = [10, 20, 30];
for(let x of myArray){
    x+=1;
    console.log(x);// 11  "/n"  21  "/n" 31  /here it prints value of each element
}

for(let x in myArray){
    console.log(x); // 0  "/n"  1   "/n"  2   /here it prints index of each element 
}

//The for...in statement iterates over all non-Symbol, enumerable properties of an object.
var string1 = "";
var object1 = {a: 1, b: 2, c: 3};

for (var property1 in object1) {
  string1 = string1 + object1[property1];
}
console.log(string1);// 123
*/


///////////////////////////////////////////////////////////////////
//===============================================================
// Spread Operator
/*
let mid = [3,4];
let arr = [1,2, mid, 5,6];
console.log(arr); //  (5) [1, 2, Array(2), 5, 6]

let array2 = [1,2,...mid,5,6];
console.log(array2); // (6) [1, 2, 3, 4, 5, 6]
*/

/*
function addFourAges(a,b,c,d){
    return a+b+c+d;
}
let sum1 = addFourAges(10,20,30,40);
console.log(sum1); //100
*/
/*
//if I have those ages in an Array, how can I pass it to function?
function addFourAges(a,b,c,d){
    return a+b+c+d;
}
let ages = [10,20,30,40]; // this is only one argument and if we didn't spread it our function parameters will overload. 
let sum = addFourAges(...ages); // here we spread with '...' elements of Array to 4 arguments
console.log(sum); // 100
*/

///////////////////////////////////////////////////////////////////
//===============================================================
// Rest Operator
/*
function sumAll(...args){ //here given arguments are coming as one Array
    let sum = 0;
    for(let arg of args){ //here let...of LOOP statement iterating over each element of Array and adding to sum.
        sum+=arg;
    }
    return sum;
}

console.log(sumAll(1)); //1
console.log(sumAll(1,2)); //3
console.log(sumAll(1,2,3)); //6
*/
// The big difference


// Task
/*
function multiply(multiplier, ...theArgs){
    return theArgs.map(function(element){
        return multiplier * element;
    });
}

var arr = multiply(2,1,2,3);
console.log(arr)// (3) [2,4,6]
*/
/*
let multiply = (multiplier, ...theArgs) => theArgs.map(element => multiplier * element);

let arr = multiply(2,1,2,3);
console.log(arr)// (3) [2,4,6]
*/



///////////////////////////////////////////////////////////////////
//===============================================================
//  MAP 

//The Map object holds key-value pairs. Any value (both objects and primitive values) may be used as either a key or a value.

//Syntax: new Map([iterable]);
/*
let myMap = new Map();

let keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};
// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

console.log(myMap.size); //3
console.log(myMap.get(keyString));  //value associated with 'a string'


let question = new Map();
question.set("question", "What is the official name of the latest major JS version");
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set("correct", 3);
question.set("true", "correct answer is 3");
question.set("false", "Wrong, try again");

//Maps can be iterated using a for..of loop:

for(let [key, value] of question.entries()){
    console.log(`This is ${key}, and it is set to ${value}`); 
}
// Output:   // This is 1, and it is set to ES5
             // This is 2, and it is set to ES6
             // This is 3, and it is set to ES2015
             // This is correct, and it is set to 3
             // This is true, and it is set to correct answer is 3
             // This is false, and it is set to Wrong, try again
*/





