import React from 'react'
import {useState} from 'react'
import Counter2 from './Counter2'
import Counter3 from './Counter3'
function Counter() {
    let [state,setState] = useState(10)
    const handleInc = ()=>{
       setState(state + 1)
    }
    const handleDec = ()=>{
        setState(state - 1)
        
     }
  return (
    <div>
        <button onClick={handleDec}>-</button>
        <h1>{state}</h1>
        <Counter2 deepak={state}/>
        <Counter3 state={state}/>
        <button onClick={handleInc}>+</button>
    </div>
  )
}

export default Counter