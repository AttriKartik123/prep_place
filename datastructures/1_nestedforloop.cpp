#include <bits/stdc++.h>
using namespace std;
int main()
{
    //multidimensional array
    int arrmulti[2][5]={
        {0,1,2,3,4},{5,6,7,8,9}
    };
    cout<<arrmulti[1][3];
    int arr1[5]={1,2,3,4,5};
    int arr2[5]={6,7,8,9,10};
  
    for(int i=0;i<2;i++)
    {
        for(int j=0;j<5;j++)
        {
            cout<<arrmulti[i][j]<<endl;
        }
    }

    return 0;
}