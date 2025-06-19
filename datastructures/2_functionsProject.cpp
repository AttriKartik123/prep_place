#include <bits/stdc++.h>

using namespace std;

void calculator()
{
    int a, b;
    char operation;
    while (a != 0 && b != 0)
    {
        cout << "ENter the values";

        cin >> a >> b;

        cout << "What operation do you want to carry =";
        cin >> operation;

        switch (operation)
        {
        case '+':
            cout << a + b;
            break;

        case '-':
            cout << a - b;
            break;

        case '*':
            cout << a * b;
            break;

        case '/':
            cout << a / b;
            break;

        default:
            cout << "Invalid operation";
        }
    }
}

int main()
{
    calculator();

    return 0;
}
