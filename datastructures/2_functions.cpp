//userdefined,predefined function

//void(return no value), return function(returns a value)
//parameterized(takes arguments), non parameterized(takes no argument)

#include <bits/stdc++.h>
using namespace std;

void printsomething()//void datatype
    {
        cout<<"Hello world";
    }//returns nothing

int printAge() //function with return type "int"
{
    int age;
    cout<<"Enter your age = ";
    cin>>age;

    return age;
}

int addnums(int x, int y)//two arguments x and y are passed 
{
    int sum=x+y;
    return sum;
}

int multinums() //no arguments passed, value will be taken on runtime
{
    int a,b;
    cin>>a>>b;
    int mul=a*b;

    return mul;
}

int main()
{
//    printsomething();
//    cout<<printAge(); 
   cout<<addnums(2,4); //here 2 and 4 are parameters
   cout<<multinums();
    return 0;
}