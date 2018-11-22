//Assignment 10/ One dimensional  array
Question 1:
Write a JavaScript Program to store numbers from 1 to 1000 in One-dimensional array and then print array contents as follows (10 elements per row): 
1 2 3 4 5 6 7 8 9 10 
11 12 13 14 15 16 17 18 19 20 
21 22 23 24 25 26 27 28 29 30 
.
.
.
991 992 993 994 995 996 997 998 999 1000
*/
// Answer 1 // Assign 10.

//var numbers=[];
//var k=0;
//for(var i=1; i<=1000; i++) {
//   numbers.push(i);
//}
//console.log(numbers);
//
//for (var j=0; j<100; j++){
//   var concet="";
//    
//    for (var c=0+k; c<10+k; c++){
//       concet+=numbers[c]+" "
//    }
//    console.log(concet); 
//    k+=10;
//}

/*
 Question 2: Assign 10.
Write a JavaScript program to store numbers 1 to 10 in an array using data instantiation.
Then write a for loop to multiply each member of above array by 19, this way you will get table of 19 stored in the above array.
Finally write another for loop to print all the array elements.
You should get following output:
19
38
57
76
95
114
133
152
171
190
*/
// Answer 2: Assign 10.

//var numbers=[1,2,3,4,5,6,7,8,9,10];
//
//for (var i=19; i<=19; i++){
//    for(var j=0; j<numbers.length; j++){
//        multipTable=i*numbers[j];
//        console.log(multipTable);
//    }
//}


//Question 3: Assign 10.
//
//Below is One-dimensional array code:
//var arr = ['A', 'Z', 'B', 'N', 'P', 'T', 'X', 'C'];
//Write the code to search for particular character in above array.
//If I search for 'B', then output should be: "B found!"
//If I search for 'E', then output should be: "E Not found!"
/*


// Answer 3: Assign 10.

var arr = ["A", "Z", "B", "N", "P", "T", "X", "C"];  
var element;

  character=prompt("To find your searching element in an Array, please enter capital letter!");

for (i=0; i<arr.length; i++){
      if (arr[i]==character){
        alert(character+" found!");
        break;
    }else if(i==arr.length-1){
        alert(character+" not found!");
        break;
    }
}
*/
/*
Question 4:
var scores = [51, 85, 32, 0, 98, 157, 82, 101, 64, 249];
Above array stores the scores of a batsman in his last 10 innings in the game of cricket.
If score is greater than or equal to 50 but less than 100, it is regarded as half-century.
If score is greater than or equal to 100 but less than 200, it is regarded as a century.
If score is greater than or equal to 200, it is regarded as a double-century.

NOTE: No scenario of triple-century in this case.
Write the code to print the number of half-centuries, centuries and double-centuries scored by the batsman.
*/


//Answer 4 of Assignment 10.
/*
var scores = [51, 85, 32, 0, 98, 157, 82, 101, 64, 249];
var halfCenturyScores=[];
var CenturyScores=[];
var DoubleCenturyScores=[];
var notRegarded=[];

for (var s=0; s<scores.length; s++){

    if(scores[s]>=50 && scores[s]<100){
        halfCenturyScores.push(s);
        
    }else if(scores[s]>=100 && scores[s]<200){
        CenturyScores.push(s);
        
    }else if(scores[s]>=200){
        DoubleCenturyScores.push(s);
        
    }else{
        notRegarded.push(scores[s]);
    }
}
alert(halfCenturyScores.length+" times scored more than 50 & less than 100 and these scores are regarded as a half-century");
alert(CenturyScores.length+" times scored more than 100 & less than 200 and these scores are regarded as a century");
alert(DoubleCenturyScores.length+" times scored more than 100 & less than 200 and these scores are regarded as a century");
alert(notRegarded+" batsman's these scores were less than 50 and they are not regarded!");
*/


/*
Question 5:
In mathematics, the Fibonacci series are the numbers in the following integer sequence:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
By definition, the first two numbers in the Fibonacci sequence are 0 and 1, 
and each subsequent number is the sum of the previous two.
Write a JavaScript Program to generate above series till n number of times (For example you can try with 
n = 10 and n = 15) and store it in One-dimensional array.
For n = 10, Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
For n = 15, Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377
Write a for loop to print all the elements of the array.
*/
/*
//Answer 5 of Assignment 10.

var num1=0, num2=1, FibonacciNum=0;
var n=+prompt("Please enter a number to know your Fibonacci series numbers");
var FibonacciNumbersArray=[];
for (var i=0; i<n; i++){
        
    FibonacciNumbersArray.push(FibonacciNum);
    num1=num2;
    num2=FibonacciNum;
    FibonacciNum=num1+num2;
}
console.log(FibonacciNumbersArray);
*/
/*
var j;
for(i=1; i<=5; i++){
    j=i;
    var a="";
    for(p=1; p<=i; p++){
        a = a + j + " ";
        j = j + 5-p;    
    }
    console.log(a);
}
*/
