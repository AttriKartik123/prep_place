#include <iostream>
#include <deque>
#include <vector>
using namespace std;
int main()
{
    deque<int> dq={10,20,30,40,50,60,70,80,90,100};
    int k;
    cout<<"Specify window size";
    cin>>k;

    vector<int> arr(dq.begin(), dq.end()); 
    deque<int> monoDeque;
    int n = arr.size();

    cout << "Sliding Window Maximums: ";

    for (int i = 0; i < n; i++) {
        if (!monoDeque.empty() && monoDeque.front() <= i - k)
            monoDeque.pop_front();

        // Remove all smaller elements from the back
        while (!monoDeque.empty() && arr[monoDeque.back()] < arr[i])
            monoDeque.pop_back();

        // Add current index
        monoDeque.push_back(i);

        // Print maximum for the window
        if (i >= k - 1)
            cout << arr[monoDeque.front()] << " ";
    }

    cout << endl;
    return 0;
}