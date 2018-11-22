// Today is 7/30/18.   
//  ARRAY
/*
var scores1=new Array();
var scores2=Array(10);
var scores3= new Array(9,10,5,8);
var scores4=["red", 2, "green", false];
var scores5=[];
*/
/*
var names=["Mike","Smith","John","Tedd"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

console.log(names[0]+", "+names[1]);
*/
//var n;
//
//n=prompt("Please enter number");
//var MonthName=["Jan","Feb","Martch","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
//
//console.log("The month name is "+MonthName[n-1]);

/*
var n;
n=prompt("Please enter index to know the day");
var DayName=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

console.log("Today is "+DayName[n-1]);
console.log(DayName.length);// in this line we can see yhe length of Array. So in our example the length is 7.
*/

//var shoppingList=["cheese","pumpkin","bread","eggs","milk","almonds","water"];
//
//for(var i=0; i<shoppingList.length; i++){
//   console.log(shoppingList[i]); 
//}

//Option 1
//var car=["Toyota","mazda","Lexus","Honda","mercedes","Nissan"];
//for(var i=0; i<car.length; i++){
//    
//    if(car[i]=="Honda"){
//       console.log("I found your car Honda in this array");
//        break;
//    }
//    else if(i==car.length-1){
//       console.log("I could not found your car Honda in this array");
//    }
//}

// or option 2
//var car=["Toyota","mazda","Lexus","Honda","mercedes","Nissan"];
//var bool=false;
//for(var i=0; i<car.length; i++){
//    if(car[i]=="Honda"){
//        bool=true;
//}
//    if(bool==true){
//      console.log("I found your car Honda in this array");  
//    }else{
//       console.log("I could not found your car Honda in this array"); 
//    }
 
/*
var shoppingList=["cheese","pumpkin","bread","eggs","milk","almonds","water"];
// in this case we check it is Array or not. If it is an Array we will display it with the command code-->ArrayName.toString()

if(Array.isArray(shoppingList)){
    console.log(shoppingList.toString());
}else{
    console.log("It's not an array!");
}
*/


/*
var car=["Toyota","mazda","Lexus","Honda","mercedes","Nissan"];
console.log(Array.isArray(car)); // result: prints - /true/
// it prints true or false based on if it is an Array. For example car="Toyota" is not Array, because it is just single variable, so it gives us false.

var car="Toyota";
console.log(Array.isArray(car)); // result: prints - /false/. Cause it is not an Array.
*/
/*
// push is adding new element to Array.
var stack=[];
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);

for(i=0; i<stack.length; i++){
    console.log(stack[i]);
}
*/

/*
// pop is take out or remove the last added element from Array.
var stack=[];
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
console.log(stack);
*/

/*
var stack=[];
var num;

while(true){
    num=prompt("Enter your number between 1 and 4, please");
    if(num==1){
      var input=prompt("Enter your element")
      stack.push(input);
    }else if(num==2){
       stack.pop();
    }else if(num==3){
       console.log(stack);
       console.log(stack.toString()); 
//        for(var i=0; i<stack.length; i++){
//            console.log(stack[i]);
//        }
    }else if(num==4){
        break;
    }else{
        alert("enter numbers between 1 and 4")
    }
}
*/




// Today is 7/31/18
// Continue on Array.

// shift()// method (FIFO method for remove), that means first added element on Array remove first. 

//var myFish=["angel","clown","mandarin","surgean"];

//var shifted=myFish.shift();
//console.log(shifted);
//console.log(myFish);
 // or
//
//myFish.shift();
//myFish.shift();
//for(var i=0; i<myFish.length; i++){                
//console.log(myFish[i]);
//}

/*
//Shifting FIFO method//
var names=["Andrew","Edward","paul","chris","John"];


while(0<names.length){
     console.log("Shifted: " + names.shift());
}console.log(names);
*/





// To delete element in an Array, we use two argument to the / splice() / method. 

//to delete elements in an array
var scores = [1,2,3,4,5]
scores.splice(2,1);
console.log(scores); 

//to add or insert elements in an array
var colors = ["red", "green", "blue", "yellow"];
colors.splice(2,0, 'purple');
console.log(colors); 

//to substitute (or delete and add simultaneously) elements in an array
var languages = ["C", "C++", "Java", "JavaScript"];
languages.splice(1,1,'Python');
console.log(languages);

