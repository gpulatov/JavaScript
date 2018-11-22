A value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. 
Write a function that accepts an array and a number, and prints true if the given number is everywhere in the array.
 
*/
/*
var isEveryWhere = function(array,number){
    condition=false;
    for(var i=0; i<array.length; i++){
        if((number==array[i]) && (number==array[i+1] || number==array[i+2])){
          console.log("true");
            break;
        }else{
            console.log("false");
            break;
        }
    }
}
//Sample Output:
isEveryWhere([1, 2, 1, 3], 1); //- >true
isEveryWhere([1, 2, 1, 3], 2); //- >false
isEveryWhere([1, 2, 1, 3, 4], 1); //- >true
isEveryWhere([1, 2, 4, 3, 1], 1); //- >false
*/

/*
=========================================================================
Question-5
Write a function that accepts two arrays of the same length. For every element in array1, consider the corresponding element in array2 (at the same index). Return the count of the number of times that two elements differ by 2 or less, but are not equal.
 
*/
/*
var matchUp = function(array1, array2){
    var counter=0;
   for(var i=0; i<array1.length; i++){
       if((array1[i]-array2[i])<=2 && (array2[i]-array1[i])<=2 && (array2[i]-array1[i])!=0){
           counter++;
       }
   }
    console.log(counter);
}
//Sample Output:
matchUp([1, 2, 3], [2, 3, 10]); //->2
matchUp([1, 2, 3], [2, 3, 5]); //->3
matchUp([1, 2, 3], [2, 3, 3]); //->2
*/

/*=====================================================
Question-6
Write a function that accepts an array and prints true if the array contains 3 even or 3 odd values all next to each other.
 
*/

/*
var modThree=function(array){
    var condition=false;
    for(var i=0; i<array.length; i++){
        if(array[i]%2==0 && array[i+1]%2==0 && array[i+2]%2==0){
            console.log("true");
            break;  
        }else if((array[i]%2==1 || array[i]==1) && (array[i+1]%2==1 || array[i+1]==1) && (array[i+2]%2==1 || array[i+2]==1)){
            console.log("true");
            break;  
        }else if(i==array.length-1){
            console.log("false"); 
        }
    }
}
//Sample Output:
modThree([2, 1, 3, 5]); //->true
modThree([2, 1, 2, 5]); //->false
modThree([2, 4, 2, 5]); //->true
*/

/*
=================================================================
Question-7
Write a function that accepts an array and prints true if the array contains,somewhere,three increasing adjacent numbers like 4,5,6,... or 23,24,25.
 */
/*
var tripleUp = function(array){
    for(var i=0; i<array.length; i++){
        if(array[i]+1==array[i+1] && array[i]+2==array[i+2]){
            console.log("true");
            break;
        }else if(i==array.length-1){
            console.log("false");
        }
    }
}
//Sample Output:
tripleUp([1, 4, 5, 6, 2]);// ->true
tripleUp([1, 2, 3]); //->true
tripleUp([1, 2, 4]); //->false
tripleUp([1, 2, 4, 5, 8, 9]); //->false
*/

/*
=================================================================
Question-8
Write a function that accepts start and end numbers. 
Given start and end numbers, return a new array containing the sequence of integers from start up to but not including end, so start=5 and end=10 yields [5, 6, 7, 8, 9].
 */
/*
var fizzArray3 = function(num1, num2){
    var myArray=[];
   
    for(var i=num1; i<num2; i++){
       myArray.push(i);
    }
    console.log(myArray);
}

//Sample Output:
fizzArray3(5, 10) //→ [5, 6, 7, 8, 9]
fizzArray3(11, 18) //→ [11, 12, 13, 14, 15, 16, 17]
fizzArray3(1, 3) //→ [1, 2]
*/

/*
==============================================================
Question-9
Write a function that accepts and array. For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, until encountering another multiple of 10.
 */
/*
var tenRun = function(array){
  var tenRunArray=[];
    var found10;
    
    for(var i=0; i<array.length; i++){
        if(array[i]%10==0){
            found10=array[i];
            for(var i=array.indexOf(array[i]); i<array.length; i++){
                tenRunArray[i]=found10;
                if(array[i]%10==0){
                    found10=array[i];
                    tenRunArray[i]=found10;
                }
            }
        }else{
            tenRunArray[i]=array[i];
        }
    }
    console.log(tenRunArray);
}

//Sample Output:
tenRun([2, 10, 3, 4, 20, 5]) //→ [2, 10, 10, 10, 20, 20]
tenRun([20, 3, 5, 15, 10, 1, 5, 20, 2, 30, 5, 6, 10, 12, 13]) //-------------------->----------→ [20, 20, 20, 20, 10, 10, 10, 20, 20, 30, 30, 30, 10, 10, 10]
tenRun([10, 1, 9, 20]) //→ [10, 10, 10, 20]
*/

/*
==================================================================
Question-10
It is said that an element in array is alone if there are values before and after it, and those values are different from it. Write a function that accepts an array and a number and prints the given array where every instance of the given value which is alone is replaced by whichever value to its left or rigth is larger.
*/
/*
var notAlone = function(array, num){
    for(var i=0; i<array.length; i++){
        if(num==array[i] && num!=array[i-1] && num!=array[i+1]){
            if(array[i-1]>array[i+1]){
                array[i]=array[i-1];
            }else if(array[i-1]<array[i+1]){
                array[i]=array[i+1];
            }
        }
    }
    console.log(array);
}

//Sample Output:
notAlone([1, 2, 3], 2) //→ [1, 3, 3]
notAlone([1, 2, 3, 2, 5, 2], 2) //→ [1, 3, 3, 5, 5, 2]
notAlone([3, 4], 3) //→ [3, 4]
*/