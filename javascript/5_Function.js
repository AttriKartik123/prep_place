function saymyname(){
    console.log("kartik");
    
}//function created

saymyname();
saymyname();
saymyname();

function addtwonumber(a,b)//parameter while declaring
{
console.log(a+b);

}

function addtwonum(a,b)
{
    let result=a+b
    return result
    //return a+b
}

addtwonumber(10,20)//argument while using
addtwonumber(3,"4")//34
addtwonum("3",4)//34

function loginusermessage(username){
    return `${username} just logged in`
}
console.log(loginusermessage("harleen"));
console.log(loginusermessage("kartik"));
//when no parameter is passed the value is
//undefined



//-----> question given by harleen sir
function bodmas(a, b) {
    let result = a + b;
    console.log(result);

    let result1 = a - b;
    console.log(result1);

    let result2 = a / b;
    console.log(result2);

    return result;
}

bodmas(20, 30);
