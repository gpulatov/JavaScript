//LAB. Task // 7/31/2018
/*
1-Add a program
   -prompt should ask “Currently you have: "+array items+"what you want to add ?"
   -add new element to array and display new list

2-Remove a product
   -prompt should ask  “Currently you have: "+array items +"What do you want to remove?"
       - if the element is in the list remove it and alert element +“successfully removed" and display new list.
       - if element is not in the list alert element+ "could not be found"

3-Edit a product
   -(this selection we will get the element which user wanted to remove, we will remove it and insert new one.)
       -prompt should ask first "Currently you have: "+arraylist+"Enter what you want to change ?"
       -prompt should ask second "What is the new product that you want to enter ?"
           -if the element is in the list, delete(first prompt) that one and insert the new element(second prompt).
               -after that alert (Successfully changed) and display new list
           -if the element is not in the list alert element+"could not be found"

4-Print the shopping list
   -Print each element with their position(start from 1) one by one.
   example; shoppinglist["orange","Apple"]
       alert 1-Orange
       alert 2-Apple

5-Exit the program
   -Stop the loop and alert "Thank you"
*/


/*
//1. Add a product.
var productArray=["Orange", "Apple"];

addNewElement=prompt("Currently you have:  "+productArray[0]+", "+productArray[1]+"\n What do you want to add?");

productArray.push(addNewElement);
alert("new list: "+productArray);

//2. Remove a element from product.

var removeElement=prompt("Currently you have:  "+productArray+"\n What do you want to remove?");
removed=false;

for (var i=0; i<productArray.length; i++){
    if(productArray[i]==removeElement){
        productArray.splice(i,1);
        removed=true;
    }
}

if (removed){
    alert(removeElement+ " successfully removed");
    alert("new list: "+productArray);
}else{
    alert(removeElement+ " could not be found");
}

//3. Edit an element in product.

var changeElement=prompt("Currently you have:  "+productArray+"\n What do you want to change?");
var newProduct=prompt("What is the new product that you want to enter?");
changed=false;

for (var i=0; i<productArray.length; i++){
    if(productArray[i]==changeElement){
        productArray.splice(i,1,newProduct);
        changed=true;
    }
}

if (changed){
    alert(changeElement+ " is successfully changed to "+newProduct);
    alert("new list: "+productArray);
}else{
    alert(changeElement+ " could not be found to change in your Array!");
}

//4 Print the shopping list.

for (var i=0; i<productArray.length; i++){
    alert(productArray[i]);
}
alert("Thank you");
*/
