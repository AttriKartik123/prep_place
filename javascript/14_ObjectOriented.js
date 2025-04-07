//  javascript - pehle classes nhi hoti thi and abhi bhi nhi hoti hain classes 

// OOP 

// Object- collection of properties(variables) and methods (functions)
// -toLowerCase

// Why use OOP ? 
// ans: Code kaafi messsed up sa ho rha tha toh 

// Object literal  - mtlb sirf object hi le rha hun 

// - Constructor Function 
// - prototypes
// - Instances(new , this)

// -  4 pillars of OOp 
// abstraction (detalis hide kr lena (fetch)) 
// inheritance ()
// encapsulation(Encapsulate krdo cheejo ko (wrap up krdo cheejo ko))
// polymorphism ()


//----- object literal :
// const user = { // this is called basic unit and is called as object literal
//  Username : "hitesh" ,
//  loginCount: 8 ,
//  signedIn: true ,
// getUserDetails : function()
// {
//     console.log("got details");
//     console.log(`Username is ${this.Username}`);
//     console.log(this);
    
 
// // }}

// console.log(user.getUserDetails);
// user.getUserDetails();
// console.log(user.Username);
// this in global context is empty bracket {}

// // const promiseOne = new Promise()
// const date = new Date()
//new is constructor function

function User(username,loginCount,isLoggedIn) {
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
   this.greeting=function(){console.log("welcome");
   }

    //it implicity returns values even if you write
    //return this or not
    return this
}

const user1=new User("kartik",8,true)
const user2=new User("harleen",2,false)
console.log(user1.constructor);
//when you create new object, first a new
//instance is created

