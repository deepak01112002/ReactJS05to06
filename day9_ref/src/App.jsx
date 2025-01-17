import React,{ useState,Fragment, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   const titleRef = useRef(null)
  // const [state,setState] = useState({
  //   title : "",
  //   email : ""
  // })
  
  // const handleChange = (e)=>{
  //     const {name,value} = e.target
  //     setState({...state,[name] : value})
  // }
  useEffect(()=>{
    titleRef.current.style.backgroundColor = "red"
  },[])
  
  const handleSubmit = (e)=>{
    e.preventDefault()
   let obj = {
    title : titleRef.current.value
   }
   console.log(obj);
   
  }
  

  return (
       <>
           <form action="" onSubmit={handleSubmit}>
                <input type="text" ref={titleRef} name='title' />
                <input type="text" name='email' />
                <input type="submit" />
           </form>
       </>
  )
}

export default App
