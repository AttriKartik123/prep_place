//  fetch API pehle browser native API thi isiliye isse add nhi kiya gya tha node js me  
//  abb add isiliye krdiya gya taakki ek compatibility and consitency mil skti browser and local k liye-->

//  <!-- status code - IRSC
//  1xx: informational
//  2xx: success
//  3xx: maintainence and redirectional
//  4xx: client errors

//  MicroTask queue(Call Back queue) ---- fetch queue (fetch alag se apni queue bnata hai)
//  Fetch= VIP Line (Mtlb pehle iska kaam hoga)
 



// FETCH WORKING FULL: -----------------------

//  response =  fetch ('Something')  // Response is a global variable
//              |   | 
//           Data:  WebBrowser\node
//   On fullfilled[]             |
//   On Rejecction[]           Network Request milegi 
//                              |        |
//                              Yes      No
//                              |        |
//                     Onfullfilled     On Rejection
//                     pe chlajaiga        pe chlega
 
