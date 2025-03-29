const user={
    username: "hitesh",
    price : 999,

    welcomeMessage: function() { //function in object
        console.log(`${this.username} , welcome to website`) ; //current context ko refer krta hai : jitne vars hain sabhi ko refer krne ke liye this.xyz lgaado
        console.log(this);
    }
  

}

// console.log(user.welcomeMessage);

// user.welcomeMessage();
// user.username = "sam";
user.welcomeMessage()

