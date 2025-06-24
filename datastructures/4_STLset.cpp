#include <iostream>
#include <set>
using namespace std;
int main()
{
  set<int> s;
 int a;
  for(int i=0;i<5;i++)
  {
    cin>>a;
    s.insert(a);
  }
  for(auto j=s.begin();j!=s.end();j++)
  {
    cout<<*j<<"\n";
  }
    return 0;
}