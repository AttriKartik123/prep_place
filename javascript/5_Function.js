// function saymyname(){
//     console.log("kartik");
    
// }//function created

// saymyname();
// saymyname();
// saymyname();

// function addtwonumber(a,b)//parameter while declaring
// {
// console.log(a+b);

// }

// function addtwonum(a,b)
// {
//     let result=a+b
//     return result
//     //return a+b
// }

// addtwonumber(10,20)//argument while using
// addtwonumber(3,"4")//34
// addtwonum("3",4)//34

// function loginusermessage(username){
//     return `${username} just logged in`
// }
// console.log(loginusermessage("harleen"));
// console.log(loginusermessage("kartik"));
//when no parameter is passed the value is
//undefined



//-----> question given by harleen sir
// function bodmas(a, b) {
//     let result = a + b;
//     console.log(result);

//     let result1 = a - b;
//     console.log(result1);

//     let result2 = a / b;
//     console.log(result2);

//     return result;
// }

// bodmas(20, 30);


// --------------arguements tyaar krne k liye and we dont know about the parameters 
//---> Dynamic parameters 

// Rest OPERATOR --> ... is called as rest operator
function calculateCartPrice(...num1) {
return num1 

}

console.log(calculateCartPrice(200 , 400 ,500)) ;




function add(...num1 ){ //--------Rest parameter must be last formal parameter
     return += num1 ;

}
console.log(add(10,20,30));