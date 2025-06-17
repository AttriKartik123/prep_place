#include <bits/stdc++.h>
using namespace std;
int main()
{
    int arr1[5]={1,2,3,4,5}; //size=5
    int arr2[]={1,2,3,4,5,6}; //size=6
    int n=sizeof(arr1)/sizeof(arr1[0]);
    cout<<sizeof(arr1)/sizeof(arr1[0])<<endl;//size of first array
    cout<<sizeof(arr2)/sizeof(arr2[0])<<endl; //size of second array
    
    for(int i=0;i<n;i++)
    {
        cout<<arr1[i];
    }
    int arr3[10];
    
    return 0;
}