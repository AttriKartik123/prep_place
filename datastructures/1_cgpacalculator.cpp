#include <bits/stdc++.h>
using namespace std;

int main()
{
    char a;
    cout << "Enter Your grade :";

    cin >> a;

    switch (a)
    {
    case 'O':
        cout << "Above 90";
        break;
    case 'A':
        cout << "Above 80";
        break;
    case 'B':
        cout << "Above 70";
        break;
    case 'C':
        cout << "Above 60";
        break;
    case 'D':
        cout << "Above 50";
        break;
    case 'F':
        cout << "Fail";
        break;
    default:
        cout << "Result not evaluated";
    }

    return 0;
}