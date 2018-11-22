//Today is 7.23.18
//for(), Loop 
/*

for(var i=0;i<5;i++){
    console.log("SDET class");
}
here, i is variable; i=o means start from 0 till i<5; i++ is every time change variable value to +1.

*/

/*
for(var i=0;i<10;i++){
    console.log("Many, more, much");
}
*/
/*
for(var i=1;i<=10;i+=2){
    console.log(i);
}
*/
/*
// here is 2nd console is out of loop, so it prints 11
for (var x=1; x<10;x+=2){
  console.log(x+" apple");
}console.log(x);

*/
/*
Here is not loop, so it will count final i, that i=i+2 i equal to 3. So console prints 3+apple---> 3apple.
var x=1; x<10; x+=2;
  console.log(x+" apple");
*/
/*
for(i=4; i<=50; i+=4){
    console.log(i)
}
*/
/*
for (var i=0; i<50; i++){
    if(i%4==0){
    console.log(i);
    }
}
*/
/*
for (var i=100; i>0; i--){
    if(i%3==0){
    console.log(i);
    }
}
*/
/*
for (var i=100; i>80; i--){
    if(i%3==0){
    console.log(i+" is divisible to 3");
    }else{
    console.log(i+" is not divisible to 3")  
    }
}
*/
/*
comp reads first var repeat and ask user how many times to repeat condition inside the for Loop statement. Than goes to inside for Loop and check entered number by user if its true with value of "i". Than if true it will go to inside to for Loop.

var repeat=+prompt("How many times do you want me to repeat?")

for(var i=0; i<repeat; i++){
    var num1, num2;
    num1=+prompt("Enter your 1st num");
    num2=+prompt("Enter your 2nd num");

    if(num1>num2){
        console.log("The largest num is "+num1)
    }else if(num1<num2){
        console.log("The largest num is "+num2)
    }else{
        console.log("The nums are equal!")
    }
}
*/
/*
var repeat=+prompt("How many times do you want me to repeat?")
for (var i=1; i<repeat; i++){
    
    var num=+prompt("Enter number is between 1 and 32");
    
    if(num%2==0 && num>0 && num<=32){
    console.log(num+" is EVEN num!");
    }else if(i%2!=0 && num>0 && num<=32){
    console.log(num+" is ODD num!")    
    }else{
    console.log("Enter numbers between 1 and 32");      }
}
*/
/*
var number = +prompt("enter till what number u want to check odd||even :");
for (i = 1; i <= number; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd")
    }
}
*/
/*
//Let user to enter 5 numbers and print the total of those numbers.

var total=0;
for (var i=0; i<5; i++){
var total, num=+prompt("Enter your number");
total=total+num;
}
console.log(total+" is total of five your entered numbers");
*/

/*
//Multiplication Table.

var num=+prompt("Enter your number");
for (var i=1; i<=10; i++){
    console.log(num+"*"+i+"="+(num*i));
}

//or

var num = parseInt(prompt("Enter a number"));

if (num>0){
for (i=1; i<11; i++){    
    
    var multi = num*i;
    console.log(multi);
  }
} else {
    console.log("Enter a positive number");
}
*/


//Today is 7/24/18.
/*

var total, num=+prompt("Enter your number");
total=0;
if(num>0){
for (i=1; i<=num; i++){ 
total=total+1/i;
}
console.log(total+" is total of numbers");  
}else{
    console.log("input positive number")
}
*/
//   NESTED FOR LOOP  //

/*
for(var i=0; i<5; i++){   // if i less than 5, it goes to print "outer loop....." and go check next inner loop--->
    console.log("outer loop at state: "+i);
    for(var p=0; p<2; p++){  //--> so it starts check if p less than 2 and if it is true goes to inside print "inner loop....". Before it goes to outer loop it will check all p values that p=0, p=1 and when p=2 it stop doing inner loop and goes to outer loop, cause p should be less than 2.
        console.log("inner loop at state: "+p);
        if(p==1){
            console.log("\n");//here \n is next line, that means it leaves one space line between lines.
        }
    }
}
*/
/*
for(var i=1; i<=5; i++){ 
        for(var p=1; p<=i; p++){ 
            console.log("*");
       }
             console.log("\n");
}

*/
/*
var num;
num=+prompt("Enter your number, please");

for(var i=1; i<=num; i++){ 
    console.log(star="");
        for(var p=1; p<=i; p++){ 
            star+="*";
    }
        console.log(star);
}
*/

//   WHILE LOOP  and  DO...WHILE LOOP  //
/*
var count=1;
while(count<11){
    console.log("Count is: "+count);
    count++
}
*/
/*
var count=1;
do{
   console.log("Count is: "+count);
    count++ 
}
while(count<11)
*/
/*
var count=1;
while(count<11){
    console.log("Hello");
    count++
}
*/
/*
var count=1;
while(count++<10){
    console.log("Hello"+count);
   }
*/
/*
var count=1;
while(++count<10){
    console.log("Hello"+count);
   }

*/
/*
var num=25;
while(num-->10){
    console.log(num+" is bigger than 10");
   }
*/
/*
var num=0;
var totalEVEN=0; var totalODD=0;
while(num<=100){
    num=num+1;
    if(num%2==0){
    totalEVEN=totalEVEN+num;
    }else if(num%2==1){
    totalODD=totalODD+num;  
    }
  }
console.log("Total of even numbers are "+totalEVEN); 
console.log("Total of ODD numbers are "+totalODD);
*/
/*
var actualUserName,actualPassword,expectedUserName,expectedPassword;
expectedUserName="abc";
expectedPassword="def123";
do{
actualUserName=prompt("Enter your user name");
actualPassword=prompt("Enter your password");

}while(actualUserName!=expectedUserName || actualPassword!=expectedPassword)
console.log("You logged in succesfully!");
*/

/*
var actualNum,expectedNum;
expectedNum=12;

do{
actualNum=+prompt("Enter your number to match to hidden num");
    if(actualNum<expectedNum && actualNum>0 && actualNum<20){
        console.log(actualNum+" is too small, try again");
    }else if(actualNum>expectedNum && actualNum<=20 && actualNum>0){
        console.log(actualNum+" is too large, try again");
    }
}while(actualNum!=expectedNum)
console.log("Congrat, you got it!");
*/
/*
var actualNum,expectedNum;
expectedNum=12;

while(actualNum!=expectedNum){
actualNum=+prompt("Enter your number to match to hidden num");
    if(actualNum<0 || actualNum>20){
        alert("Your entered number out of range that 1-20");
    }else if(actualNum<expectedNum){
        alert(actualNum+" is too small, try again");
    }else if(actualNum>expectedNum){
        alert(actualNum+" is too large, try again");
    }else{
      console.log("Congrat, you got it!");  
    }
}
*/
