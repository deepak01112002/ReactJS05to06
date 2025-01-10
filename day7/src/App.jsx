import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state,setState] = useState({
    username : "",
    email : "",
    password : ""
  })
  const [valid,setValid] = useState(false)
  
  const handleChange = (e)=>{
      setState({...state,[e.target.name] : e.target.value})
  }

  const handleBlur = ()=>{
    var usernameRegex = /^[0-9A-Za-z]{6,16}$/

    if(usernameRegex.test(state.username) == false){
       setValid(true)
    }
   
  }
  
  const handleFocus = ()=>{
    setValid(false)
    
  }
  return (
    <>
      <form action="">
          <input type="text" placeholder='Username' className={valid ? "" : ""} style={{borderColor : valid ? "red" : ""}} name="username" onChange={handleChange}  onBlur={handleBlur} onFocus={handleFocus}/>
          {valid ? <p>Username length is greater than 5</p> : ""}
          <input type="text" placeholder='Email' name='email' onChange={handleChange}/>
          <input type="text" placeholder='Password' name='password' onChange={handleChange}/>
          <input type="submit" />
      </form>
    </>
  )
}

export default App
