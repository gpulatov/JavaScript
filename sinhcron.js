


//***************************************
//**********  asynchronous **************     interviev!  !!!
//***************************************

//function first() {
//    setTimeout(function () {
//    console.log("first one"); // here JS holding this code for 1 second to run it, it delay that much time and run it.
//    }, 1000)
//}
//
//function second() {
//    console.log("second one"); // this code runs first and after than it runs first code.
//}
//
//first();
//second();



// How to handle delay run the code
// callback() comes to solve

/*
function first(callback) {
    setTimeout(function () {
    console.log("first one"); // here we using callback(), we calling second function inside first and now 1 & 2 delay same time together. After delay 3 seconds it prints first console and call second function to run, so prints second one.
    callback();
    }, 3000)
}

function second() {
    console.log("second one"); 
}

function third() {
    console.log("third one"); 
}

first(second);
*/
/////////////////////////////////////////////////
/*
function first(callback) {
    setTimeout(function () {
    console.log("first one"); // here we using callback(), we calling second function inside first and giving as parameter third to second now 1,2 & 3 delay same time together. After delay 3 seconds it prints first console and call second function to run, second function argument has now third and printing second, than calling third to run.
    callback(third);
    }, 3000)
}

function second(callback) {
    console.log("second one");
    callback();
}

function third() {
    console.log("third one"); 
}

first(second);
*/



//////////////////////
//  Task
/*
const async = function (num, callback){
    const result = num + 2;
    callback(result);
}

async (2, function (result){
    console.log(result);
})
*/

//////////////////////
//  Task
//Prepare Tea.
/*
function prepareTea(){

   setTimeout(function(){
       console.log("1.Find Vessel");

       setTimeout(function(){
           console.log("2.Put water,sugar and tea");

           setTimeout(function(){
               console.log("3.Bring the mixture to a boil");

               setTimeout(function(){
                   console.log("4.Filter the tea");

                   setTimeout(function(){
                       console.log("5.Serve the tea");
                   },2000)

               },2000)

           },2000)

       },2000)

   },2000)
}

prepareTea();// this callback() has problem with structure. its to long each time write code inside each other. If you break one small code inside after all whole code doesn't work and fix that code takes to much time. It is hard to track the bug on that structure code.
*/

///////////////////////////////////////////////////////////////////
// How to handle 'callback Hell' JS brought 'promise()' Object
//*****************************************************************
// The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

//Note: This article describes the Promise constructor and the methods and properties of such objects. To learn about the way promises work and how you can use them, we advise you to read Using promises first. The constructor is primarily used to wrap functions that do not already support promises.

/*
let promiseToCleanRoom = new Promise( function (resolve, reject){
    //clean the room
    let isReallyCleaned = true;
    if (isReallyCleaned){
        resolve("Clean");
    }else{
        reject("Not clean");
    }
})


promiseToCleanRoom.then(function(fromResolve){
    console.log("the room is "+fromResolve);
}).catch(function(fromReject){
    console.log("the room is "+fromReject);
})
*/

//Now we have dependencies
/*
let cleanRoom = function () {
    return new Promise (function(resolve, teject){
        resolve("Cleaned the room");
    })
}

let removeGarbage = function () {
    return new Promise (function(resolve, teject){
        resolve("Garbage removed");
    })
}

let winIceCream = function () {
    return new Promise (function(resolve, teject){
        resolve("Won icecream");
    })
}

cleanRoom().then (function() {
    return removeGarbage();
}).then (function () {
    return winIceCream();
}).then (function () {
    console.log("finished"); // finished;
})
*/


//if we give parameter to our functions
/*
let cleanRoom = function () {
    return new Promise (function(resolve, teject){
        resolve("Cleaned the room");
    })
}

let removeGarbage = function (msg) {
    return new Promise (function(resolve, teject){
        resolve(msg + " Garbage removed");
    })
}

let winIceCream = function (msg) {
    return new Promise (function(resolve, teject){
        resolve(msg + " Won icecream");
    })
}

cleanRoom().then (function(result) {
    return removeGarbage(result);
}).then (function (result) {
    return winIceCream (result);
}).then (function (result) {
    console.log("finished "+result);
})
*/


// with resolve
//const async = () => {
//    return new Promise((resolve,reject) => {
//        resolve("Everything is good");      // it reads all then() methods. Because, parameter is resolve
//    })
//};
//
//async()
//    .then((data)=>{
//        console.log(data);
//        return 1;
//    })
//    .then((data)=> {
//        console.log(data);
//        return 2;
//    })
//    .then((data)=>{
//        console.log(data);
//    })


// with reject
//const async = () => {
//    return new Promise((resolve,reject) => {
//        reject("Everything is good");       // it reads catch() methods. Because, parameter is reject
//    })
//};
//
//async()
//    .then((data)=>{
//        console.log(data);
//        return 1;
//    })
//    .then((data)=> {
//        console.log(data);
//        return 2;
//    })
//    .then((data)=>{
//        console.log(data);
//    })
//    .catch((data)=>{
//        console.log(data);       // going to here because, parameter is reject
//    })


// with if-else
/*
const async = (number) =>{
    return new Promise((resolve,reject)=>{
        if(number == 4){
            resolve("everything is good");
        }else{
            reject("Everything is not good");
        }
       
    })
};

async(5)
   .then((data)=>{
        console.log(data);
        return 1;
    })
    .then((data)=>{
        console.log(data)
        return 2;
    }) 
    . then((data)=>{
        console.log(data);
    })
    .catch((data)=>{
        console.log(data);
    })
*/


//***************************
//****** Async / Await
//****************************

/*
function doubleAfter2Second(x){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve (x*2);
        }, 2000)
    })
}

doubleAfter2Second(10).then((r) =>{
    console.log(r); //20
})

//let sum = doubleAfter2Second(10) + doubleAfter2Second(20) + doubleAfter2Second(30);
//console.log(sum);

//promise chain
function addPromise(x){
    return new Promise (resolve =>{
        doubleAfter2Second(10).then((a)=>{
            doubleAfter2Second(20).then((b)=>{
                doubleAfter2Second(30).then((c)=>{
                    resolve(x+a+b+c);
                })
            })
        })
    })
}
addPromise(10).then((sum)=>{
    console.log(sum); // 130
})
*/

//we can do this example with Async/Await
/*
function doubleAfter2Second(x){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve (x*2);
        }, 2000)
    })
}
async function addAsync(x){
    const a = await doubleAfter2Second(10);
    const b = await doubleAfter2Second(20);
    const c = await doubleAfter2Second(30);
    return x + a + b + c;
}
addAsync(10).then((sum)=>{
    console.log(sum); //130
})
*/




