//lexical scoping
//closure is combiantion of fn bundled togther

// function add(a,b)
// {
//     console.log(a+b);

//     function sub(c,d)
//     {
//         console.log(a,b,c,d);
        
//     }

//     console.log(c);
//     console.log(d);
    
    
    
// }
// add(3,4)







function outer()
{
    name="harleen"
    function inner()
    { 
        console.log('inner',name)
    }
    inner()
}



outer()
console.log('outer',name)