//String Manipulation Methods 

//var strVar = "In order to Become a Number 1 Test Automation Developer, i need to practice at least 2 to 3 hours a day. Today is 08/11/2018. Weather is 70 F degrees."
//1) Display how many sentences in the string.
//var array=strVar.split(".");
//console.log(array.length+" sentences in the string");
//2) Display how many words in the string.
//var words=strVar.split(" ");
//console.log(words.length + " words in the string");
//3) Display todays date.
/*
var strDate="08/11/2018";
var start=strVar.indexOf("08/11/2018");
var end=strVar.indexOf("08/11/2018")+strDate.length;
var todaysDate=strVar.slice(start,end);
console.log(todaysDate);
*/

//4) Pick today's weather from the string and convert to Celsius and display the result.
/*
    var weather="70 F";
    var start=strVar.indexOf(weather);
    var end=strVar.indexOf(weather)+weather.length;
    var todaysWeather=strVar.slice(start,end);//70 F
    var weatherInNumber=todaysWeather.slice(0,2);
   
    var Celcius =(weatherInNumber-32)*5/9;
    var weatherInInteger=parseInt(Celcius);
    console.log("Today's weather in Fahrenheit is "+todaysWeather+", after you convert to Celcius it is "+weatherInInteger+"C");
*/
/*
//5) Separate Numbers and non numerical characters to 2 separate variables and display the result.
var notNum="";
var num="";
for(var i=0; i<strVar.length; i++){
    if(isNaN(strVar.charAt(i))){
      notNum+=strVar.charAt(i);  
    }else{
        num+=strVar.charAt(i);
    }
}
console.log(notNum);
console.log(num.replace(/( )/g, ""));
// Output Should Be:
 
//InordertoBecomeaNumberTestAutomationDeveloper,ineedtopracticeatleasttohoursaday.Todayis//.WeatherisFdegrees.
//1230811201870
*/
//6) in the String instead of '2 to 3 hours' , display '3 to 4 hours'.
/*
if(strVar.search("2 to 3 hours")){
    var replaced = strVar.replace("2 to 3 hours", "3 to 4 hours");
}
console.log(replaced);
*/

//7) Display first sentence in Uppercase and other sentences in Lowercase.
/*
var n=strVar.indexOf(".");
var firstHalf=strVar.slice(0,n+1);
var secondHalf=strVar.slice(n+1);
console.log(firstHalf.toUpperCase()+secondHalf.toLowerCase());
*/
//8) Remove all spaces from the string and display the result.
/*
console.log(strVar.replace(/( )/g, "")); // or

*/
//9) Reverse all words order in the string and replace all "." and "," with ""
//      Output Should Be:
//      degrees F 70 is Weather 08/11/2018 is Today day a hours 3 to 2 least at practice to need i Developer Automation Test 1 Number a Become to order In 
/*
var myArray = strVar.split(" ");
var array = myArray.reverse();
var reversedString = array.toString();
var comma=reversedString.replace(/(,)/g, " ");
var dot=comma.split(".");
var final=dot.toLocaleString();
comma=final.replace(/(,)/g, "");
console.log(comma);
*/