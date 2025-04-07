//prototype behaviour
//javascript finds value till its extent and reach
//default behaviour of js is prototypal
//curiousity type of behaviour
//even array is an object in js
//object has no parent of its own, so its prototype is null

// function multiplyby5(num){
//     return num*5
// }
// console.log( multiplyby5(5)); //i dont want to do this by this way
// //function is an object

// multiplyby5.rollno=2
// console.log(multiplyby5.rollno);
// //protype is empty array, because object has no parent
// console.log(multiplyby5.prototype);


// //function has functionalities of a function and an object


// function createUser(username,score)
// {
//     this.username=username
//     this.score=score
// }

// createUser.prototype.increment=function(){
//     this.score++ //here "this" means for what it is called for
// }
// createUser.prototype.printMe=function(){
//     console.log(`score is ${score}`);
    
// }

// const chai=new createUser("chai",20)
// const tea=createUser("tea",10)
// //new will be used on the thing whose prototype im calling
// chai.printMe()//cannot read properties of undefined


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// let myName = "hitesh    "
// let myChannel = "chai     "
// console.log(myName.truelength);



let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman: "sling",

    getSildePower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log("Hitesh is present in all objects");
    
}

heroPower.hitesh();