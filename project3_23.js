//Assignment-23/Prototype 



//1- Ask employee to enter the hours he/she worked for 4 weeks. and put those hours into an array
let arrWorkedHours=new Array();
for(let i=0; i<4; i++){
    let askHours=+prompt(`Please enter the worked hours total for the ${i+1}-week!`);
    arrWorkedHours.push(askHours);
}

//2- Ask employee to enter his/her wage and assign it to a variable
let hourlyRate = +prompt(`Please enter your hourly rate!`);

//3- Create an employee constructor with properties   ' fName, lName, birthYear'

function Employee(fNamePar, lNamePar, birthYearPar){
    this.fName = fNamePar;
    this.lName = lNamePar;
    this.birthYear= birthYearPar;

//4- Add a method to employee constructor that creates an employee id. 
    this.EmployID= () => {
        let age = new Date().getFullYear()-this.birthYear;
        let ID = `${this.fName.charAt(0)}${this.lName.charAt(0)}${age}`;
        return ID;
    }
}

//    Employee id will be first character of first and last name and the age. 
//    Example: First Name: Mike
//                    Last Name:Smith
//                    Age:30
//                    Employee ID: MS30
//    **For age calculation, use date object.
//    */
//5- Create a Payroll constructor with properties 'hours and insurance'
function Payroll (hoursPar, insurancePar){
    this.hours = hoursPar;
    this.insurance = insurancePar;
//6- Add a method to Payroll constructor that calculates the total hours that employee worked for 4 weeks. 
 
    this.totalHours =(... arrWorkedHours) =>{
        let totalH = 0;
        for(let elem_ts of this.hours){// here elem_ts are elements of Array                                              arrWorkedHours.
            totalH+=elem_ts;
        }
        return totalH;
    }
    //7- Add a method to Payroll constructor that calculates the earning for 1 month
    //**earning is wage*total hours; if employee has insurance, add another $600
    this.earnings = insurancePar =>{
        let x;
        if(this.insurance){
            x = this.totalHours()*hourlyRate+this.calcOT()*hourlyRate*0.5+600;
        }else{
            x = this.totalHours()*hourlyRate+this.calcOT()*hourlyRate*0.5;
        }
        return x;
    }
}



//8- Create a method that will calculate the overtime hours that employee worked for 4 weeks.
Employee.prototype.calcOT = function(){
    let OT=0;
    for(let weeklyHours of arrWorkedHours){
    //for(let i=0; i<arrWorkedHours.length; i++){    
    if(weeklyHours>40){                           
            OT+=(weeklyHours-40);
        }
    }
     return OT;
}

    //**work hours is weekly 40 hours. Anything more than is overtime.
//9- For the overtime hours, increase the wage %50.
    //**if employee worked 20 hours overtime, his earning will be  "earning + (wage * 1.5 * 20)"
//10-Run the program
     //Output should be : Employee ID:___'s overtime hours for this month is:__ and earning is $__

let emp1 = new Employee("Mike", "Smith", 1980);
let pay1 = new Payroll(arrWorkedHours, true);
pay1.__proto__.__proto__ = Employee.prototype;
console.log(`${emp1.EmployID()}'s overtime hours for this month is: ${pay1.calcOT()} and the earning is: $${pay1.earnings()};`);

//11- Develop your code such a way that calculate overtime hours method (requirement-8) should be shared by both constructor. 
//12- Try to use ES6 methods we learned like let, const, spread/rest operators, arrow functions, etc
/*
Sample Output:
Week1 hours: 45
Week2 hours: 45
Week3 hours: 45
Week4 hours: 45
var emp1=new Employee("mike","smith",1980);
let p1=new Payroll(arr,true);
let wage=20;
Console: Employee ID:ms38's overtime hours for this month is:20 and earning is $4800
*/





