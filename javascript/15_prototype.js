//prototype behaviour
//javascript finds value till its extent and reach
//default behaviour of js is prototypal
//curiousity type of behaviour
//even array is an object in js
//object has no parent of its own, so its prototype is null

function multiplyby5(num){
    return num*5
}
console.log( multiplyby5(5)); //i dont want to do this by this way
//function is an object

multiplyby5.rollno=2
console.log(multiplyby5.rollno);
//protype is empty array, because object has no parent
console.log(multiplyby5.prototype);


//function has functionalities of a function and an object


function createUser(username,score)
{
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++ //here "this" means for what it is called for
}
createUser.prototype.printMe=function(){
    console.log(`score is ${score}`);
    
}

const chai=new createUser("chai",20)
const tea=createUser("tea",10)

chai.printMe()//cannot read properties of undefined