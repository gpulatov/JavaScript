//Equality
console.log(1==1);
console.log("1"==1);
console.log(0==false);

//Inequality
console.log(1!=2);
console.log("1"!=1);
console.log(1!=true);

//Strict Equality
console.log(2===2);
console.log("3"===3);

//Non-Strict Equality
console.log(2!==2);
console.log("3"!==3);

//Greater than
console.log(6>2);
console.log(3>5);

//Greater than or equal
console.log(6>=2);
console.log(3>=3);

//Less than
console.log("6"<2);
console.log(3<5);

//Less than or equal
console.log(6<=8);
console.log(5<="5");

var b;
b=2==="2";
console.log(b);

var a,b;
var c=a>b;
a=prompt("Enter your first number");
b=prompt("Enter you second number");
a=parseInt(a);
b=parseInt(b);
console.log("First number " +a+ " is greater than second " + b + " - " + c);


