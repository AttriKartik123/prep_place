#include <iostream>
#include <deque>
using namespace std;
int main()
{
    deque<int> dq;
    dq.push_front(1);
    dq.push_front(2);
    dq.push_front(3);
    dq.push_front(4);
    dq.push_front(5);
    dq.push_back(10);
    dq.push_back(20);
    dq.push_back(30);
    dq.push_back(40);
    dq.push_back(50);
    dq.pop_front(); dq.pop_back();
    for(auto val:dq)
    {
        cout<<val<<" ";
    }
    return 0;
}