// const myArray=[0,1,2,3,4,5]
// // console.log(myArray[0]);
// const myArray2=new Array(0,3,4,5)//normal round bracket here
// myArray.push(7)//will add 7 to array
// console.log(myArray);

// myArray.pop()//will remove from array
// console.log(myArray);

// myArray.unshift(12)//aage add ho jayega
// console.log(myArray);
// myArray.shift()
// console.log(myArray);
// // 0 1 2 3 4 5 
// // 0 1 2 3 4 5 7
// // 0 1 2 3 4 5 

// // 12 0 1 2 3 4 5

// // push(5)  pop()----->pishe at the BACK
// // unshift(5)  shift()--> aage at FRONT

// console.log(myArray.includes(9));//if present or not
// console.log(myArray.indexOf(4));


// const newArr=myArray.join()
// console.log(myArray);//array
// console.log(newArr)//string
// console.log(typeof newArr);

// console.log(myArray);//012345
// const splithere=myArray.slice(1,3)
// console.log(splithere);//12

// // splice()//also includes last element
// // 1 2 3//splices out of original array

// // 0 4 5

// // ----------2ND SHIFT----------------

const marvel_heros=["thor","ironman","iman"]
const dc_heros=["superman","doraemon","shizuka"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

//instead of adding two array it puts one array into another

// console.log(marvel_heros[0])
// console.log(marvel_heros[1])
// console.log(marvel_heros[2])
// console.log(marvel_heros[3])
// console.log(marvel_heros[3][0])


//concat doesnt change original array
const abc=marvel_heros.concat(dc_heros)
console.log(abc);
console.log(marvel_heros)


//spread 
const new_heros=[...marvel_heros,...dc_heros]
console.log(new_heros);
// ...->>>>>>>>>spread


const another_Array= [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_Array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("hITESH"));
console.log(Array.from("hITESH"));
//cant convert object direct to array, have to specify
//value to convert
console.log(Array.from({name:"hitesh",age:20}));

let score1=200
let score2=340
let score3=349

console.log(Array.of(score1,score2,score3));

 