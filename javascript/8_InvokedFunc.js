//----> IIFE (Immediately Invoked function expression)
//----> Immediately invokes as soon as the application starts to execute

//---> Immediately invoke
//global scope ke pollution se dikkat hoti hai toh us problem se bachne k liye isse banana padta hai 
// chai()
//----------->  ()()  =  (function definition)(function call)

(function chai(){
    //Named iffi
    console.log(`DB CONNECTED`);
})() ;  // *semicolon* isko end krne k liye laga hai NHI TOH NEECHE WALA FUNCTION NHI CHLEGA


( (name) => { // arrow function 
    //Unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
}) ('hitesh')


// ------------jithe declare krde = arguement 
// ------------jithe pass kitta = parameters