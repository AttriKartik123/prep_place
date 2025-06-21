#include <bits/stdc++.h>

using namespace std ;

int main(){
   

    // for (int i = 1; i<=5 ; i++){
    //     for (int j = 1 ; j<=5 ;j++)
    //     {
    //         cout<<"*";
    //     }
    //     cout<<endl;
    // }  PATTERN 1

    // for (int i = 0 ; i <= 5 ; i++){
    //   for (int j=1 ; j <= i+1 ; j++){
    //     cout << "*"; 
       
    //   }
    //    cout<<endl;
    // }  PATTERN 2

    // int num = 4;
    // for (int i=0 ; i<4 ; i++){
    //     for (int j=0 ; j<i+1 ; j++)
    //     {
    //        cout<<i+1;
    //     }
    //     cout<<endl;   
    // }  PATTERN 4


     for (int i = 5; i >= 0; i--) {
       for (int j = 1; j < i + 1; j++) {
           cout << "*";
        }
        cout << endl;
    }
    return 0;  Pattern 5

    
}