//***************  Today is 9.4.18  **************
//**********   classes in JavaScript    **********
//================================================


//ES5
/*
var PersonES5 = function(nameP, yearOfBirthP, jobP){
    this.name = nameP;
    this.yeaOfBirth = yearOfBirthP;
    this.job = jobP;
}

PersonES5.prototype.calcAge = function(){
    var age = new Date().getFullYear - this.yeaOfBirth;
    console.log(age);
}
var mikeES5 = new PersonES5("Mike", 1980, "SDET");

//ES6

class PersonES6{
    constructor(nameP, yearOfBirthP, jobP){// if we use class to create constructor we use keyword 'constructor' inside class
    this.name = nameP;
    this.yeaOfBirth = yearOfBirthP;
    this.job = jobP;  
    }
    
    calcAge(){
    var age = new Date().getFullYear - this.yeaOfBirth;
    console.log(age);
    }
}

let mikeES6 = new PersonES6("Mike", 1980, "SDET");
*/

//********************************
//Static Methods
//********************************

//Static Methods that are simply attracted to the classes.
/*
class PersonES6{
    constructor(nameP, yearOfBirthP, jobP){// if we use class to create constructor we use keyword 'constructor' inside class
    this.name = nameP;
    this.yeaOfBirth = yearOfBirthP;
    this.job = jobP;  
    }
    
    calcAge(){
    var age = new Date().getFullYear - this.yeaOfBirth;
    console.log(age);
    }
    
    static greeting(){
        console.log("Hello");
    }
}

let mikeES6 = new PersonES6("Mike", 1980, "SDET");
PersonES6.greeting();// Hello / static method attached to class not to object. To call static method we use with class name.
*/
/*
When to use static methods?
    * If you are writing utility classes and they are not supposed to be changed
    * If there is some code that can easily be shared by all the instance methods
    * extract tha code into a static code. 
If you are sure that the definiton of the method will never be changed or overridden. As static method can not be overridden.
*/


//////////////////////////////////////////
/*
function BicycleES5(cadence, speed, gear, tirePressure){
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    
    this.inflateTire = function(){
        this.tirePressure+=3;
    }
}
var b15 = new BicycleES5(50,20,4,25);

//ES6

class BicycleES6{
    constructor(cadence, speed, gear, tirePressure){// if we use class to create constructor we use keyword 'constructor' inside class
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    }
    
    inflateTire(){
        return this.tirePressure+=3;
    }
}

let b16 = new BicycleES6(50,20,4,25);
console.log(b16.inflateTire());
*/


//===========================================
//***** INHERITANCE in JS ******************
//===========================================

//Inheriting constructor
/*
class Animal{
    constructor(namePar){
        this.name = namePar;
    }
}

class Dog extends Animal{  // here Dog is inherited class from Animal.
    constructor(nameParofChild){
        super(nameParofChild);
    }
}

let dog1=new Dog("ABC and XYZ"); // here dog1(object) is instance of Dog class.
console.log(dog1.name);
*/

//////////////////////////////////////////////
/*
class Person{
    constructor(namePar, agePar, weightPar){
        this.nameSuper = namePar;
        this.ageSuper = agePar;
        this.weightSuper = weightPar
    }
    displayName(){
        console.log(this.nameSuper);
    }
    displayAge(){
        console.log(this.ageSuper);
    }
    displayWeight(){
        console.log(this.weightSuper);
    }
    
}

class Programmer extends Person{
    constructor(namePar, agePar, weightPar, languagePar){
        super(namePar, agePar, weightPar);
        this.language = languagePar;
    }
    displayLanguage(){
        console.log(this.language);
    }
}

let mike =new Programmer("Mike", 25, 160);
mike.displayName();
mike.displayAge();
mike.displayWeight();

console.log('============================');

let john =new Programmer("John", 33, 175, "JS/Node");
john.displayName();
john.displayAge();
john.displayWeight();
john.displayLanguage();
*/

/*
class Vehicle{
    start(){
        console.log("Starting the vehicle");    
    }
}

class Car extends Vehicle{
    start(){
        super.start();
        console.log("starting the car");
    }
}

let honda = new Car();
honda.start(); // starting the car /- because here child class overriding super class.


class GetThings{
    constructor(size){
        this.length = size;
    }
    
    // Overloading -> same name method, but different parameter type
    get Length(){
        return this.length;
    }
    
    set Length(value){
        this.length = value;
        console.log("The value has been set");
    }
}

var thing = new GetThings(9);
console.log(thing.Length);    // coming from GET method. -> 9
thing.Length= 10;             // coming from SET method. -> the value has been set
console.log(thing.Length);    // coming from GET method. -> 10
*/
/*
class EncapTest{
    constructor(namePar,idNumPar,agePar){
        this._name=namePar;
        this.idNum=idNumPar;
        this.age=agePar;
    }
    get Age(){
        return this.age;
    }
    get Name(){
        return this.name;
    }
    get Id(){
        return this.idNum;
    }
    set Age(newAgePar){
        this.age=newAgePar;
    }
    set Name(newNamePar){
        this.name=newNamePar;
    }
    set Id(newIdNumPar){
        this.idNum=newIdNumPar;
    }
}

let encap1= new EncapTest();
encap1.Name = "Mike"; // here Name is set method name and giving 'Mike' to this.Name
encap1.Age = 20;  // here Age is set method name and giving '20' to this.Age
encap1.idNum ="MS30";//here idNum is set method name and giving 'MS30' to this.idNum

console.log(`Name: ${encap1.Name} Age: ${encap1.Age} ID: ${encap1.Id}`);
//Name: Mike Age: 20 ID: MS30  /    here we not assigning arguments directly to constructor. First we assigning our arguments to set method and with get method we are getting return from get method.

let encap2 = new EncapTest("Mike","MS30",20);
console.log(`Name: ${encap2.Name} Age: ${encap2.Age} ID: ${encap2.Id} `);
//Name: undefined Age: 20 ID: MS30  here Name is undefined, because we set private for this property on constructor. So, we assigning argument directly to constructor and due private of that property we could not get access to assign our value.
*/

//Inheriting Methods

//class Vehicle{
//    start(){
//        console.log("Starting the vehicle");    
//    }
//}
//
//class Car extends Vehicle{
//    start(){
//        
//        console.log("starting the car");
//    }
//}
//
//let honda = new Car();
//honda.start(); // starting the car /- because here child class overriding super class.


class Vehicle{
    start(){
        console.log("starting vehicle");// here it prints super class method 'starting vehicle'
    }
}
class Car extends Vehicle{
    start(){
        super.start();
        //console.log("starting car");
    }
}

let c = new Car();
c.start(); 

