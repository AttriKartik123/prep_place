#include <iostream>
#include <deque>
using namespace std;
int main()
{
    deque<int> dq={10,20,30,40,50,60,70,80,90,100};
 for(auto val:dq)
 {
    dq.push_front(val);
    dq.pop_back();
   
 }
 for(auto val:dq)
 {
    cout<<val<<" ";
 }
    return 0;
}