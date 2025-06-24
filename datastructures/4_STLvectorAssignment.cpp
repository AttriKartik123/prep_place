#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int n;
    cout << "Enter the number of students :";
    cin >> n;
    vector<int> percentages(n);

    for (int i = 0; i < n; i++)
    {      
        cout << "Enter percentage :"; 
        cin >> percentages[i];
    }
      percentages.insert(percentages.begin()+2, 50);
      
    for (int i = 0; i < n; i++)
    {
        cout << percentages[i] << endl;
    }
    return 0;
}