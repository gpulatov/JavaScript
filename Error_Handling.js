//Error handling in JS

/*
try{
    console.log("Hello");
    console.log(sayHello()); // here called function is undefined. We will expect something wrong in this function. If called function is gives return it is ok and try block all codes will work;
    console.log("This is an Error");
}

catch(error){
    console.log("I see your Error");// if error happens in try block it stops to work and give signal to catch block and it will run what we have inside catch block.
    console.log("Description"+error.description);
    console.log("Message: "+error.message);// Message: sayHello is not defined.

}

finally{
    console.log("This line is guaranteed to execute");
}
*/


//throw
//
function divide(){
    
    var num1 = parseInt(prompt("Enter your Num1"));
    var num2 = parseInt(prompt("Enter your Num2"));
    
        try{
            if (num2==0) {
                throw {
                    error: "Divide by zero error",
                    message: "Number can not be zero"
                }    
            } else {
                console.log(`Result ${num1/num2}`)
            }
        }

    
        catch(e){
            console.log(e.error);
            console.log(e.message);
        }
}
//
//divide();
//
//
//function f(){
//    
//    try{
//        console.log(0);
//        console.log(name2);
//    }catch(e){
//        console.log(1);
//        return true;
//        console.log(2);
//    }finally{
//        console.log(3);
//        return false;
//        console.log(4);
//    }
//    
//    console.log(5);
//}
//
//console.log(f()); //0,1,3,false

function reverseString(s) {
   
        try{
            var a = s.split('').reverse().join('');
            if(typeof(a)!="string"){
                throw{
                    message: "s.split is not a function"
                }
            } else {
            return console.log(a);
            }
        }
    catch(e){
        console.log(e.message);
    }
    finally{
       if(typeof(a)!="string"){
            console.log(s);
       }
    }
}


function isPositive(a) {
    try{
        if(a==0){
            throw{
                message: "Zero Error"
            }
        }else if(a<0){
            throw{
                message: "Negative Error"
            }
        }
    }
    catch(e){
        console.log(e.message);
    }
    finally{
        if(a>0){
            console.log("YES");
        }
    }
}

isPositive(-3);

