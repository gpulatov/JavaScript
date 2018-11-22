//Operator: x+y

//Number+number = Addition
console.log(5+10);
console.log(20+100);

//boolean + number = Addition 
// false counts as 0, true as 1

console.log(false +3);
console.log(true + 3);

//boolean + boolean = Addition 
// false counts as 0, true as 1

console.log(false + true);
console.log(true + true);

//Number + String = Concatenation
console.log(5 + "School");

//Boolean + String = Concatenation
console.log(false + "world");

//String + String = Concatenation
console.log("Hello" + "world");

//Operator : x - y
console.log(8-3);
console.log(10-25);
console.log(-10-25);

//Operator : x * y
console.log(8 * 3);
console.log(8 * -10);

//Operator : x / y
console.log(20/5);
console.log(20/0);
console.log(0/5);

//Operator : x % y
console.log(20%6);
console.log(20%10);

//Operator : x++ (post increment) or                    ++x (preincrement) 
var x = 3;
y=x++;
//y=++x;
console.log(x);
console.log(y);

//Operator : x-- (post decrement) or                    --x (pre decrement) 
var x=3;
//y=x--;
y=--x;
console.log(x);
console.log(y);

console.log(46+90);
/*
var num1, num2, sum;
num1=100;
num2=80;
sum=num1+num2;
console.log(sum);

num1=prompt("enter your num1");
num2=prompt("enter your num2");

num1=parseInt(num1);
num2=parseInt(num2);
sum=num1+num2;
console.log(num1 + " + " + num2 + " = "+ sum);
*/
/*
var celcius, fahrenheit;
celcius=prompt("Enter your temperature as celcius format");
fahrenheit=(celcius*9/5+32);
console.log("converting "+celcius+ " C to fahrenheit it will be "+ fahrenheit+ " F");
*/
/*
var mile, km;
mile=prompt("Enter your miles you went");
mile=parseInt(mile);
km=1.609344*mile;
console.log("your "+mile+ " miles it will be "+ km+ " kilometers");
*/

var a=50;
sum=--a + a++ + a-- + a++ ;
console.log(sum);

//a: 50-->49-->50-->49-->50 
//sum:   
 

//a: 1-->0-->1-->0-->-1 So in data bucket a it start to change from left to right. It does not follow priority of math.
//sum=-1 +0/-1*(-1)=-1

var a=1, sum;
sum=-a-- + a++/-a-- * --a;
console.log(sum);