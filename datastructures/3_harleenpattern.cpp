#include <bits/stdc++.h>
using namespace std;
int main()
{

char asterik='*';

/* PATTERN NO. 1
for(int i=0;i<5;i++)
{
    for(int j=0;j<5;j++)
    {
        cout<<asterik;
    }
    cout<<endl;
}
*/


/*  PATTERN NO. 2
for(int i=0;i<5;i++)
{
    for(int j=0;j<=i;j++)
    {
        cout<<asterik;
    }
    cout<<endl;
}
*/

/*PATTERN NO. 3
for(int i=0;i<5;i++)
{
    int a=1;
    for(int j=0;j<=i;j++)
    {
        cout<<a;
        a++;
    }
    cout<<endl;
}
*/

/*PATTERN NO. 4
int a=1;
for(int i=0;i<5;i++)
{
    for(int j=0;j<=i;j++)
    {
        cout<<a;
    }
    a++;
    cout<<endl;
}
*/

// PATTERN NO. 5
/*for(int i=0;i<5;i++)
{
    for(int j=5;j>i;j--)
    {
        cout<<asterik;
    }
    cout<<endl;
}
*/

//PATTERN 6
/* for(int i=0;i<5;i++)
{
    int a=1;
    for(int j=5;j>i;j--)
    {
        cout<<a;
        a++;
    }
    cout<<endl;
}*/

//PATTERN 7
int i,j,k;
for(i=0;i<5;i++)
{
    int a=1;
    for(j=5;j>i;j--)
    {
        cout<<' ';
        a++;
    }
     for (k=0;k<=5;k++)
   { cout<<asterik;
    k++;
 }
    cout<<endl;
}

}