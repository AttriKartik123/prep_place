//for of
//Array specific loops
["","",""]//values in array
[{},{},{}]//objects in array

const arr=[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }

// for(const i of arr )
// {
//     console.log(i);
    
// }

// const greeting="hello world"
// for(const character of greeting)
// {
//     console.log(`each character is ${character}`);
    
// }

const map=new Map()
map.set('IN',"India")
map.set('PK',"Pakistan")
map.set('CA',"Canada")

// console.log(map);

//maps are unique and order remains same
for(const [key,value] of map)
{
    //map destructure 
    //keys and values get separated
    console.log(`the code for ${value} is ${key}`);
  }

//  const myObject={
//     'game1':'NFS',
//     'game2':'Spiderman'
//  }
 
//  for (const [key,element] of myObject) {
//     console.log(key,value);
//  }
 //object is not iteratble, map is iteratbale


 const myObject2={
    'js':"Javascript",
    'cpp':"C++",
    'rb':"ruby",
    'swift':"swift by apple"
 }


//  for-of------>array,map
//  for-in-------->array,Object

//  for (const i in myObject2) {
//  console.log(myObject2[i]);//values
//  console.log(i);//keys
 
    
//  }

//  for(const j of arr)
//     {
//        console.log(j);
       
//     }


//  for(const j in arr)
//  {
//     console.log(arr[j]);
    
//  }



//  const coding=["js","ruby","c++","python"]
 
//  //callback fucntions dont have name


//  //these 3 things can be used in callback fn
//  //as argument
//  coding.forEach(function (item,index,arr){

// console.log(item);
// console.log(index);
// console.log(arr);




//  });


//  coding.forEach(element => {
//     console.log(element);
    
//  });


const name=[

{
    name:"harleen",
    rollno:3    
},

{
    name:"kartik",
    rollno:25   
},

{
    name:"iman",
    rollno:13    
}
]
// console.log(name[0]);
// console.log(name[0].name);
// console.log(name[2].rollno);

name.forEach((item)=> {
    console.log(item.name);
    
});