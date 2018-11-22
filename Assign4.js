//HOME Work. Assignment#4.

/*
//Answer 1.

var num = Number(prompt("Enter a number :"));
var Odd_Even = num % 2;

switch (Odd_Even) {
       case 0:
       console.log("You entered "+num + " and it is an EVEN number.")
       break;
   case 1: case-1:
       console.log("You entered "+num + " and it is an ODD number.")
       break;
   default:
       console.log("Enter a valid number!")
}
*/
/*
//Answer 2.

var num=+prompt("Enter your number, please!");

switch(num){
    case 0: case 1: case 2:
        console.log("Low number.");
        break;
    case 3: case 4: case 5:  
        console.log("Medium number.");
        break;
    default: 
        console.log("Other number.");
}
*/
/*
//Answer 3.

var totalCostOfShopping=+prompt("What is your total cost of shopping?");
var payAmount1=totalCostOfShopping*0.95;
var payAmount2=totalCostOfShopping*0.92;

switch(totalCostOfShopping){
    case 1000:
        console.log("You have to pay $"+payAmount1+" after 5% discount");
    break;
    case 10000:
        console.log("You have to pay $"+payAmount2+" after 8% discount");
    break;
    default:
        console.log("Here is no discount and you should pay $"+totalCostOfShopping);
}
*/
/*

//Answer 4.
var rd,ora,gre,light;
light=prompt("Enter traffic light code as 'rd', 'ora' or 'gre'");
switch(light){
    case "rd":
        console.log("Traffic light is now Red");
        break;
    case "ora":
        console.log("Traffic light is now Orange");
        break;
    case "gre":
        console.log("Traffic light is now Green");
        break;
    default:
        console.log("Error in input!")
}
*/
/*
let shoppingCost = +prompt("Please enter the shopping cost :");
let discount = 0;
let totalCost = 0;
switch (shoppingCost) {
   case 1000:
       discount = shoppingCost * .05;
       totalCost = shoppingCost - discount;
       console.log("For " + shoppingCost + " $ shopping, you have %5 discount :" + discount + " $");
       console.log("Total amount after discount is : " + totalCost);
       break;
   case 10000:
       discount = shoppingCost * .08;
       totalCost = shoppingCost - discount;
       console.log("For " + shoppingCost + " $ shopping, you have %8 discount :" + discount + " $");
       console.log("Total amount after discount is : " + totalCost);
       break;
   default:
       console.log("There is no discount!");
       break;
}
*/