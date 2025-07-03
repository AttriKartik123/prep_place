#include <bits/stdc++.h>
using namespace std;
int main()
{
    unordered_map<string,int> m;
    
    //insert
    pair<string,int>p("harleen",1);
    m.insert(p);
    m["kartik"]=2;//also inserts

    //finding value
    cout<<m["harleen"]<<endl;
    return 0;
}