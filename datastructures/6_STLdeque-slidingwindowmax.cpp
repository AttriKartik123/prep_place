#include <iostream>
#include <deque>
using namespace std;
int main()
{
    deque<int> dq={10,20,30,40,50,60,70,80,90,100};
    int k;
    cout<<"Specify window size";
    cin>>k;

    for(auto i=dq.begin();i!=dq.end();i++)
    {

        
    } 
    int midIndex = dq.size() / 2;
    // If even number of elements, delete left-middle
    if (dq.size() % 2 == 0)
        midIndex--;

    dq.erase(dq.begin() + midIndex);

    for(auto val:dq)
 {
    cout<<val<<" ";
 }
    return 0;
}