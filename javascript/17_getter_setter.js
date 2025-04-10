class User{
    constructor(email,password)
    {
        this.email=email;
        this.password=password
    }
     //if getter is defined so you have to 
    //define setter also,both needs to be defined

    get password(){
     return `${this._password}hitesh`
    }

    set password(value)
    {
        this._password=value
    }
}
const hitesh=new User("h@hitesh.ai","harleen")
console.log(hitesh.password);
//call stack size exceeded error
//because constructor is again and 
// again calling the value
