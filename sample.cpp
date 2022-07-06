#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> arr;
    arr.push_back(4);
    arr.push_back(3);
    arr.push_back(2);
    arr.push_back(5);
    int ans = 1;
    for(int i=0;i<arr.size();i++)
    {
        ans = ans ^ arr[i];
    }

    for(int i=0;i<arr.size();i++)
    {
        if(ans ^ arr[i] == arr[i])
        {
            cout<<arr[i]<<endl;
            break;}
    }
    return 0;
}