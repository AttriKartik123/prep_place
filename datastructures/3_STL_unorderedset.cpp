#include <iostream>
#include <unordered_set> //STL file name
using namespace std;
int main()

{int a;
  unordered_set<int> s;
  for(int i=0;i<5;i++)
  {
    cin>>a;
    s.insert(a);
  }
  for(auto j=s.begin(); j!=s.end();j++)
  {
    cout<<*j;
  }
    return 0;
}
//unordered set means unique value but in no fixed order
/*insert() - to insert an element
begin() - first element in the unordered set. //s.begin();
end() - last element. //s.end();
count() - it returns 1 if the element is present in the container otherwise 0.
clear() - deletes all the elements 
find() - to search an element   if(s.find(2)!=s.end())
erase() - to delete a single element 
size() - returns the size 
empty() - to check if the unordered set is empty or not.
*/