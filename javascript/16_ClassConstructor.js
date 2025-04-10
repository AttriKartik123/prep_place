// class User {
//     constructor(username, email, password){
//         this.username= username ;
//         this.email=email;
//         this.password= password;  // prototype ban gya 
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }
//     const chai = new User("chai", "chai@gmail.com", "123") ;
//     console.log(chai);
//     console.log(chai.encryptPassword());

    




//INHERITANCE
class User{
    constructor(username){
        this.username = username 
    }

    logMe(){
        console.log(
            `USERNAME is ${this.username}`);
        
    }
}


class Teacher extends User {
    constructor(username , email ,password){
        super(username) // Highest Class 
        this.email=email 
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

// const chai= Teacher("chai", "chai@gmail.com" , "123"); // new aaiga yaha pe
// const chai2= Teacher("chai", "chai@gmail.com" , "123"); // new aaiga yaha pe


const chai=new Teacher("chai", "chai@gmail.com" , "123"); 
// const Newchai=new Teacher("Tea", "chai@gmail.com" , "123"); 

chai.addCourse();
chai.logMe() ;
// Newchai.addCourse();

const masalaChai = new User("MasalaChai") ;
// masalaChai.addCourse() //Ye toh teacher me hai naa ki user me (ISILIYE ADD COURSE NHI CHLEGA )
masalaChai.logMe()
console.log(chai === masalaChai);
console.log(chai === Teacher);

console.log(chai instanceof User);

