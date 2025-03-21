// let score = "33"   OPERATORS video 6

// console.log(typeof (score))

// let number_score = Number(score)

// console.log(typeof (number_score))

//-------------------

// let value = 3 ;
// let negValue = -value ;

// console.log(negValue);


//------------------  str operations video 7

// let str1= "hello";
// let str2= " harry bhau ";

// let str3 = str1 + str2 ;

// console.log(str3) ;

//--------------------

// console.log("1" + 2);
// console.log(1 + "2");

// console.log("1" + 2 + 2 ) ;
// console.log(1 + 2 + "2" ) ;


// console.log((3 + 4) * 5 % 3);

//------------------------

// console.log(+true);--->1

// console.log(-true)

// console.log(true);
//console.log(true+); it will give error

// console.log(+"");

// ------------------------
// 1--> true  0-->false
// "harleen"--> true   ""-->false-->0

//---------------------------

// let gameCounter =100 ;
// gameCounter ++ ;
// console.log(gameCounter) ; 

//-------------------------

//  let gameCounter =100 ;
//  ++gameCounter ;
//  console.log(gameCounter) ; 
 

//---------------------------- pre and post

// let x = 3;
// const y = x++;

// console.log(x,y);


// let a = 3;
// const b = ++a;
// console.log(a,b);

//------------------------------comparison video 8 


// console.log(1 > 1);
// console.log("2" > 1);     // automatically convert krdega
// console.log("02" > 1);


// console.log(null > 0);
// console.log(null == 0);  // isme convert nhi krega kyuki usme sirf equals to hai 
// console.log(null >= 0);  // gretaer than or less than wale me convert krdega 

// console.log(undefined  == 0);
// console.log(undefined  > 0);  
// console.log(undefined  <= 0); // sabhi me false hi aaiga becoz of undefined 


// //  === strict check 

// console.log("2" == 2) ;
// console.log("2" === 2) ; // third equals to will check for datatype 


// Datatypes -->7
// Primitive
// String,Number,Boolean,null,undefined,Symbol,BigINT

// Non-Primitive/Reference
// Array,Object,Functions
const heros=["iman","kartik"];

let myObj={
    name:"kartik",
    age:21,
}
let a=10
let b=20

const add =function(a,b){
console.log(a+b)
}
add(a,b);
//ARRAY IS ITSELF AN OBJECT !!!!!!!!!!
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof add);


// const score=70 //javascript
// const score:number =90 //typescript

// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId)

// any number with 'n' at end becomes bigINT
