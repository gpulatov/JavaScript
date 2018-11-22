// IF Statements
/*
if(score>=50){
(congratulate)
}

var myScore=50;
if(myScore>=40){
    console.log("You passed the exam");
}
var firstName="Abdulaziz";
var status="Student";
if(status=="Student"){
    console.log(firstName+" is "+status);
}

Task#1
var temp=parseInt(prompt("enter temp of the room"));

if(temp>=70 && temp<=80){
    console.log("Your entered temp "+temp+ " is ideal for the room");
}

//Task#2
var age=parseInt(prompt("Enter your age please"));

if(age>=18){
    console.log("You are eligible to vote");
}


//Task3

var num1=parseInt(prompt("Enter your first number, please")), num2=parseInt(prompt("Enter your second number, please")), num3=parseInt(prompt("Enter your third number, please"));

if((num1>num2) && (num1>num3)){
   console.log("The greatest number is: "+num1);
   }
if((num2>num1) && (num2>num3)){
   console.log("The greatest number is: "+num2);
   }
if((num3>num1) && (num3>num2)){
   console.log("The greatest number is: "+num3);
   }

var num1=Number(prompt("Enter your 1st number")), num2=Number(prompt("Enter your 2nd number"));

if(num1==num2){
    console.log("Numbers are equal");
}
if(num1!=num2){
    console.log("Numbers are not equal");
}

//Task 4.
var price=Number(prompt("Please product price")), QTY=Number(prompt("Please product QTY")), revenue;
revenue = price * QTY;

if(revenue>5000){
discount=revenue*0.1;
netRevenue=revenue-discount;
    console.log("Your discount is $"+discount);
    console.log("Your total price after discount is $"+netRevenue);
} else { 
console.log("You are not eligable for any discount and your total price  is $"+revenue);
 }

// Task 6.

var firstName="Gulom", status="Married";

if(status=="Married"){
    console.log("Gulom is married");
}else{
    console.log("Gulom is single");
}


//Task 7.
var membership, freeShip, amount;
membership=prompt("Are you membership?");
amount=prompt("what is your order amount");

if(membership=="yes"||(amount>40)){
    console.log("You are eligible for freeshipping");
}else{
    console.log("You are not eligible for freeshipping");
}

//Task 8.

var num1=Number(prompt("Please enter your first number")),
    num2=Number(prompt("Please enter your 2nd number"));
if(num1>num2){
    console.log(num1+" is greater than "+num2);
  }else{
      console.log(num2+" is greater than "+num1);
  }


var time;

time=prompt("enter your time");

if(time<12){
    console.log("Good morning");
}else if(time<15){
    console.log("Good Afternoon");
}else if (time<=24){
    console.log("Good Evening");
}else {
    console.log("not valid day");
}

var hour = parseInt(prompt("Enter hour! (You should write with 24 system.)"));
/*
//"Esra's code"
if (hour < 12) {
    console.log("Good Morning Sunshine :) ");
} else if (hour == 12 || hour < 15) {
    console.log("Good Afternoon...");
} else if (hour >= 15 && hour <= 24) {
    console.log("Good Evening...");
} else {
    console.log("A day is 24 hours :) ");
}
*/
//var num1=parseInt(prompt("Enter your first number, please")), num2=parseInt(prompt("Enter your second number, please")), num3=parseInt(prompt("Enter your third number, please"));
//
//if((num1>num2) && (num1>num3)){
//   console.log("First number is the greatest, it is: "+num1);
//   } else if
//       ((num2>num1) && (num2>num3)){
//   console.log("Second number is the greatest, it is: "+num2);
//   }else if
//       ((num3>num1) && (num3>num2)){
//   console.log("Third number is the greatest, it is: "+num3);
//   }else{
//       console.log("Numbers are equal");
//   }

//console.log(3+1+"2"+4+5);
/*
var subj1, subj2, subj3;
subj1=Number(prompt("Enter your 1st subject grade, please!"));
subj2=Number(prompt("Enter your 2nd subject grade, please!"));
subj3=Number(prompt("Enter your 3d subject grade, please!"));
averageGrade=(subj1+subj2+subj3)/3

if(averageGrade>=0 && averageGrade<=59){
    console.log("your average grade is F");
}else if(averageGrade>59 && averageGrade<=69){
    console.log("your average grade is D");
}else if(averageGrade>69 && averageGrade<=79){
    console.log("your average grade is C");
}else if(averageGrade>79 && averageGrade<=89){
    console.log("your average grade is B");
}else if(averageGrade>89 && averageGrade<=100){
    console.log("your average grade is A");
}else{
    console.log("your entered grade is invalid");
}
*/
var subj1, subj2, subj3;
subj1=Number(prompt("Enter your 1st subject grade, please!"));
subj2=Number(prompt("Enter your 2nd subject grade, please!"));
subj3=Number(prompt("Enter your 3d subject grade, please!"));
averageGrade=(subj1+subj2+subj3)/3

if((subj1<0||subj1>100)||(subj2<0||subj2>100)||(subj3<0||subj3>100)){
    console.log("enter grades valid numbers between 0 and 100");
}else if(averageGrade<=59){
    console.log("your average grade is F");
}else if(averageGrade<=69){
    console.log("your average grade is D");
}else if(averageGrade<=79){
    console.log("your average grade is C");
}else if(averageGrade<=89){
    console.log("your average grade is B");
}else {
    console.log("your average grade is A");
}



