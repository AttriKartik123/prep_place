// const coding = ["js" , "ruby" , "java" , "python"] ;

// const values = coding.forEach( (item)=> { // you have to manual return a value in foreach  function
//     //console.log(item.name);
//     return item ;
    
// }); // undefined return krega 

// console.log(values);






// const myNums = [1,2,3,4,5,6,7,8,9,10] ;
// // filter operation
// // myNums.filter((num) => num > 4  ) // takes callback 
// // returns the values but foreach doesnot
// // {}= scope = mtlb khud se return krna pdega  , ()= return
// const newNums = myNums.filter((num) => {
//     return num > 4;
//  });
 
//  console.log(newNums);
 





// const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = [];

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num); // push into newNums if condition is true
//     }
// });

// console.log(newNums);

// //-----> // foreach naal kuch v return nhi ho reha , jdo filter la

// // foreach se return ki hai vaue abb , newNums ek array bnaali and myNum se waha pe push krdegataa pher value return hogi












// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition:1989},
// ];
// const userBooks = books.filter((bk) => {
//     return bk.publish >= 1995 && bk.genre === "History"; // removed extra space
// }); // return keyword isiliye likha becoz {} ye use ki thi 

// console.log(userBooks);

// // wo books jinka genre History hai wo niokaalo 
// const userBooks = books.filter((bk) => bk.genre === 'History')
// console.log(userBooks);

 

// const bookList = document.getElementById("book-list");
        
// books.forEach(book => {
//     const bookCard = document.createElement("div");
//     bookCard.classList.add("book-card");
//     bookCard.innerHTML = `
//         <h2>${book.title}</h2>
//         <p><strong>Genre:</strong> ${book.genre}</p>
//         <p><strong>Published:</strong> ${book.publish}</p>
//         <p><strong>Edition:</strong> ${book.edition}</p>
//     `;
//     bookList.appendChild(bookCard);
// });




// FILTER AND MAP AUTOMATICALLY RETURN  KRTA  HAI AND FOREACH KUCH BHI RETURN NHI KRTA HAI 
// const myNumers = [1,2,3,4,5,5,6,7,8]

// const newNums = myNumers.map((num) => {return num+10 })  // maps automtically return krta hai value 
// console.log(newNums);
// MAP NEW NUMS NAAM KI EK NAYI ARRAY BNAA RHA HAI AND USME ANSWER DE RHA HAI 


//--------> //FILTER KI USAGE
// const newNums = myNumers.filter((num) => {return num+10 })  // filter automtically return krta hai value 
// console.log(newNums); // IT WOULD NOT GIVE OUTPUT BECOZ WE HAVE TO GIVE CONDITION TO IT IN FILTER ISILIYE IT WOULD NOT GIVE ANSWER


//CHAINING METHOD----- Multiple maps and filters lgane ka treeka
// const newNumers = [1,2,3,4,5,5,6,7,8,10];

// const newNums = newNumers
//                 .map((num) => num * 10)  
//                 .map((num) => num / 5)   
//                 .filter((num) => num > 10); 

// console.log(newNums);


// REDUCER METHOD
// const array1 = [2,3,4,5] ;
// // saari ek me hi reduce hogi , mean to say sirf ek value ki jagah and ussi me saraa store ho rha hai  
// const initialValue = 1;
// const sumWithInitial =array1.reduce(
//     (accumulator, currentValue)=> accumulator + currentValue , initialValue );

//     console.log(sumWithInitial);
    


// const myNums = [3,2,1]

// const myTotal= myNums.reduce(function (acc, currVal) {
//     return acc-currVal
// })
// console.log(myTotal); op=0




// const myNums = [3,2,1]

// const myTotal= myNums.reduce(function (acc, currVal) {
//     return acc+currVal
// },0)
// console.log(myTotal);   // op=6



// const myNums = [1,2,3]

// const myTotal= myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
    
//     // return acc*currVal
//     return acc+currVal
// },0)
// console.log(myTotal);



// writing it in array function
// const myNums = [1,2,3]
// const myTotal = myNums.reduce((acc , curr) => acc+curr , 0)

// console.log(myTotal);



const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "python Course",
        price : 4999
    },
    {
        itemName : "Mobile dev Course",
        price : 5999
    },
    {
        itemName : "Data Analysis Course",
        price : 15999
    },
]


const PriceToPay = shoppingCart.reduce((acc,item) =>  acc + item.price , 0) ;
console.log(PriceToPay);
