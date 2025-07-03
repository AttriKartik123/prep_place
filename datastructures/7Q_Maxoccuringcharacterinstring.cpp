#include <bits/stdc++.h>
using namespace std;
int main()
{
    string a="abababaaaabbaaabifme";
    int arr[256]={0};
    for(int i=0;i<a.length();i++)
    {
    arr[a[i]]++;
    }
    char maxchar;
    int maxcharfreq=0;

    for(int i=0;i<256;i++)
    {
        if(arr[i]>maxcharfreq)
        {
         maxcharfreq=arr[i];
         maxchar=i;
        }
    }
    cout<<"Max occuring char = "<<maxchar<<endl;
    cout<<"No of times occuring = "<<maxcharfreq;
    return 0;
}