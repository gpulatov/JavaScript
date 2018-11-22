//Today is 7/30/18

var repeat=+prompt("Enter how many times you want to compare the numbers");

for(var i=1; i<=repeat; i++){
    num1=+prompt("Enter your 1st num");
    num2=+prompt("Enter your 2nd num");
    num3=+prompt("Enter your 3rd num");
    if(num1==num2 && num2==num3){
        console.log("Numbers are equal!");
    }else if(num1>num2 && num1>num3){
        console.log(num1+" is num1 and it is the lagerst");
    }else if(num2>num1 && num2>num3){
        console.log(num2+" is num2 and it is the lagerst");
    }else{
        console.log(num3+" is num3 and it is the lagerst");
    }
}

do{
    num1=+prompt("Enter your 1st num");
    num2=+prompt("Enter your 2nd num");
    num3=+prompt("Enter your 3rd num");
    if(num1==num2 && num2==num3){
        console.log("Numbers are equal!");
    }else if(num1>num2 && num1>num3){
        console.log(num1+" is num1 and it is the largest");
    }else if(num2>num1 && num2>num3){
        console.log(num2+" is num2 and it is the largest");
    }else{
        console.log(num3+" is num3 and it is the largest");
    }
    ask=prompt("Do you want to continue?");
    if(ask==1){
        continue;
    }else if(ask==2){
        console.log("Thank you!")
        break;
    }else{
        alert("Enter 1 or 2, please");
    }
}while(true);

var counter=1;
    
do{
    num1=+prompt("Enter your 1st num");
    num2=+prompt("Enter your 2nd num");
    num3=+prompt("Enter your 3rd num");
    if(num1==num2 && num2==num3){
        alert("Numbers are equal!");
    }else if(num1>num2 && num1>num3){
        alert(num1+" is num1 and it is the largest");
    }else if(num2>num1 && num2>num3){
        alert(num2+" is num2 and it is the largest");
    }else{
        alert(num3+" is num3 and it is the largest");
    }
    ask=prompt("Do you want to continue?");
    
    if(ask==1){
        counter++;
        continue;
    }else if(ask==2){
        console.log("Thank you! You have tried "+counter +" times.")
        break;
    }else{
        alert("Enter 1 or 2, please");
    }
}while(true);