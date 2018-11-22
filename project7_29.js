//Assignment-29/Callbacks

/*
//1- create a dealer array with some objects inside. Objects will have car informations like make,model,year,mileage,and state.
let dealer = [
    {make: "Toyota", model: "Camry", year: 2009, mileage: 150000, state: "VA"},
    {make: "Honda", model: "Odyssey", year: 2015, mileage: 52500, state: "TX"},
    {make: "Mazda", model: "CX-9", year: 2017, mileage: 27000, state: "va"},
    {make: "Mersedes", model: "GLE 350", year: 2018, mileage: 12500, state: "FL"},
    {make: "Mersedes", model: "GLE 450", year: 2017, mileage: 18500, state: "VA"},
    {make: "Ford", model: "Escape", year: 2014, mileage: 64000, state: "TX"},
    {make: "GM", model: "Yukon", year: 2011, mileage: 84000, state: "va"}  
]

//2- create a function that checks if the car state is VA
//3- print all the cars where the year is more than 2010 that belongs to va 

function carState (myCarObj, callbackFunc){
    for(let elem of myCarObj){
        if(elem.state.toLowerCase()=="va"){
        if(typeof callbackFunc == "function"){
                callbackFunc(elem);
            }
        }
    }
}
carState(dealer, year=>{if(year.year>2010){console.log(`${year.make} ${year.model}'s year is ${year.year} and belong to state ${year.state}`)}});
//Mazda CX-9's year is 2017 and belong to state va
//Mersedes GLE 450's year is 2017 and belong to state VA
//GM Yukon's year is 2011 and belong to state va

//4- print total mileage of the cars that belongs to va 

let totalMileages = function(){// this is first class function
    let total = 0;
    let count = 0;
    
   carState(dealer, x =>{total+=x.mileage; count++})
    console.log(`Total mileage of cars belong to VA state is: ${total} and Total count of cars is ${count}`);
}
totalMileages(); //Total mileage of cars belong to VA state is: 279500 and Total count of cars is 4

*/
//function happyDad(x){
//    return new Promise((resolve, reject)=>{
//        let isReallyCleaned = true;
//        if (isReallyCleaned){
//                    setTimeout(()=>{
//                resolve("happy");
//            }, 2000)
//
//        }else{
//            reject("Not happy");
//        }
//    })
//}
//
////promise chain
//function age(x){
//    if(x>=18){
//        return new Promise (resolve =>{
//        happyDad().then(()=>{
//                resolve("Got new car");
//            })
//        })
//    }
//}
//age(18).then((result)=>{
//    console.log(result); // 130
//})


/*
function getIntoTheCar (key, callback) {
    if (key) {
        setTimeout(()=>{
            console.log("Unclock the car...");
            console.log("Get inside the car");
            callback(drive);
        }, 3000);
        
    }else{
        console.log("Cannot get into the car, because no key");
    }
}


function startEngine (callback) {
    setTimeout(()=>{
        console.log("Starting engine...");
        console.log("Engine is ON, ready to drive");
        callback();
    }, 3000);
}

function drive() {
    setTimeout( () => {
        console.log("Driving...");
    }, 3000);
}
getIntoTheCar(true, startEngine);

*/