#include <bits/stdc++.h>
using namespace std;

//pass by value/copy(original number didnot change)
void dosomething(int &num)
{
    cout<<num<<endl;
    num+=5;
    cout<<num<<endl;
    num+=5;
    cout<<num<<endl;
}
int main()
{
    int num=10;
    cout<<num<<endl;
    dosomething(num);//20
    cout<<num<<endl;//20
    return 0;
}

// &num--> call by refernce, pointer of original value

// you dont need to specify & with an array as &arr[i]
//as array always goes with reference


//pass by value--> make a shadow copy and doesnt change original value
//pass by reference---> changes original value present at memory address