const myArray=[0,1,2,3,4,5]
// console.log(myArray[0]);
const myArray2=new Array(0,3,4,5)//normal round bracket here
myArray.push(7)//will add 7 to array
console.log(myArray);

myArray.pop()//will remove from array
console.log(myArray);

myArray.unshift(12)//aage add ho jayega
console.log(myArray);
myArray.shift()
console.log(myArray);
// 0 1 2 3 4 5 
// 0 1 2 3 4 5 7
// 0 1 2 3 4 5 

// 12 0 1 2 3 4 5

// push(5)  pop()----->pishe at the BACK
// unshift(5)  shift()--> aage at FRONT

console.log(myArray.includes(9));//if present or not
console.log(myArray.indexOf(4));


const newArr=myArray.join()
console.log(myArray);//array
console.log(newArr)//string
console.log(typeof newArr);

console.log(myArray);//012345
const splithere=myArray.slice(1,3)
console.log(splithere);//12

// splice()//also includes last element
// 1 2 3//splices out of original array

// 0 4 5



