var revenue, price, QTY, discount;

price=+prompt("What is the unit price of product?");
QTY=+prompt("What is the QTY you want to buy?");
revenue=QTY*price;
discount1=revenue*0;
discount2=revenue*0.15;
discount3=revenue*0.25;
discount4=revenue*0.40;
if(revenue>=0 && revenue<=3000){
    console.log("Based on your purchase discount is "+discount1);
    console.log("Your total net purchase is "+revenue+" and you are not eligible for discount");
}else if(revenue<=5000){
    console.log("Based on your purchase discount is "+discount2);
    console.log("Your total net purchase is after discount"+(revenue-discount2));
}else if(revenue<=10000){
    console.log("Based on your purchase discount is "+discount3);
    console.log("Your total net purchase is after discount"+(revenue-discount3));
}else{
    console.log("Based on your purchase discount is "+discount4);
    console.log("Your total net purchase is after discount"+(revenue-discount4));
}


var car=prompt("Enter you car model");

switch(car){
    case "toyota":
        console.log("Good for Uber");
        break;
    case "ferrari":
        console.log("Good for race");
        break;
    case "mercedes":
        console.log("Good for luxury");
        break;
    default:
        console.log("do not buy that one!");
        break;
}