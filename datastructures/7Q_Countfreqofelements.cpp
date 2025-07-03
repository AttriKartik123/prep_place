#include <bits/stdc++.h>
using namespace std;
int main()
{
    vector<int> arr={1,2,3,5,4,6,2,5,6,8,9};
    map<int,int> s;

    for(int n:arr)
    {
       s[n]++;
    }
    for(auto p:s)
    {
        cout<<p.first<<p.second<<endl;
    }
return 0;
}