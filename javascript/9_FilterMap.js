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

















const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition:1989},
];

const bookList = document.getElementById("book-list");
        
books.forEach(book => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p><strong>Published:</strong> ${book.publish}</p>
        <p><strong>Edition:</strong> ${book.edition}</p>
    `;
    bookList.appendChild(bookCard);
});


// // wo books jinka genre History hai wo niokaalo 
// const userBooks = books.filter((bk) => bk.genre === 'History')
// console.log(userBooks);
