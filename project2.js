//==================================================
 //***********Project-2 ****************************
//===================================================
/*
Main Screen has two main products
            1.Vegetables 2.Fruits
 
if user enter 1 (vegetables ) , list 5 vegetables with price
if user enter 2 (fruit) list 5 fruits with price
if user enter different input from 1 and 2,
-alert "Please enter valid option"

Accepts 1-5 for vegetables or fruits selection,
if user enter different input, show "Please enter valid option"
after product selection,  user should enter amount between 1 to 100.
if different than this range show "Please enter amount between 1 to 100"

after amount entrance,  show total price and ask "do you want to shop more ?"
if user enter 1 (yes) start from main product, at the same time keep previous total and add new total it
if no (2) show total price say thank you

first selection only accepts 1 or 2, if not ask again
second selection only accept 1-5 ,if not ask again
amount only accept numbers 1 to 100, if not ask again
continue selection only accept 1 or 2 if not ask again

Vegetables
Cucumber   $2.5
Tomatoes    $3
Onion          $1.5
Pepper        $2
Carrot         $4

Fruits
Orange         $3.5
Banana         $4
WaterMelon  $7
Apple             $8  
Cherry            $4
*/


var total=0;
var grocery=["vegetables","fruits"];
var vegetables=["Cucumber", "Tomatoes", "Onion", "Pepper", "Carrot"];
var fruits=["Orange", "Banana", "Watermelon", "Apple", "Cherry"];
var priceVeggie=[2.5, 3, 1.5, 2, 4];
var pricefruit=[3.5, 4, 7, 8, 4];

outerLoop:
while(true){
    var num=prompt("What type of product do you want to shop? \n1-Vegetables \n2-Fruits. \nNote: input num should be 1(vegetables) or 2(fruits)");
    if(num == 1){  
        innerLoop1:
        while(true){
            var v = prompt("1.Cucumber $2.5 \n2.Tomatoes $3 \n3.Onion $1.5 \n4.Pepper $2 \n5.Carrot $4");
            if(vegetables.indexOf(vegetables[v-1])<6 && vegetables.indexOf(vegetables[v-1])>=0){
                while(true){
                 var qty = prompt("Please enter amount of "+vegetables[v-1]);
                 if(qty>0 && qty<101){
                      var subTotal = qty*priceVeggie[v-1];
                      total+=subTotal;
                      alert("Your total price is $"+total);
                          while(true){
                              var continueSelection=prompt("Do you want to shop more?\nEnter 1 for (yes); 2 for (no)");
                              if(continueSelection==1){
                              break innerLoop1;
                              }else if(continueSelection==2){
                                alert("Your total price is $"+total+"\nThank you for shopping with us!");
                                  break outerLoop;
                              }else{
                                  alert("Please enter valid option\nInput can be 1 or 2"); 
                              }
                          }
                    }else{
                        alert("Please enter amount between 1 to 100"); 
                    }
                 }     
            }else{
                alert("Please enter valid num to choose right veggie");
            }
        }
    }else if(num == 2){
       innerLoop2:
        while(true){
            var v = prompt("1.Orange $3.5 \n2.Banana $4 \n3.Watermelon $7 \n4.Apple $8 \n5.Cherry $4");
            if(fruits.indexOf(fruits[v-1])<6 && fruits.indexOf(fruits[v-1])>=0){
                while(true){
                 var qty = prompt("Please enter amount of "+fruits[v-1]);
                 if(qty>0 && qty<101){
                      var subTotal = qty*pricefruit[v-1];
                      total+=subTotal;
                      alert("Your total price is $"+total);
                          while(true){
                              var continueSelection=prompt("Do you want to shop more?\nEnter 1 for (yes); 2 for (no)");
                              if(continueSelection==1){
                              break innerLoop2;
                              }else if(continueSelection==2){
                                alert("Your total price is $"+total+"\nThank you for shopping with us!");
                                  break outerLoop;
                              }else{
                                  alert("Please enter valid option"); 
                              }
                          }
                    }else{
                        alert("Please enter amount between 1 to 100"); 
                    }
                }    
            }else{
                alert("Please enter valid num to choose right fruit");
            }
        } 
    }else{
        alert("Allowed to enter only 1 or 2");
    }
}
          

/*
var total=0;
function grocery(productName, productType, productPrice, calculateTotal){
    this.product = productName;
    this.type = productType;
    this.price = productPrice;
}
var grocery1= new grocery("Vegetables", ["Cucumber", "Tomatoes", "Onion", "Pepper", "Carrot"], [2.5, 3, 1.5, 2, 4]);

var grocery2= new grocery("Fruits", ["Orange", "Banana", "Watermelon", "Apple", "Cherry"], [3.5, 4, 7, 8, 4]);
*/




