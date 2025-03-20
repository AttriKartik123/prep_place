// 2 type naal store hundi memory ch
// stack--> eik de ute eik like a coin
// last in first out lifo

// // STACK USED IN PRIMITIVE TYPES 
// YOU GET COPY OF VARIABLE

// // HEAP IN NON PRIMITIVE
// YOU GET REFERENCE


//stack
let youtube="hitesh"
let another=youtube;
console.log(another);
another="hello"; //change made to copy not original
console.log(another)


//object-heap
let abc_object={
name:"kartik",
age:20
}
let xyz_object=abc_object

xyz_object.name="Harleen"
console.log(abc_object.name)
console.log(xyz_object.name)


