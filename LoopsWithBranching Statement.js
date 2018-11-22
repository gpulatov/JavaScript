/* BREAK on LOOP
var i=0;

while(i<6){
    if(i==3){
        break;
    }
    i++;
    console.log(i);
}
*/
/*
//Continue on LOOP
var b="";
for(var i=1; i<=10; i++){
    if(i%2==0){
        continue;
    }
    b=b+i+" ";
}console.log(b);
*/
/*
var num;
var total=0;
while(true){
    num=+prompt("Enter your num, please");
    if(num<0){
        break;
    }
    total=total+num;
}
console.log(total);
*/
/*
var total=0;
for(i=0; i<5; i++){
   var num=+prompt("Enter your num, please");
    if(num<=0){
        continue;
    }
      total+=num;
}console.log(total);
*/
/*
var total=0;
var i=0
while(i<5){
    i++;
   var num=+prompt("Enter your num, please");
    if(num<=0){
        continue;
    }
      total+=num;
}console.log(total);
*/
/*
var start=1;
var sum=0;

do{
    if(start%2==0){
        continue;
    }
    sum+=start;
}while(++start<=10);
console.log(sum);
*/
/*
var i=0;
outerLoop:
do{
    i=8;
    innerLoop:
    while(true){
        console.log(i--);
        if(i==4){
            break outerLoop;
        }
    }
}while(true);
*/
/*
loop1:
for (var i=0;i<3;i++) {
    loop2:
    for (var j=0;j<3;j++) {
        if (i==1 && j==1) {
            console.log("skip to outer loop");
            continue loop1;
        }
        console.log("i= "+i+" , j= "+j);
    }
}

*/


