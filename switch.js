//Today is 7/20/18  //Switch statement//
/*
var foodType;
foodType= prompt("Enter your Fav food");

switch(foodType){
    case "Turkish":
        console.log("You love kebab");
        break;
    case "Italian":
        console.log("You love pizza");
        break;
    case "Uzbek":
        console.log("You love osh");
        break;
    default:
        console.log("may be you are not hungry");
        break;
}

var laptopModel;
laptopModel= prompt("What is your laptop model");

switch(laptopModel){
    case "apple":
        console.log("Apple-novirus");
        break;
    case "dell":
        console.log("Tough one");
        break;
    case "acer":
        console.log("Cheap one");
        break;
    default:
        console.log("do not buy that one");
        break;
}


var weekdays;
weekdays= prompt("Enter any numbers between 1 and 7, please");

switch(weekdays){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Please enter numbers between 1 and 7");
        break;
}

*/
/*
var num;
num= prompt("Enter any numbers please");

switch(num){
    case num%2==0:
        console.log("EVEN");
        break;
    default:
        console.log("ODD");
        break;
}
*/
let number = +prompt("Enter a number :");
let evenOdd = number % 2;
switch (evenOdd) {
   case 0:
       console.log(number + " is an even number.")
       break;
   case 1:
       console.log(number + " is an odd number.")
       break;
   default:
       console.log("Enter a valid number!")
}








