//Assigment 3.
//Answer for Q1. Option1.
//Solve the problem only using if statement.
var marks;
marks=parseInt(prompt("Please enter your mark below. Note: only use numbers between 0 and 100"));

if(marks>=0 && marks<60){
    console.log("Fail"); 
}
if(marks>=60 && marks<90){
    console.log("Pass"); 
}
if(marks>=90 && marks<=100){
    console.log("Passed with Distinction"); 
}
if(marks<0 || marks>100){
    console.log("Entered value is invalid, please enter your number between 0 and 100");
}

//Answer for Q1.Option2.
//Solve the problem using if-else statement.
var marks;
marks=parseInt(prompt("Please enter your mark below. Note: only use numbers between 0 and 100"));

if(marks>=0 && marks<60){
    console.log("Fail");
}else{
    if(marks>=60 && marks<90){
        console.log("Pass");
        }
    else{
    if(marks>=90 && marks<=100){
        console.log("Passed with Distinction"); 
        }
        else{
        console.log("Entered value is invalid, please enter your number between 0 and 100");
        }
    }
}
//Answer for Q1. Option3.
//Solve the problem using if-elseif-else statement.
var marks;
marks=parseInt(prompt("Please enter your mark below. Note: only use numbers between 0 and 100"));

if(marks>=0 && marks<60){
    console.log("Fail");
}
else if(marks>=60 && marks<90){
    console.log("Pass"); 
}
else if(marks>=90 && marks<=100){
    console.log("Passed with Distinction"); 
}else{
    console.log("Entered value is invalid, please enter your number between 0 and 100");
}
*/
/*
//Answer for Q2. 

var userName,Password,expectedUserName,expectedPassword; 
userName=prompt("Enter your user name");
Password=prompt("Enter your password");
expectedUserName="cybertek";
expectedPassword="SDETbatch9";

if(userName=="" && Password==""){
    console.log("UserName and Password Fields cannot be empty");
}else if(userName=="" && Password!=""){
       console.log("UserName cannot be empty");
}else if(userName!="" && Password==""){
       console.log("Password cannot be empty");
}else if(expectedUserName==userName && expectedPassword==Password){
       console.log("You logged in successfully!");
}else {
       console.log("UserName or password is not valid. Please verify");
}
*/
/*
if(""){
    if(""){
       console.log("");
}else{
    console("")
    } 
 }
*/

/* 
//Answer for Q3.

var num1,num2,operator;
num1=parseInt(prompt("Please enter your 1st num"));
num2=parseInt(prompt("Please enter your 2nd num"));
operator=prompt("Please enter any operator you want (addition or subtraction or multiplication or division)");

if(num1==="" && num2===""){
    console.log("Please enter valid numbers");
}else{
    if(operator=="+"){
        console.log(num1+num2);
}else if(operator=="-"){
        console.log(num1-num2);
}else if(operator=="*"){
        console.log(num1*num2);
}else if(operator=="/"){
        console.log(num1/num2);
}else{
    console.log("Enter valid operator")
    }
} */
/*
//Answer for Q4.

 var income,taxAmount;
income=Number(prompt("Please enter your income"));
a=150000000;
b=300000000;
c=600000000;      
d=1200000000;

if(income<0||income==""){
    console.log("Income can not be negative number or empty")
}else if(income<=150000000){
    console.log("Your income: "+income);
    console.log("The tax amount you have to pay: "+income*0.25);
}else if(income<=300000000){
    console.log("Your income: "+income);
    console.log("The tax amount you have to pay: "+((income-a)*0.30+a*0.25));
}else if(income<=600000000){
    console.log("Your income: "+income);
    console.log("The tax amount you have to pay: "+((income-b)*0.35+a*0.30+a*0.25));
}else if(income<=1200000000){
    console.log("Your income: "+income);
    console.log("The tax amount you have to pay: "+((income-c)*0.40+b*0.35+a*0.30+a*0.25));
}else{
    console.log("Your income: "+income);
    console.log("The tax amount you have to pay: "+((income-d)*0.50+c*0.40+b*0.35+a*0.30+a*0.25));
}
*/
/*
//Answer for Q5.

var year,leapYear1,leapYear2,leapYear3;

year=Number(prompt("Enter any year in numbers. Note: Input year should be 'yyyy' format!"));

leapYear1=year%4;
leapYear2=year%100;
leapYear3=year%400;

if(year<0||year<1000||year>9999){
    console.log("Invalid input, please input year in 'yyyy' format!");
}else if((leapYear1==0 && leapYear2!=0)||leapYear3==0){
    console.log(year+" is Leap Year.");
}else{
    console.log(year+" is NOT Leap Year.")
}

*/
/*
//Answer for Q6.

var call_Qty,minimumCharge;

call_Qty=parseInt(prompt("Please input your monthly call QTY for past month according to your phone bill statement."));

minimumCharge=200; 
a=50;
b=100;
c=150;
d=200;

if(call_Qty<0){
        console.log("Invalid input. Please enter valid numbers");
}else if(call_Qty<=100){
    console.log("According to monthly statement, during the month you made "+call_Qty+" calls and your bill is $"+minimumCharge);
}else if(call_Qty<=150){
    console.log("According to monthly statement, during the month you made "+call_Qty+" calls and your bill is $"+(minimumCharge+(call_Qty-b)*0.60));
}else if(call_Qty<=200){
    console.log("According to monthly statement, during the month you made "+call_Qty+" calls and your bill is $"+(minimumCharge+a*0.60+(call_Qty-c)*0.50));
}else{
    console.log("According to monthly statement, during the month you made "+call_Qty+" calls and your bill is $"+(minimumCharge+a*0.60+a*0.50+(call_Qty-d)*0.40));
}
*/


//var num, 
//num=parseInt(prompt("Enter your num!"));
//
//
//switch(num){
//    case num%2==0:
//        console.log("Your entered num is EVEN!");
//        break;
//    case num%2!=0:
//        console.log("Your entered num is ODD!");
//        break;    
//    default:
//        console.log("Please enter valid number!");
//        break;
//}