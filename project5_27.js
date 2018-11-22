//Assignment-27/Classes 

//Suppose that you are working in a small town administration, and you are in charge of two town elements:
//1-Parks
//2-Streets
class Town{
    constructor(nameP, builtYearP){// if we use class to create constructor we use keyword 'constructor' inside class
    this.name = nameP;
    this.builtYear = builtYearP;
    }
}

class Street extends Town{
    constructor(nameP, builtYearP, classOfStreet){
        super(nameP, builtYearP);
        this.classOfStreet = classOfStreet;
    }
     streetClassification() {
        let classification = new Map();
        classification.set(1, "tiny");
        classification.set(2, "small");
        classification.set(3, "normal");
        classification.set(4, "big");
        classification.set(5, "huge");

        console.log(`${this.name} street was built in ${this.builtYear} and it is a ${classification.get(this.classOfStreet)} street.`)
    }
}

class Park extends Town{
    constructor(nameP, builtYearP, numberOfTrees, areaOfPark){
        super(nameP, builtYearP);
        this.number = numberOfTrees;
        this.area =areaOfPark;
    }
    
    densityOfPark(){
        let density = this.number/this.area;
        console.log(`${this.name} Park's density is ${density} per acr`);
    }
}

let streets = [ 
    new Street ("Kirby drive", 2014, 3),
    new Street ("Westheimer road", 2012, 4),
    new Street ("Gessner Road", 2015, 2),
    new Street ("Memorial drive", 2013, 5)
]
   

let parks = [
    new Park ("Knox Park",2015, 3200, 55),
    new Park ("Hermann Park", 2014, 3850, 90),
    new Park ("Memorial Park",2016, 3900, 102)
]

function tree (myPark, callbackFunc){
    for(let elem of myPark){
        if(typeof callbackFunc == "function"){
                callbackFunc(elem);
        }
    }
}


console.log(`====Annual report: Parks and Streets===`)
function parkReport(park) {
   

    // treeDensity
    park.forEach(element => element.densityOfPark());

    // Parks which have more than 1000 trees
     tree (parks, count=>{if(count.number>1000){console.log(`${count.name} has more than 1000 trees and it's total tree is ${count.number} trees and very good place to make a picnic.`)}});
        
}

function streetReport(streets) {

    // Size classification
    streets.forEach(element => element.streetClassification());
}

parkReport(parks);
console.log(`=======================================================`)
streetReport(streets);