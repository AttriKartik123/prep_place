//objects are used more in js , classses very less

//promise is an object that represent completion/failure
//of an asynchronous operation resulting in value

//it takes time for a promise to execute, there can be
// n no. of operations, so we use promises here that
//it will happen someday

// promises has 3 states
// pending-->initial state
// fulfilled-> operation completed
// rejected->operation failed


fetch('https://google.com').then().catch().finally()
//then will have execution
//catch will execute if then failed
//finally willlno matter execute

//way of declaring a promise
//new instance of original promise




// const promiseOne = new Promise(function(resolve,reject){
// //Do an async task-->DB CALLS,Crypto,Network calls
// setTimeout(function(){
//     console.log("Async task is complete");
//     resolve({username:"kartik",email:"h@google.com"})
    
// },1000)
// })
// promiseOne.then(function(user){
//     console.log(user.username);
//     console.log(user.email);
    
//     console.log("Promise consumed");
    
// })




//bluebird and Q were libraries earlier used for promises


//error handing

const promiseTwo = new Promise(function(resolve,reject){

    setTimeout(function(){
        let error=true
        if(!error)
        {
        resolve({username:"kartik",email:"h@google.com"})
        }
        else{
            reject(`Error something wrong`)
        }    
    },1000)
    })

// simple fn, one liner-> has arguments
// arrow fn-> dont have arguments

//value chaining    
 promiseTwo
 .then((user)=>{
        console.log(user);
        return user.username      
    })
  .then((username)=>{
        console.log(username);
    })
    //upar wale then ki output is treated as parameter input of
    //neeche wala then
  .catch(function(e){
        console.log(e);
        
    })
    .finally(function()
{
    console.log("i will always run");
    
})

    // //then--->resolve
    // catch-->reject


    const promise_forasync = new Promise(function(resolve,reject){

        setTimeout(function(){
            let error=false
            if(!error)
            {
            resolve({username:"kartik",email:"h@google.com"})
            }
            else{
                reject(`Error something wrong`)
            }    
        },1000)
        })

 async function consumepromisefive(){
    const response = await promise_forasync
    console.log(response);
    
 }
 //async cant simply handle errors
//  async, await --->
// //try-catch block    try()//if it will happen
//                      catch(exception)//if it wont happen then this will happen

//https://jsonplaceholder.typicode.com/users


async function getAllUsers(){

    try {
        const response = await fetch
        ('https://jsonplaceholder.typicode.com/users')
        //it takes time for data to get fetched
        const data= await response.json() // kyuki value hmesha string me aati hai isiliye json me convert krdiya
        console.log(data);  
    } 
    catch (error) {
       console.log("E: , ",error);
        
    }


}
getAllUsers()


fetch ('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.catch((error)=>console.log(error))