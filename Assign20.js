/*
=======================================================
Assignment-20/Objects 
========================================================
Question-1

//For Mark and John:
//1. For each of them, create an object with properties for their full name,mass,and height 

function Person(name, surName, massInfo, heightInfo){
    this.firstName = name;
    this.lastName = surName;
    this.mass = massInfo; 
    this.height = heightInfo;        
}

var person1 = new Person("Mark", "Taylor", 175, 5.7);
var person2 = new Person("John", "Samuel", 180, 6);

//2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.


person1.calculateBMI = function(){
        return BMI = this.mass/(this.height*this.height);
    };
person2.calculateBMI = function(){
        return BMI = this.mass/(this.height*this.height);
    };

var BMI1= person1.calculateBMI();
var BMI2= person2.calculateBMI();
MarkBMI = BMI1.toFixed(1);
JohnBMI = BMI2.toFixed(1);


//3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Do not forget they might have the same BMI 
//****Remember: BMI = mass/(height*height);
if(MarkBMI>JohnBMI){
    console.log(person1.firstName+" "+person1.lastName+" has the highest BMI and it is "+MarkBMI);
}else if(MarkBMI<JohnBMI){
    console.log(person2.firstName+" "+person2.lastName+" has the highest BMI and it is "+JohnBMI);
}else{
    console.log("Both BMIs are equal");
}
*/

/*
//Question-2
1. Build a function constructor called Salary to calculate the average salary of Cybertek Student. Salary constructor should include:
    - First Name of the student
    - Last Name of the student
    - Gender of the student
    - Age of the student
    - Studying Hours of the student

function Salary(name, surName, genderInfo, ageInfo, averageHours){
    this.firstName = name;
    this.lastName = surName;
    this.gender = genderInfo;
    this.age = ageInfo;
    this.studiedHours=averageHours;
}

var student1 = new Salary("Mike", "Smith", "M", 28, "averageNum");

//2. Ask student to enter how many hours he/she studied for 5 weeks and store these hours in the array. (Weekly hours should be 0-10 hours max)
studyHours=[];
for(var i=1; i<=5; i++){
    var weekHours = Number(prompt("Please enter your weekly studied hours for week "+i+"\nNote: weekly hours should be 0-10 hours max!"));
    if(weekHours>=0 && weekHours<=10){
    studyHours.push(weekHours);
    }else{
        alert("Entered weekly hours should be 0-10 hours max!")
    }
}
student1.studyHours;

//3. Create a method in your constructor to calculate your average studying hours for 5 weeks.
student1.studiedHours=function(){
    var sum=0;
    for(var i=0; i<studyHours.length; i++){
        sum+=studyHours[i];
    }
    return averageResult=sum/studyHours.length;
}
 var averageH=student1.studiedHours(); // here we are calling our function to find the average of weekly hours.
//4. Create another method to calculate the salary.
/*
        - if average hours is less than 4 hours, you need to tell student: "Not eligible to go to market, and study more"
        - if average hours is between 4 and 6(included) , salary for that person will be 10 percent more than base salary
        - if average hours is between 6 and 8(included) , salary for that person will be 20 percent more than base salary
        - if average hours is between 8 and 10(included) , salary for that person will be 50 percent more than base salary      
        base salary will be a parameter of the salaryCalculate method.
*/
/*
student1.calcSalary=function(){
    var baseSalary=100000;
    if(averageH>8 && averageH<=10){
        baseSalary=baseSalary*1.5;
    }else if(averageH>6){
        baseSalary=baseSalary*1.2;
    }else if(averageH>4){
        baseSalary=baseSalary*1.1;
    }else if(averageH>=0){
        baseSalary="not eligible to go to market, and you should study more!";
    }
    if(averageH>4){
        return console.log(student1.firstName+" "+student1.lastName+" studied average "+student1.studiedHours()+" hours weekly and his/her salary is $"+baseSalary);
    }else{
        return console.log("You studied weekly average are "+averageH+" hours and you are "+baseSalary);
    }
}
//5- Print the student salary with his name:  "Mike Smith Salary is $150000"

student1.calcSalary();
*/

//function pairs(k, arr) {
//var count=0;
//  
//    for(var i=0; i<arr.length; i++){
//        
//        for(var j=1; j<arr.length; j++){
//        if(arr[i]+k==arr[j]){
//            count++;
//        }
//      } 
//    }
//console.log(count);
//}
//
//pairs(2,[1,5,3,4,2,10,7,9,6,12]);
