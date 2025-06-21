// ability to change size whenever elements are added or deleted from the vector

#include <iostream>
#include <vector>
using namespace std;
int main()
{
    int a;
   int arr[5]={1,2,3,4,5};//statically declare size
   vector<int> v1;
   for(int i=0;i<10;i++)
   {
    cin>>a;
    v1.push_back(a);
   }
   v1.insert(v1.begin()+3,66);
    for(auto j=v1.begin(); j!=v1.end();j++)
  {
    cout<<*j<<endl;
  }

    return 0;
}

/*begin() - first element of the vector.
end() - last element of the vector.
push_back() -insert the element passed in the parameter in the vectors, the element is inserted at the end.
insert() - it is used to insert an element at a specified position.  v1.insert(it,5);
erase() - it is used to delete a specific element
pop_back() - it deletes the last element 
front() - it returns first element of the vector.
back() - it returns last element of the vector.
clear() - deletes all the elements from the vector.
empty() - to check if the vector is empty or not.
size() - returns the size of the vector*/