//Functions are First Class Objects. Functions have the ability to:
//    Be assigned to variables
//    Have other functions in them 
//    Return other functions to be called later 
//    

//A callback function is a function passed into another function as an argument.



//A callback function is a function passed into another function as an argument.

/*
let x = function(){
    console.log("I am called from inside a function"); 
}

let y = function(callback){ //we are calling x() to y() as parameter
    console.log("do smthing"); 
    callback();
}

y(x); // do smthing   "/n"  //I am called from inside a function 
// here we are passing an argument to y() 'function x()'
*/

//let calc =  function(num1, num2, calcType){
//    if(calcType == "add"){
//        return num1 + num2;
//    }else if(calcType == "multiply"){
//        return num1*num2;
//    }
//}
//console.log(calc(2, 3, "add"));// 5


let add = function(a,b){
    return a+b;
}

let multiply = function(a,b){
    return a*b;
}

let division = function(a,b){
    return a/b;
}
/*
let calc = function(n1, n2, callbackFunctionPar){ // calc() parameters are coming from 2, 3, add as argument. Here add is coming as function
    return callbackFunctionPar(n1, n2); // here callbackFunctionPar() parameter arguments coming from n1, n2 as argument.
}

console.log(calc(2, 3, add));// 6
console.log(calc(2, 5, multiply));// 10
console.log(calc(50, 2, division));// 25


console.log(calc(10, 7, function(a,b){return a-b;})); // 3  / here we writing callback function 'function(a,b){return a-b;}' as parameter directly// it is anonymous fucntion no name.
*/

//let calc = function(n1, n2, callbackFunctionPar){ 
//   if(typeof callbackFunctionPar == "function"){ // here we are checking our callback fucntion actually function or not.
//    return callbackFunctionPar(n1, n2);
//   }
//}
//console.log(calc(2, 3, add)); // 5
/*
let students = [
    {name: "Mary", score: 90, school: "East"},
    {name: "James", score: 100, school: "east"},
    {name: "Steve", score: 40, school: "East"},
    {name: "Gabe", score: 90, school: "West"},
    {name: "Racheal", score: 85, school: "East"},
    {name: "Smith", score: 95, school: "West"}  
]

let processstudents = function(data, callbackFunc){ // here we got parameters Array and anonymous function.
    for( let i=0; i<data.length; i++){
        if(data[i].school.toLowerCase() == "east"){
            if(typeof callbackFunc == "function"){
                callbackFunc(data[i]);
            }
        }
    }
}

processstudents(students, function(abc){if(abc.score>60){console.log(abc.name + " passed")}});//Mary passed '\n' James passed '\n' Racheal passed
// actually here we are calling our function with passing argumets('students' and anonymous function(abc))

// write a function computes the total of all the scores together for east and count how many students are from east?


let deterMineTotal = function(){// this is first class function
    let total = 0;
    let count = 0;
    
    processstudents(students, function(x){ 
        // here 'function(x){total=total+x.score; count++;}' callback anonymous function
        total = total + x.score;
        count++;
    })
    console.log(`Total score: ${total} and Total count ${count}`);
}
deterMineTotal(); //Total score: 315 and Total count 4
*/

//****************************************
//****************************************
// CLOSURES // JavaScript runtime keeps track of all your variables, memory usage, references and so. When it detects an inner function relies on variables stored by an outer function, it ensures those variables are available even if the outer function goes away.

/*
function youSayMe(){
    console.log("Good Bye");
    function andIAnswer(){
        console.log("Hello");
    }
    
    return andIAnswer;
}

var something = youSayMe();
console.log(something); // Good Bye '\n' ƒ andIAnswer(){console.log("Hello");}

something(); // Hello  / here we put () to something and activating inner fucntion and calling it, that's why it prints what that function has inside.

// closure = function + outer context

function stopWatch(){
    var startTime = Date.now();
    
    function getDelay(){
        var elepsedTime = Date.now() - startTime;
        console.log(elepsedTime);
    }
    return getDelay;
}

stopWatch()(); //0  first () calling my outer function, with second () I am calling inner function. 
*/


//*********************************
//********************************
//******   CALL-APPLY-BIND  Methods *******

//The call() method calls a function with a given this value and arguments provided individually.
//Note: While the syntax of this function is almost identical to that of apply(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.
/*
var obj = {
    num:2
}

var obj2 = {
    num:10
}


var addToThis = function(a){
    return this.num + a;
}

var x = addToThis.call(obj, 3);
console.log(x); //5

var y = addToThis.call(obj2, 15);
console.log(y); //25


var obj3 = {
    num:10
}

var addToThis = function(a, b, c){
    return this.num + a+b+c;
}
var z = addToThis.call(obj3, 8,10,14);
console.log(z); //42
*/

//*****Apply method. 
//The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
//Note: While the syntax of this function is almost identical to that of call(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.

var obj4 = {
    num:15
}

var addToThis = function(a, b, c){
    return this.num + a + b + c;
}

var arr = [1, 2, 3];
var x = addToThis.apply(obj4, arr);
console.log(x); // 21

//BIND method 
//The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.



var obj1 = {
    num:2
}

var addToThis = function(a,b,c){
    return this.num+a+b+c;
}


var arr = [1,2,3];
console.log(addToThis.bind(obj,arr));  

var b = addToThis.bind(obj);
console.log(b(1,2,3));
console.log(b(...arr));



