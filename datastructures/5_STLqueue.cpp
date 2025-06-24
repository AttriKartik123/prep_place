#include <iostream>
#include <queue>
using namespace std;
int main()
{
    queue<int> q;
    int a;
    for(int i=0;i<5;i++)
    {
        cin>>a;
        q.push(a);
    }
    cout<<"Element on front"<<q.front();
    cout<<"Element on back"<<q.back();
    cout<<"Removing first element....................";
    q.pop();
    while(!q.empty())
    {
        cout<<q.front();
        q.pop();
    }
    return 0;
}