// Today is 8/2/18.     //  function  //

/*
function sayHello(){ // here is function is keyword, sayHello is function name.
    console.log("Hello world!");
}

sayHello();// Hello world! if we put function name to loop and call that function it prints  same with loop size. Look below how it works.

for (i=0; i<100; i++){
    sayHello();  // here we did, only called the function and it did us 
}
*/

//Task.

/*
//Write a function that calculates the sum of 3 numbers
var num1=10;
var num2=25;
var num3=30;
function calculateSum(){
    console.log(sum=num1+num2+num3);
}

calculateSum();
*/

//Task. Write a function that will convert Miles into Kms.

//function converterKM(){
//    
//    var mile=+prompt("Enter your Mile and programm will convert into Kms");
//    var km=mile*1.67;
//    console.log(mile+" mile will be "+km+"kms after you convert to Km");
//}
//converterKM();
//converterKM();

/*
function compareNums(){
    
    var num1=+prompt("Enter your 1st num");
    var num2=+prompt("Enter your 2nd num");
    if (num1>num2){
        console.log(num1+" num1 is greater than num2")
    }else if(num2>num1){
        console.log(num2+" num2 is greater than num1")
    }else{
        console.log(" Numbers are equal")
    }
    
}
compareNums();
compareNums();
compareNums();
*/



//Declaring Functions That need Information.

/*
function calculateArea(width,height){// width is 1st parameter; height is 2 nd parameter. // calculateArea is function name.
    
    var area = width * height;// this two lines are code for our function
    console.log(area);
}

//now we should call our function.
calculateArea(10, 25);//250 // here 10 is 1st argument and it follows 1st parameter on function; 25 is 2nd argument and it follows 2nd parameter on function.
//we can change our arguments here and get result. if we change argument(20, 30) result will be 600;
calculateArea(20, 30);//600
*/


/*
//Task. 
function totalPay(hour,hourlyRate){
    
    var pay = hour * hourlyRate;// this two lines are code for our function
    console.log(pay);
}

totalPay(10,20);
totalPay(15,25);
*/



//Task.

//Create a function that acccepts 3 parameters:
//1- number
//2- number
//3- operator(-,+,*,/)
/*
function calculator (num1,num2,operator){
    if(operator=="-"){
        res=num1-num2;
        console.log("result after your operation is "+res);
    }else if(operator=="+"){
        res=num1+num2;
        console.log("result after your operation is "+res);
    }else if(operator=="*"){
        res=num1*num2;
        console.log("result after your operation is "+res);
    }else if(operator=="/"){
        res=num1/num2;
        console.log("result after your operation is "+res);
    }
}
calculator(10,5,"*");
calculator(6,5,"+"); 
calculator(50,5,"/");
calculator(20,12,"-");
*/

/*
function calculateAge (currentYear, birthYear){
    var age=2018-birthYear;
    console.log(age);
}

calculateAge(2018,1982);
calculateAge(2018,1987);
calculateAge(2018,2009);
*/


//Task.  Write a function accepts 3 numbers and displays the greatest one in the console.

//function theGreatestNum( num1, num2, num3){
//    
//    if(num1>num2 && num1>num3){
//        console.log("The greatest num is "+num1);
//    }else if(num2>num1 && num2>num3){
//        console.log("The greatest num is "+num2);
//    }else if(num3>num2 && num3>num1){
//        console.log("The greatest num is "+num3);
//    }
//}
//theGreatestNum(5,8,9);
//theGreatestNum(10,8,2);
//theGreatestNum(6,30,20);


//Task. Write a function that accepts Fahrenheit and displays the Celcius in the console.
/*
function converterToCelcius(Fahrenheit){
    Celcius =(Fahrenheit-32)*5/9;
    console.log(Celcius);
}
converterToCelcius(75);
converterToCelcius(95);
converterToCelcius(50);
*/

/*
//Task. Whrite a function that accepts 3 grades and prints the grade according below table.

function calculateGrade (sub1,sub2,sub3){
    var average=(sub1+sub2+sub3)/3;
    if(average>=0 && average<=59){
        console.log("Your average grade for 3 subject is "+average+" and your grade is F");
    }else if(average<=69){
        console.log("Your average grade for 3 subject is "+average+" and your grade is D");
    }else if(average<=79){
        console.log("Your average grade for 3 subject is "+average+" and your grade is C");
    }else if(average<=89){
        console.log("Your average grade for 3 subject is "+average+" and your grade is B");
    }else if(average<=100){
        console.log("Your average grade for 3 subject is "+average+" and your grade is A");
    }else{
        console.log("Please enter valid numbers");
    }
}
calculateGrade(60,70,80);
calculateGrade(90,100,95);
calculateGrade(100,100,110);
*/

/*
//Task. Write a function that accepts 2 parameters which are Array and element. If element is included in the Array, print it "found it". If not in Array, add the element into Array and print the final Array in the console.

var myArray=[25,30, "car",20];
//var element=22;

function findElement (myArray, element){
    for (i=0; i<myArray.length; i++){
        if (myArray[i]==element){
            console.log("found it");
            break;
        }else if(i==myArray.length-1){
            myArray.push(element);
            break;
        }
    }console.log(myArray);
}

findElement(myArray,"Apple");
*/


// Today is 8/6/2018. Return a value from Function.

// A function can return a value by using the return statement.


//function calculateArea(width, height){
//    var area=width*height;
//}
//
//calculateArea(3,5);

/*
function calculateArea(width,height){
    var area=width*height;
    return area;
}

var x=calculateArea(8,5);
console.log(x);

function isChecked(){
    if (x>15){
        console.log("Valid");
    }else{
        console.log("Not valid");
    }
}
isChecked();
console.log(x%2);
console.log((x*10)+25);
*/
/*
function shoppingCost (qty,unitPrice){
    shopping=qty*unitPrice;
    return shopping;
}

var customer1=shoppingCost(40,25);
var customer2=shoppingCost(20,15);
console.log(customer1);
console.log(customer2);
*/


//Task.
/*
function calculateAge(yearBirth){
   var age=2018-yearBirth; 
    return age;
  }


function yearsUntilRetirement(name, year){
 var retirement=65-calculateAge(year);
  console.log(name+ " retires in "+retirement+" years");
}
yearsUntilRetirement("Mike",1982);
*/


//JavaScript function overloading

//In other programming languages, it is possible to have two or more functions tha share the same name as long as their signature are different. However, you cannot do it in JavaScript.
/*
function addTen(a){
    return a+10;
}

function addTen(a, b){
    return a+b+10;
}

var result=addTen(100);
console.log(result);  // NaN
*/

//So, javaScript reads last function, so here it reads second and it gives value to a 10 and goes to b and it is not assigned so it reads it NaN and result will be NaN.
/*
function addTen(a){
    return a+b+10;
}

function addTen(a, b){  // this reads last function and it will go a=100+10=110
    return a+10;
}

var result=addTen(100); 
console.log(result);  // 110
*/
/*
var area=function(height, width){
    recArea=height*width;
    return recArea;
}
var result=area(15,20);
console.log(result);
*/













