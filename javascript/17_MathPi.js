// Object.getOwnPropertyDescriptor : object ke bare me hidden cheejo ke baar eme batati hai 

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);//Override nhi hogi

// const descripter = Object.getOwnPropertyDescriptor(Math , "PI");// math ki pi property ki sari values and properties le li hui hain 
// console.log(descripter);  //  writable: false,// enumerable: false,// configurable: false


const chai = {
    name : 'Ginger chai' ,
    price : 250 ,
    isAvailable : true ,


    OrderChai : function (){
        console.log("Chai nhi bni");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai)); // gives undefined " kyuki hmne property ka descripter maanga hai naa ki object ki "


console.log(Object.getOwnPropertyDescriptor(chai,"name"));
//OUTPUT :{
//   value: 'Ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }


Object.defineProperty(chai, 'name' ,{
    // writable : false ,
    enumerable : false // aise isAvailable true nhi aaiga mean to say iterate nhi hogi properly  and agar true krdenge toh sab properties aa jaingi
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// for (let [key , value] of chai) {
//    console.log(`${key} : ${value} `); // chai is not iterable
   
//     }

for (let [key , value] of Object.entries(chai)) {

    if(typeof value != 'function'){ // agr typeOf value function nhi hai toh skip krde 
    console.log(`${key} : ${value} `); // chai is not iterable
    }
   }