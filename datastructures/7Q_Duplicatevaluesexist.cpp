#include <bits/stdc++.h>
using namespace std;
int main()
{
    vector<int> arr={1,2,3,5,4};
    unordered_set<int> s;
    for(int n:arr)
    {
        if(s.find(n) != s.end())
    {
     cout<<"true";
     return 0;
    }
s.insert(n);
    }
      cout<<"false";
      return 0;

}