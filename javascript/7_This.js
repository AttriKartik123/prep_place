// const user={
//     username: "hitesh",
//     price : 999,

//     welcomeMessage: function() { //function in object
//         console.log(`${this.username} , welcome to website`) ; //current context ko refer krta hai : jitne vars hain sabhi ko refer krne ke liye this.xyz lgaado
//         console.log(this);  //this means user print krwado

//     }
  

// }

// // console.log(user.welcomeMessage);

// // user.welcomeMessage();
// // user.username = "sam";
// // user.welcomeMessage()

// console.log(this); // o/p :{}

// -------------->browser ka global object "window" hai



// function chai(){ //--> This works in objects NOT IN FUNCTION
//     let username = "hitesh"
//     // console.log(this);
//     console.log(this.username);
// }
// chai()


// const chai = function() {
//      let username = "hitesh";
//      console.log(this.username);
// }
// chai()


// const chai = () =>  { //---------> ARROW FUNCTION
//     let username = "hitesh";
//     console.log(this); // o/p: {}
//     console.log(this.username); // o/p : undefined
// }
// chai()



// const addTwo = (num1,num2) => {
//     return num1 + num2 ;   explicitly return
// } 

// console.log(addTwo(3,4));


//INPLICIT RETURN 
// const addTwo = (num1,num2) =>  num1 + num2 ;

// const addTwo = (num1,num2) =>  (num1 + num2) ; //agr curly barces use hoge toh return hoga  and agr round ho toh phir retuen nhi chahiye
// console.log(addTwo(3,4));



const addTwo = (num1,num2) =>  ({Username : "Hitehsh"} ) ; 
console.log(addTwo(3,4));




//const myArray = {2,3,4,5};
//myArray.forEach()