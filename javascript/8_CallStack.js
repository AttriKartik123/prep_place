// // // javascript execution context
// // how a file is runned/executed, 2 phases

// // { }---->code
// // first global execution context is created
// // then it is referred with this variable

// // then executed inside a thread(thread is a process)

// // 1) GLOBAL EXECUTION CONTEXT
// // 2) FUNCTION/FUNCTIONAL EXECUTION CONTEXT

// // IN MONGOOSE ETC. ANOTHER EXECUTION CONTEXT->EVAL

// 2 PHASES
// 1st-> Memory creation phase-->space allocated for variables in memory
// 2nd -> Execution phase ---> execution occurs here     

// let val1=10
// let val2=5

// function addNum(num1,num2)
// {
//     let total=num1+num2
//     return total
// }
// let result1=addNum(val1,val2)
// let result2=addNum(10,2)


// at first there will be gloval execution and allocated
// inside this
// now memory will be created for num1 and num2 /val1 and val2



// memory creation phase --->1st cycle
// // now val1=undefined
// //     val2=undefined 
// //     addNum->definition(line 24 and 25 will be stored here)

// // result1->undefined
// // result2->undefined




// execution phase--------->2nd cycle

// val1=10
// val2=5
// addNum=definition already holded
// result1-->makes its own execution block
//           new environment+execution thread
//           now memory creation and execution done again

//           for result 1 //memory creation
//           val1-->undefined
//           val2==>undefined
//           total==>undefined

//           //execution
//           num1=10
//           num2=5
//           total=15

//           execution context deletes 


          
//           for result 2 //memory creation
//           10
//           2
//           total==>undefined

//           //execution
//           num1=10
//           num2=2
//           total=12



function one()
{
    console.log("one");
    two()
}
function two()
{
    console.log("two");
    three()
}
function three()
{
    console.log("three");
}

one()
two()
three()
