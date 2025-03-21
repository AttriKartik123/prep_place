const name="Harry "
const repocount = 50 ;
// ----------------------------------------------------> STRING IS AN OBJECT
// console.log(name + repocount + " value")


//old way 
//console.log("My name is "+ name) ; 

// backtiks  
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);  //   string interpolation ->`` 

//--------------------->string declaration and accessing 

const gamName = new String('karry');

// accessing 

console.log(gamName[0]);
console.log(gamName.__proto__); //

//methods of strings 

// console.log(gamName.length); // gamename is an obj and length repeat and many more are it functions
// console.log(gamName.toUpperCase()); // to upper case letters
// console.log(gamName.charAt(2)); // to check the character at  the any position 
// console.log(gamName.indexOf('r'));


// Substring
const newString = gamName.substring(0,4) ; //substring( start , end )
console.log(newString);

// dotslice
const anotherString = gamName.slice(-3,4) ;
console.log(anotherString);

//trim and replace

const newStringOne = "   hitesh   "; // we dont need spaces
console.log(newStringOne); 
console.log(newStringOne.trim());  // trim start and trim end also


const url="https://harry.beta/harry%20gay" ;
console.log(url);
console.log(url.replace('%20', '-')); //.replce(what you want to replace , with u want to replace)