var languages = ["C", "C++", "Java", "JavaScript"];
languages.splice(1,2,"Python");
console.log(languages);


/*
var myFish=["angel","clown","mandarin","sturgeon"];
console.log(myFish);

myFish.splice(2, 0, "drum");
console.log(myFish);

myFish.splice(3, 1);
console.log(myFish);

myFish.splice(2, 1, "trumpet");
console.log(myFish);

myFish.splice(0, 2, "parrot","anemone","blue");
console.log(myFish);

myFish.splice(2, 2);
console.log(myFish);

myFish.splice(1, 1);
console.log(myFish);
*/





/*
// Task slice method //

var animals=["dog","cat","monkey","donkey","dino","elephant"];

//1
console.log(animals.slice(0,6));//or console.log(animals.slice(0 or empty));
//2
console.log(animals.slice(0,1));
//3
console.log(animals.slice(5,6));
//4
console.log(animals.slice(4,6));
//5
console.log(animals.slice(0,1));
//6
console.log(animals.slice(0,2));
//7
console.log(animals.slice(0,0));
//8
console.log(animals.slice(2,3));
//9
console.log(animals.slice(2,5));



console.log(animals.slice());// print all
console.log(animals.slice(0));// print all
console.log(animals.slice(2));// print from 2nd element till end all
*/






/*
// indexOf() and lastindexOf() methods

var scores=[10,20,30,10,40,20];

console.log(scores.indexOf(10)); //0, because in an Array first 10's index is 0
console.log(scores.indexOf(30)); //2, because in an Array 30's index is 2
console.log(scores.indexOf(20)); //1, because in an Array 1st 20's index is 1
console.log(scores.indexOf(50)); //-1, because in an Array 50 is not existing, so if it could not find it it will do 0-1--->-1
console.log(scores.indexOf(10,2));//3, so here we will go first index 2 on an Array and start search 10 from that point. In our Array second index is 30 and after 30 we see 10, witch is index is 3, so result is 3.
console.log(scores.indexOf(30,3));//-1, because we will go first to index 3 which is 10 and will search 30 starting from that point and no more 30, so it will be 0-1----> -1.
console.log(scores.indexOf(20,-5));//1, first we count the length of Array, which is 6 and add to this -5 ---> 6+(-5)=1 so after than we will start from index 1 and result is 1 because 20 is first index.
console.log(scores.indexOf(20,-1));//5  6+(-1)=5 and will start index from 5 and search 20 and output is 5
*/

/*
//Task
var beasts=["ant","bison","camel","duck","bison"];

console.log(scores.indexOf("bison"));//1
console.log(scores.indexOf("bison",2));//4
console.log(scores.indexOf("giraffe"));//-1
console.log(scores.indexOf("camel",-3));//2
*/

/*
var scores=[10,20,30,10,40,20];

console.log(scores.lastIndexOf(10)); //3, we start count backward from end because in an Array first 10's is in the middle of Array, but when you start to count your index, you should start from beginning which is 0

var numbers=[2,5,9,2];

console.log(numbers.lastIndexOf(2));//3
console.log(numbers.lastIndexOf(7));//-1
console.log(numbers.lastIndexOf(2,3));//3
console.log(numbers.lastIndexOf(2,2));//0
console.log(numbers.lastIndexOf(2,-2));//0
console.log(numbers.lastIndexOf(2,-1));//3
*/





/*
// sort() Method
//>> The sort() method sorts the elements of an Array in place and returns the Array.

var months= ["March","Jan","Feb","Dec"];
months.sort();
console.log(months); // ["Dec", "Feb", "Jan", "March"]

var array1= [1,30,4,21];
array1.sort();
console.log(array1); // [1, 21, 30, 4]

var animals =["Cat", "ant","Bee","elephant","Ant"];
animals.sort();
console.log(animals);//["Ant", "Bee", "Cat", "ant", "elephant"]


var mixArray =["Cat", "ant",3,"elephant","Ant",67];
mixArray.sort();
console.log(mixArray);//[3, 67, "Ant", "Cat", "ant", "elephant"]
*/





// Task: Finding all the occurences of an elements.

//var indices=[];
//var array = ["a", "b", "a", "c", "a", "d"];
//var element = "d";
//
//for (i=0; i<6; i++){
//    if(array[i]==element){
//        indices.push(i);
//    }
//}
//console.log(indices);

