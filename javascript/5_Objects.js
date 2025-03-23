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


// console.log(JsUser[mySym]); // to print symbol -------- but agr abhi DT dekhenge toh iski DT symbol nhi hai , balki string dega
// console.log(typeof JsUser[mySym]);

// console.log(JsUser[mySym]);   //--------SYMBOL K LIYE ISSE SQUARE BRACKETS ME HI LIKHNA HOTA HAI 

// console.log(JsUser.fullname); nhi dega output




const tinderUser=new Object()//no singleton created

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
console.log(tinderUser);

const regularUser={
    email:"avc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"chucha"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

// if there is a '?' present then that thing is under condition 
// if/else is used there

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
const obj3={5:"e", 6:"f"}
//const obj3 ={obj1,obj2}
//const obj4=Object.assign({},obj1,obj2,obj3)

const obj4={...obj1,...obj2,...obj3}
console.log(obj4);


const navbar=[

    {id:1,
    nav:"home"
    },
    {id:2,
    nav:"about"
    },
    {id:3,
    nav:"shop"
    },
    {id:4,
    nav:"contact"
    },
]
console.log(navbar[0].nav);
console.log(Object.keys(tinderUser))

console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('id'));
