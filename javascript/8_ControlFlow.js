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

function getDayName(dayNumber) {
    let daynumber = 1
    switch (dayNumber) {
      case 1:
        console.log("monday");
        break;
      case 2:
        console.log("tuesday");
        break;
      case 3:
        console.log("wednesday");
        break;
      case 4:
        console.log("thursday");
        break;
      case 5:
        console.log("friday");
        break;
      case 6:
        console.log("saturday");
        break;
      case 7:
        console.log("sunday");
        break;

      default:
        console.log("Invalid day"); 
       
    }
  }
  
  
  getDayName(4); 
  
  