// NODE EK ENGINE HAI JO JS KO EXECUTE KRTI HAI // 
//control flow

//if ---->

// if (condition) {
// // consition should be true
// }

// const isUserloggedIn = true ;

// if (isUserloggedIn){

// }
// if(2 == '2'){
//     console.log("Executed");
// }

// compaison operator ------>   <,>,<=,==,!= , ===(type bhi check krega), 





// const score = 200 ;

// if(score > 100) {
//     const power = " fly" ;
//     console.log(`user power : ${power}`);
// }

// console.log(`user power : ${power}`)  // op nhi aaigi



// const score = 200 ;

// if(score > 100) {
//     var power = " fly" ;
//     console.log(`user power : ${power}`); // op aaigi kyuki var use kiya hai 
// }

// console.log(`user power : ${power}`)  // op aaigi kyuki var use kiya hai 


//Short hand notation :
const balance = 1000 
if(balance > 500) console.log("test"); //implicit scope




//nested if
let a=15
let b=20
let c=12

if(a<b)
{
    if(a<c)
    {
        console.log("A is less than B and C");
    }
    else{
        console.log(("A is less than B but greater than C"));
        
    }
}

// &&->both should be true
// ||-->any one can be true

// //switch case


function gradetocgpa(grade)
{
let cgpa=0
switch(grade){
case "A":
    cgpa=10
    console.log("CGPA IS 10");
    break
case "B":
    cgpa=9
    console.log("CGPA IS 9");
    break
case "C":
    cgpa=8
    console.log("CGPA IS 8");
    break
case "D":
    cgpa=7
    console.log("CGPA IS 7");
    break
case "E":
    cgpa=6
    console.log("CGPA IS 6");
    break
    default:
        console.log("you have failed");     
        }
    }
gradetocgpa("B");

gradetocgpa("X");
    
// challenege->write a switch case for numbers to weeks
// 1->monday
// 2->tuesday
// 3
// 4
// 5
// 6
// 7->sunday
// any other value->invalid day

// function getDayName(dayNumber) {
//     let daynumber = 1
//     switch (dayNumber) {
//       case 1:
//         console.log("monday");
//         break;
//       case 2:
//         console.log("tuesday");
//         break;
//       case 3:
//         console.log("wednesday");
//         break;
//       case 4:
//         console.log("thursday");
//         break;
//       case 5:
//         console.log("friday");
//         break;
//       case 6:
//         console.log("saturday");
//         break;
//       case 7:
//         console.log("sunday");
//         break;

//       default:
//         console.log("Invalid day"); 
       
//     }
//   }
  
  
//   getDayName(4); 
  





//------->

// const userEmail = "h@hitesh.ai";

// if(!userEmail) { // check does we have value
//     console.log("Got user email");
// }else{
//     console.log("Dont have user email");
// }
  

// falsy values 
//false , 0 , -0 , BigInt , "" , null , undefined , Nan (Not a number)

//truthy values
// "0" , " false" , " " , [],{}, function(){}  
// false == 0 : gives true op
// false =='' : gives true
// 0 == '' : gives true

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

//-------->Nullish coalescing operator (??) : null yaa value ko value assign krdega

let val1 ;// undefined value 
// val1 = 5 ?? 10  
// val1 = null ?? 10
// console.log(val1);


val1 = undefined ?? 15 ;
console.log(val1);

val1 = null ?? 10 ?? 15 ;  // null or undefined ko chod k jo bhi left side wali value hogi wohi retun krega 
console.log(val1);

val1 = 15 ?? undefined; // agr pehle hi value milgyi tab wo null ya undefined nbhi chalaiga 
console.log(val1);


//----> left side null yaa undefined aaugaa taa oh right wala return krega other wise left wala krega return
// ---------------> IF LEFT FALSY  VALUE HAI TABHI WO RIGHT WALA RETURN KREGA OTHERWISE LEFT WALA RETURN KREGA 


// ternery operator

if(a>10)
{

    console.log("a is greater than 10");
}else{
    console.log("a is smaller than 10");
    
}



// same in ternery 

a>10 ? console.log("a is greater than 10") : console.log(" a is smaller than 10 ") 