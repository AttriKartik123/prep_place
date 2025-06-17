#include <bits/stdc++.h>
using namespace std;

int main()
{
char size;
cout<<"Enter your size = ";
cin>>size;

switch(size){

case 'S':
cout<<"Size is Small";
break;

case 'M':
cout<<"Size is Medium";
break;

case 'L':
cout<<"Size is Large";
break;

case 'X':
cout<<"Size is Extra Large";
break;

default:
cout<<"We dont have products for your size";
break;

}
return 0;

}