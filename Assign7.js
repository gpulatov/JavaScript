//HOME Work. Assignment#7.
/*
Question-1
Print following output using nested for loops:
1
22
333
4444
55555
666666
7777777
*/

//Answer-1
/*
for(var i=1; i<=7; i++){ 
    console.log(num="");
        for(var p=1; p<=i; p++){ 
           num+=i;
        }
            console.log(num);
    }   
*/ 

/*
Question-2
Print following output using nested for loops.
4     3     2     1
   3     2      1
      2      1
         1
*/
//Answer 2.
/*
for(var i=4; i>=1; i--){
    console.log(num="");
    if(i==4){
         num="\t";   
    }else if(i==3){
         num="\t\t";
     }else if(i==2){
         num="\t\t\t";
     }else if(i==1){
         num="\t\t\t\t";
     } 
    for(var k=i; k>=1; k--){
        num+=k+"\t\t";
   }  console.log(num);
}
*/
/*
//OR ----> Haknazar's way!
var i,b,c,d="";
for(i=4;i>0;i--){
c="";
d=d+"  ";
for(b=i;b>0;b--){
c=c+b+"   ";
}console.log(d+c);
console.log("\n");
}
*/

/*
Question-3
Print following output using nested for loops.
1    2    3    4    5    6    7    8    9    10    
2    4    6    8    10    12    14    16    18    20    
   
10    20    30    40    50    60    70    80    90    100    
NOTE: 
1. 1st row is table of 1, 2nd row is table of 2 and so on.
2. You can use space between the digits on the same row.
*/
/*
//Answer 3.
for(var i=1; i<=10; i++){
    num="";
    for(var c=1; c<=10; c++){
        num=num+c*i+"  ";
    }console.log(num);
}
*/

/*
Question-4
Print following chess board using nested for loops.
W B W B W B W B 
B W B W B W B W 
W B W B W B W B 
B W B W B W B W 
W B W B W B W B 
B W B W B W B W 
W B W B W B W B 
B W B W B W B W
NOTE: 
1. Total 8 rows and 8 columns.
2. "W" and "B" are in alternate positions (row-wise or column-wise), you will not find consecutive W or B.
*/

//Answer 4.
/*
 var letter1="W";
 var letter2="B";
 
for(var i=1; i<=8; i++){
    console.log(a="");
    for(c=1; c<=8; c++){
        if(c%2==1 && i%2==1){
            b=letter1;
        }else if(c%2==0 && i%2==0){
            b=letter1;
        }else{
            b=letter2;
        }a+=b+"\t";
    }
   console.log(a);
}

//Second option for question 4

var size = 8; 
var board = "";
for (var y = 0; y < size; y++) { 
for (var x = 0; x < size; x++) {
if ((x + y) % 2 == 0)
board += "W ";
else
board += "B ";
}
board += "\n";
}
console.log(board);

*/
