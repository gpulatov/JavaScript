//==================================================
 //***********Project-1 ****************************
//===================================================
/*
Project Requirements
1. Build a function constructor called Question to describe a question. A question should include:
   a)Question itself
   b)The answer from which the player can choose the correct one (choose an adequate data structure here, array, object,etc)
   c)Correct answer(I would use a number for this)
*/
 /* 
    function Question(questionParameter, answerOptions, correctAnswer){
    this.askQuestion = questionParameter;
    this.answer = answerOptions;
    this.corAnswer = correctAnswer;
}

//2. Create a couple of questions using the constructor

var Question1 = new Question("If the 'condition' evaluates to _____ ,any statements in the subsequent code block are executed",["boolean", "false", "true", "string"], [1,2,3,4]);

var Question2 = new Question("Which expression below would determine if a number was odd?", ["number%2==0","number%2!=1","number%2=1","number%2==1"], [1,2,3,4]);

var Question3 = new Question("______method returns a char value at the given index number", ["length","charAt()","indexOf()","lastIndexOf()"], [1,2,3,4]);

var Question4 = new Question("method is used to______ to string into an array of substrings and returns the new array", ["slice()","search()","splice()","split()"], [1,2,3,4]);

var Question5 = new Question("Object constructors can use a ______as a template for creating objects", ["method","array","function","object"], [1,2,3,4]);

var Question6 = new Question("What is the best group in Cybertek school?", ["Cyberteksans","VA Rockets","Transformers","BigBugs"], [1,2,3,4]);

//3. Store them all inside an array

var questions=[];
questions[0]=Question1;
questions[1]=Question2;
questions[2]=Question3;
questions[3]=Question4;
questions[4]=Question5;
questions[5]=Question6;

//4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint:write a method for the question objects for this task)
    var a = Math.random()*5+0;
    var randN = Math.round(a);
   var randomQ=function(){
        var randomQuestion = questions[randN].askQuestion;
         console.log(randomQuestion);
        for(var i=0; i<(questions[randN].answer).length; i++){
            console.log(i+1+": "+questions[randN].answer[i]);
        }
   }
   randomQ();

//5. Use the prompt function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4

var answerData = prompt("Please try to select correct answer. \nNote: your answer input should be in number which assigned to answers");

//6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this)

var checkAnswer = function(){
//    for(var i=0; i<(questions[randN].corAnswer).length; i++)
    if((answerData==Question1.corAnswer[2] && questions[randN]==Question1) || (answerData==Question2.corAnswer[3] && questions[randN]==Question2)|| (answerData==Question3.corAnswer[1] && questions[randN]==Question3)|| (answerData==Question4.corAnswer[3] && questions[randN]==Question4)|| (answerData==Question5.corAnswer[2] && questions[randN]==Question5)|| (answerData==Question6.corAnswer[0] && questions[randN]==Question6)){
        console.log("Correct answer!");
    }else{
        console.log("Wrong. Please try again!");
    }
}
checkAnswer();
*/

//==================================================
 //***********Assignment-22/Objects ***************
//===================================================
/*
//CAR GAS PRICE CALCULATOR
//1-Ask user to enter min and max mileage and create 4 random mileage between max and min and store them into an array

var mileageArray = new Array(4);

var maxM = prompt("Enter your upperbond mileage, please!");
var minM = prompt("Enter your lowerbond mileage, please!");
minM = Math.ceil(minM);
maxM = Math.ceil(maxM);
   
for (var i=0; i<mileageArray.length; i++){
    var randomM = Math.floor(Math.random()*(maxM-minM)+minM);
    mileageArray[i] = randomM;
}

//2-Ask user to enter the gas prices for regular, premium and supper and put them into an object with key and values

var regularGasPrice = prompt("Enter gallon price for regular gas, please!");
var premiumGasPrice = prompt("Enter gallon price for premium gas, please!");
var superGasPrice = prompt("Enter gallon price for super gas, please!");

var gas = {
    regular: regularGasPrice,
    premium: premiumGasPrice,
    super: superGasPrice
};

//3-Create a constructor called Car which includes properties: make, model, year, mileage, level, tank.

function car(makePar, modelPar, yearPar, mileagePar, levelPar, tankPar){
    this.make = makePar;
    this.model = modelPar;
    this.year = yearPar;
    this.mileage = mileagePar;
    this.level = levelPar;
    this.tank = tankPar;


    //4-Add a method to calculate the average mileage

    this.averageMileage = function(){
        var total=0;
        for(var i=0; i<mileageArray.length; i++){
            total+=mileageArray[i];
        }
        return Math.round(total/mileageArray.length);
    } 
    var avMileage = this.averageMileage();

    //5-Add a method to calculate the how much gas comsume:

    this.gasConsume = function(){

        if(avMileage>=0 && avMileage<500){
            return this.tank=this.tank*1.1;
        }else if(avMileage<1000){
            return this.tank=this.tank*1.2;
        }else if(avMileage<5000){
            return this.tank=this.tank*1.3;
        }else if(avMileage<10000){
            return this.tank=this.tank*1.4;
        }else if(avMileage>=10000){
            return this.tank=this.tank*1.5;
        }     
    }

    //6-Add a method to calculate the cost of the gas:
    this.costOfGas = function(){

        if(this.year==2018){
            return calCostOfGas = this.tank*this.level;
        }else if(this.year>=2010 && this.year<2018){
            return calCostOfGas = this.tank*this.level;
        }else if(this.year>=2000 && this.year<2010){
            return calCostOfGas = this.tank*this.level;
        }
    }
}
//7-Create couple of car objects and console the cost of the gas
var car1 = new car("Honda", "Pilot", 2017, mileageArray, gas.premium, 24)
var car2 = new car("Nissan", "Murano", 2009, mileageArray, gas.regular, 20)
var car1 = new car("Toyota", "Highlander", 2018, mileageArray, gas.super, 24)


console.log(car1.gasConsume());
console.log(car1.costOfGas());
*/




