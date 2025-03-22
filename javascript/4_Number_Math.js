const score=400
console.log(score);

const balance = new Number(100.9439)
console.log(balance.toPrecision());
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));//fixed digits after decimal

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3));

const hundreds=1000000000
console.log(hundreds.toLocaleString('en-US'));
//will put commas

//to find max and min value
Number.MAX_VALUE, Number.MIN_VALUE

// ----------------------------------------
// Math
console.log(Math.abs(-4));
console.log(Math.pow(2,3));

console.log(Math.round(4.5));
// 0-4-->pishe 5-9===>aage
//roundoff

// Math.ceil--> always chooses top value
// Math.floor--> always chooses down value

console.log(Math.min(4,3,6,8));

// cards-> sort 
// card id given -> 1,2,3,4
// emplyeed db--> emp id de bassis te sort

console.log(Math.random());
//gives random value b/w 0 and 1

//dice game
let a= new Number (Math.random()*10);
b=Math.round(a);
console.log(b);

