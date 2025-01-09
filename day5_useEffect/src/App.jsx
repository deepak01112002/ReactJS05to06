import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [state,setState] = useState(0)
  const [data,setData] = useState(null)
  useEffect(()=>{
    fetch(`https://dummyjson.com/products`)
    .then((res)=>res.json())
    .then((res)=>setData(res.products))
    .catch((Err)=>console.log(Err))
    
  },[])
  return (
    <>
     <h1>{state}</h1>
      <button onClick={()=>setState(state + 1)}>click</button>
      {
       data == null ? <h1>Loading.....</h1> : data.map((el)=>{
            return <div>
                 <img src={el.thumbnail} alt="" />
                 <p>{el.title}</p>
            </div>
        })
      }
    </>
  )
}

export default App



function fet(){ 
  fetch(`https://dummyjson.com/products`)
  .then((res)=>res.json())
  .then((res)=>console.log(res.products))
  .catch((Err)=>console.log(Err))
}
// fet()