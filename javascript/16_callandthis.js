function setusername(username)
{
    //if browser then browser window
    //if node then an empty object it will refer to
    this.username=username
}

function createuser(username,email,password)
{
    setusername.call(this,username)//not called yet
    this.email=email
    this.password=password

}
const chai=new createuser("chai","chai@fb.com","123")
console.log(chai);

