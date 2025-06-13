import { useState } from 'react' 
import Chai from './Chai'

function App() {
  // state ko change krdega - DOM ke andar change ko propagate kiya jata hai 
 let [counter, setCounter] =useState(15)// parenthesis k andar default value hogi



// let counter = 15
const addValue = () => {
  console.log("Value added :" , Math.random());
  console.log("Clicked" , counter);
  if(counter<20)
  {//counter = counter +1 
  //   counter = counter +1 
  //   counter = counter +1 
  //   counter = counter +1 
  // setCounter(counter)

setCounter(prevcounter=>prevcounter+1)//short hand function
setCounter(prevcounter=>prevcounter+1)
setCounter(prevcounter=>prevcounter+1)
setCounter(prevcounter=>prevcounter+1)
}

  else{console.log("Value is greater than 20");
    }
 
}
const removeValue = () => {
  console.log("Value added :" , Math.random());
  console.log("Clicked" , counter) ;
  if(counter>0)
  {
  counter = counter - 1  
  setCounter(counter)
}
else{console.log("sasrikaaal jiiii");
}
}
  return (
  //   <>
  //  <h3>bjb</h3>
  //    <Chai/>

  <>
  <h1>Chai Aur react</h1>
  <h2>Counter Value : {counter}</h2> 

   {/* HOOKS USED TO UPDATE DATA ON UI in react  */}

  <button onClick={addValue}>Add Value {counter}</button>
  <br />
  <button onClick = {removeValue}>Remove Value{counter}</button>


  </>
  )
}

export default App
