/*
Assignment-12/Two-Dimensional Array 
Submit Assignment 
Due Sunday by 11:59pm Points 0 Submitting a text entry box 



Question 1:
Write a javascript program to create an array of 8 * 8 size and initialize all the array elements starting from 1 till 64 (using for loop) as follows:
1 2 3 4 5 6 7 8
9 10 11 12 13 14 15 16
17 18 19 20 21 22 23 24
25 26 27 28 29 30 31 32
33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48
49 50 51 52 53 54 55 56
57 58 59 60 61 62 63 64
Write a nested for loop to print all the elements of 2-Dimensional array in above format.
*/
/*
var array1=Array(8);
var array2=Array(8);
var array3=Array(8);
var array4=Array(8);
var array5=Array(8);
var array6=Array(8);
var array7=Array(8);
var array8=Array(8);
var multiArrayOf8=[array1, array2, array3, array4, array5, array6, array7, array8];
for(var i=0; i<array1.length; i++){
    array1[i]=i+1;
}
for(var i=0; i<array2.length; i++){
    array2[i]=i+9;
}
for(var i=0; i<array3.length; i++){
    array3[i]=i+17;
}
for(var i=0; i<array4.length; i++){
    array4[i]=i+25;
}
for(var i=0; i<array5.length; i++){
    array5[i]=i+33;
}
for(var i=0; i<array6.length; i++){
    array6[i]=i+41;
}
for(var i=0; i<array7.length; i++){
    array7[i]=i+49;
}
for(var i=0; i<array8.length; i++){
    array8[i]=i+57;
}
 
for(var i=0; i<multiArrayOf8.length; i++){
    var a="";
    var innerArrays=multiArrayOf8[i].length;
    for(var j=0; j<innerArrays; j++){
       a=a+multiArrayOf8[i][j]+" "; 
    } 
   console.log(a);
}
*/
/*
Question 2:
Write a javascript program to create following 2-Dimensional array of 8 * 8 size [to resemble chess board] using Data instantiation:
W B W B W B W B
B W B W B W B W
W B W B W B W B
B W B W B W B W
W B W B W B W B
B W B W B W B W
W B W B W B W B
B W B W B W B W
*/
/*
var innerArrays=Array(8);
var multiArray=[innerArrays, innerArrays, innerArrays, innerArrays, innerArrays, innerArrays, innerArrays, innerArrays,];
var a="W";
var b="B";
for(var i=0; i<multiArray.length; i++){
    var a="";
    for(var j=0; j<innerArrays.length; j++){
        if((i+j)%2==0){
            multiArray[i][j]="W";
        }else if((i+j)%2==1){
            multiArray[i][j]="B";
        }
        a=a+multiArray[i][j]+"  ";
    }
    console.log(a);
}
*/


//Question 3:
/*
var numbers = [
[90, 10, 231],
[-20, 80, 100, 23, 54],
[45, 22],
[87, 98, -100, 49, 73, 35, 19]
];

//Write logic to find out highest number in above array.
var max=numbers[0][0];
for(var i=0; i<numbers.length; i++){
    innerArrays=numbers[i].length;
    for(var j=0; j<innerArrays; j++){
        if(max<numbers[i][j]){
            max=numbers[i][j];
        }
    }
}
console.log(max);//Output: 231
*/