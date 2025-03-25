//global scope
// different in browser/code editor
if(true){//block scope
    let a=10
   // const b=20
    var c=30
}
// let a=20
// console.log(a);
//console.log(b);
console.log(c);

// const is constant and cant be changed
// var doesnt depend on scope
// let can change with scope



// closure--> technique used in dom (document object model)

//nested function can use parent function

// one function enclosed by another function
// which is present inside it is known as closure

function one()
{
const username="hitesh"

   function two(){
       const website="youtube"
       console.log(username);       
   }

  // console.log(website);
   
   two()
}

one()


if(true)
{

    const username="hitesh"
    if(username=="hitesh")
    {
        const website=" youtube"
        console.log(username+website);
        
    }
   // console.log(username+website);
} 
addone(5)
function addone(value)
{
    return value+1
}//bottom up approach


//top down approach ERROR HERE
//addTwo(5)
//strong type of fn, called as expression
const addTwo=function(num){
    return num+2
}
//Hoisting of function