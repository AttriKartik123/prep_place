//prop= properties

class User {
    constructor(username){
       this.username = username
    }
    //method
    logMe(){
        console.log(`Username: ${this.username}`);   
    }
    //jese hi user bne vese hi user ko unique name mil jai
    static createId(){ //"""" STATIC KEYWORD USE KRNE SE ISKA ACCESS NHI MILEGA """"
        return `123`

    }
}

const hitesh = new User("hitesh");
// console.log((hitesh.createId()));

class Teacher extends User {
     //super constructor mtlb user ki values
    constructor(User ,email){
       
        super(User)
        this.email= email;
    }
}

const iphone = new Teacher ("iphone", "ihone@gmail.com");
iphone.logMe();

