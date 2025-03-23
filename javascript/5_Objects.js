//--------------Singleton: jab hm literals ki tarah declare krte hain tabb single tonn nhi bnegaa 

//------------------------Object Literals:

//Object.create // isme singleton bnega


//----------------Symbol
const mySym = Symbol("key1")


const JsUser = {
    name:"Hitesh"  ,// name by default as a string lega
    "fullname" : "Hitesh Choudhary" , // abb isse dot se access nhi kar skte
    age: 18,  //key:value
    [mySym] : "myKey1" , //-------symbol k naam ko square bracket me likho , tabhi wo as a symbol kaam krega ... ///////------- wese agr hm mysym ki type pta krenge toh yeh undefined dega but agr hum [mysym] ki type krenge pta tb ye hmmme baaki elements ki tarah string dega
    location: "Ghaamandi" ,
    email : "annonymousannony@gmail.com",
    isLoggedIn : false ,
    LastloginDays : ["Monday" , "Saturday"] ,

}
//--accessing values
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);


// console.log(JsUser[mySym]); // to print symbol -------- but agr abhi DT dekhenge toh iski DT symbol nhi hai , balki string dega
// console.log(typeof JsUser[mySym]);

// console.log(JsUser[mySym]);   //--------SYMBOL K LIYE ISSE SQUARE BRACKETS ME HI LIKHNA HOTA HAI 

//----changing value: 
JsUser.email= "harleenjohaolchatgpt.com";

//-----object freeze - no change in value
// Object.freeze(JsUser);

// console.log(JsUser);


//Functions

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name} `);
}

// console.log(JsUser.greeting); // it will give undefined -----op--->[Function (anonymous)]
 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo()); 




