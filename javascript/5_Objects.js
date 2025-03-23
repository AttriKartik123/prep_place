//--------------Singleton: jab hm literals ki tarah declare krte hain tabb single tonn nhi bnegaa 

//------------------------Object Literals:

//Object.create // isme singleton bnega


//----------------Symbol
const mySym = Symbol("key1")


const JsUser = {
    name:"Hitesh"  ,// name by default as a string lega
    "fullname" : "Hitesh Choudhary" , // abb isse dot se access nhi kar skte
    age: 18,  //key:value
    [mySym] : "myKey1" , //-------symbol k naam ko square bracket me likho , tabhi wo as a symbol kaam krega 
    location: "Ghaamandi" ,
    email : "annonymousannony@gmail.com",
    isLoggedIn : false ,
    LastloginDays : ["Monday" , "Saturday"] ,

}
//--accessing values
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);


console.log(JsUser[mySym]); // to print symbol -------- but agr abhi DT dekhenge toh iski DT symbol nhi hai , balki string dega
console.log(typeof JsUser[mySym]);

console.log(JsUser[mySym]);   //--------SYMBOL K LIYE ISSE SQUARE BRACKETS ME HI LIKHNA HOTA HAI 

// console.log(JsUser.fullname); nhi dega output





