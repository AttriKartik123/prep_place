#include <bits/stdc++.h>

using namespace std;

void calculator()
{
    int a, b;
    cout << "Enter values:";
    cin >> a >> b;

    cout << "sum=" << a + b << endl;
    cout << "sub=" << a - b << endl;
    cout << "mul=" << a * b << endl;
    cout << "div=" << a / b << endl;
}

int calci() {
    int a, b;
    cout << "Enter values:";
    cin >> a >> b;

     cout << "sum=" << a + b << endl;
     cout << "sub=" << a - b << endl;
     cout << "mul=" << a * b << endl;
     cout << "div=" << a / b << endl;

    return a+b ;
    return a-b ;
    return a*b ;
    return a/b ;

}


int main()
{
    calculator();
    cout<< calci ();
    return 0;
}
