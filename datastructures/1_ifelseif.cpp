// 20 age is 20 else if age 18 age is 18 else age is below 18

#include <bits/stdc++.h>
using namespace std;

int main(){   
    // int age = 20;
    int age ;
    cout<<"Enter your Age:";
    cin>>age;
    if(age == 20){
        cout<<"Age is 20";
    }
    else if(age == 18){
        cout<<"Age is 18";
    }
    else{
        cout<<"Age is below 18";
    }

    return 0;
}