/*
var indicesA=[],indicesB=[],indicesC=[],indicesD=[];
var array=["a","b","a","c","a","d"];
for(i=0;i<array.length;i++){
    switch(array[i]){
        case "a":
        indicesA.push(array.indexOf("a",i));
        break;
        case "b":
        indicesB.push(array.indexOf("b",i));
        break;
        case "c":
        indicesC.push(array.indexOf("c",i));
        break;
        case "d":
        indicesD.push(array.indexOf("d",i));
        break;
    }
}
console.log("Indexes of a:"+indicesA);
console.log("Indexes of b:"+indicesB);
console.log("Indexes of c:"+indicesC);
console.log("Indexes of d:"+indicesD);
*/

//var indices=[];
//var array=["a","b","a","c","a","d"];
//var element="c";
//for(i=0;i<array.length;i++){
//    switch(array[i]){
//        case element:
//        indices.push(array.indexOf(element,i));
//        break;
//    }
//}
//console.log("Indexes of "+element+": "+indices);


//var myArray=["a","b","a","c","a","d","c"];
//var indices=[];
//var element="c";
//var idx=myArray.indexOf(element);
//
//while(idx!=-1){
//    indices.push(idx);
//    idx=myArray.indexOf(element, idx+1);
//}
//console.log(indices);




/*
// Multi-dimensional ARRAY

var myArray=[];
var myArray=["apple", 15, "car"] // from this each element has own arrays

apple is first index of outer Array and it has own inner Array
(0 index of myArray)  apple=["a", "b", 10, "pear"]

15 is second index of outer Array and it has own inner Array
(1 index of myArray)   15 = [12, 15]

car is 3rd index of outer Array and it has own inner Array
(2 index of myArray)  car=[toyota, honda, nissan]
*/
/*
After all our extended outer Array will becomes to:

// this is an outer Array.
var myArray=[
   ["a", "b", 10, "pear"], [12, 15], ["toyota", "honda", "nissan"],["girl","boy","adult","baby"] // these are inner Arrays
    ];

//console.log(myArray[2][1]+","+myArray[0][3]);//honda,pear

//OR if we want print one by one we will use inner loop.

for (i=0; i<myArray.length; i++){//here condition is less than outer Array length.
    var innerArraysLength=myArray[i].length // here we assign inner array length, because when i changes it will go exact inner Array and collect that inner array length. After that it goes to inner loop.
    console.log("inner Array "+i+"'s length is "+myArray[i].length+" and it's elements are:");
    for (c=0; c<innerArraysLength; c++){ // here condition is less than inner Array length and it comes from assign myArray[i].length.
        console.log("["+i+","+c+"]="+myArray[i][c]);
    }
}
*/
/*
var arrayLength=3;
var multiArray=Array(arrayLength); // here we are assigning length to multiArray which is 3, so it has 3 elements, but we do not know yet what are exactly elements

multiArray[0]=Array(arrayLength);
multiArray[1]=Array(arrayLength);
multiArray[2]=Array(arrayLength);

for(i=0; i<multiArray.length; i++){
    multiArray[i]=Array(arrayLength);
}
//1 inner Array.
multiArray[0][0]="apple";
multiArray[0][1]="banana";
multiArray[0][2]="cherry";

//2 inner Array.
multiArray[1][0]=4;
multiArray[1][1]=10;
multiArray[1][2]=16;

//3 inner Array.
multiArray[2][0]=["toyota", "nissan"];
multiArray[2][1]=["Java", "Script"];
multiArray[2][2]=["read", "tell"];

//console.log(multiArray);
//console.log(multiArray[2]);
//console.log(multiArray[2][2][1]);
*/

/*
var multiArray=[
    ["apple","banana","cherry"], 
    [4,10,16], 
    [
        ["toyota", "nissan"], ["Java", "Script"], ["read", "tell"] 
    ]
];

for (i=0; i<multiArray.length; i++){
    var inArrays=multiArray[i].length;
    console.log("in Array "+i+"'s length is "+multiArray[i].length+" and it's elements are:");
    for (c=0; c<inArrays; c++){
        
         console.log("["+i+","+c+"]= "+multiArray[i][c]);
    }
}
*/
