#include <bits/stdc++.h>
using namespace std;
int main()
{
    vector<int> arr={1,2,3,5,4,6,2,5,6,8,9};
    unordered_set<int> s;
    vector<int> result;
    for(int n:arr)
    {
        if(s.find(n) == s.end())
    {
      s.insert(n);
      result.push_back(n);
    }

    }
       for(int n:result)
    {
        cout<<n<<endl;
    }

}