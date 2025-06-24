
#include <iostream>
#include <map>
using namespace std;
int main()
{
    string a;
   map<int,string> m1;
   for(int i=0;i<10;i++)
   {
    cin>>a;
    m1.insert({i,a});
   }
    for(auto j=m1.begin(); j!=m1.end();j++)
  {
    cout<<j->first<<"\n"<<j->second<<endl;
  }

    return 0;
}