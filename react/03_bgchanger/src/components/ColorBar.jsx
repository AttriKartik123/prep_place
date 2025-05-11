/* eslint-disable no-undef */
import React from 'react'
import { useState } from 'react'

function ColorBar() {
    // eslint-disable-next-line no-unused-vars
    const [color,setcolor]=useState('olive')
    return (
    <div className='inline-flex border-2 purple rounded-2 px-5 mx-2 mt-2 pt-2 pb-2'
    style={{backgroundColor:color}}>
       
       <button id='red' onClick={()=>setcolor("red")} className='mx-4 px-2 border-2 bg-red-600 black rounded-l'>red</button>

       <button id='blue' onClick={()=>setcolor("blue")} className='mx-4 px-2 border-2 bg-blue-900 black rounded-l'>blue</button>
       <button id='green' onClick={()=>setcolor("green")} className='mx-4 px-2 border-2 black bg-green-900 rounded-l'>green</button>
       <button id='yellow' onClick={()=>setcolor("yellow")} className='mx-4 px-2 border-2 black bg-yellow-500 rounded-l'>yellow</button>
       <button id='orange' onClick={()=>setcolor("orange")} className='mx-4 px-2 border-2 black bg-orange-600 rounded-l'>orange</button>
   
    </div>
  )
}

export default ColorBar