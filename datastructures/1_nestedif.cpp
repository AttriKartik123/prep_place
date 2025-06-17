#include <bits/stdc++.h>
using namespace std;

int main()
{
int age;
cout<<"Enter your Age = ";
cin>>age;
bool votercard=true;

//Voting age in india is 18 but america is 16
if(age>=18)
{
    if(votercard==true)
    {
        cout<<"You can go and vote";
    }
    else
    {
        cout<<"You are eligible to vote but apply voter card";
    }
}
else{
    if(votercard==true)
    {
        cout<<"You are not eligible to vote in this country";
    }
    else
    {
    cout<<"you are a minor who doesnt hold a votercard";
    }
}

}