#include <bits/stdc++.h>
using namespace std;

int main(){
    bool petrolAvailable = true;
    bool carIsAvailable ;
    cout<<"Do you have car :";
    cin>> carIsAvailable ;

    if (carIsAvailable == true){
        if(petrolAvailable == true) {
            cout<<"You can for ride" ;
        }else{
            cout<<"You dont have petrol" ;
        }
    }

    else{
        cout<<"Sala Greeb";
    }
    

    return 0;
}