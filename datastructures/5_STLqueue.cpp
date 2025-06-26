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
    cout<<q.size();
    return 0;
}
//if you dont want to display element like this then make a temporary queue for that purpose
//Copy the original queue ----------------> queue<int> temp = q;