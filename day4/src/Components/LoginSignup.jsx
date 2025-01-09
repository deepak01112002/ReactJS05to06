import React, { useState } from 'react'

function LoginSignup() {
    const [state,setState] = useState(true)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const [LoginEmail,setLoginEmail] = useState("")
    const [LoginPassword,setLoginPass] = useState("")
    const [arr,setArr] = useState([])
    const handleSubmit = ()=>{
      let obj =  {
         email,
         password,
         username 
      }
      // arr.push(obj)
      setArr([...arr,obj])
      setEmail("")
      setPassword("")
      setUsername("")
      
    }

    const handleLogin = ()=>{
        let a = arr.filter((el)=>el.email == LoginEmail && el.password == LoginPassword)
        if(a.length > 0){
          alert("login Successfull")
        }else{
          alert("Login Unsuccessfull")
        }
    }
    
    
  return (
    <div>
        { state == true ? <div id='login'>
            <h1>Login</h1>
             <input type="text" placeholder='Email Id' onChange={(e)=>{setLoginEmail(e.target.value)}} />
             <input type="text" placeholder='Password' onChange={(e)=>{setLoginPass(e.target.value)}} />
             <input type="submit" onClick={handleLogin} />
             <p onClick={()=>{setState(false)}}>New to Flipkart? Create an account</p>
         </div> :
         <div id='signup'>
            <h1>Signup</h1>
             <input type="text" value={username} placeholder='Username' onChange={(el)=>{setUsername(el.target.value)}}/>
             <input type="text" value={email} placeholder='Email ID' onChange={(el)=>{setEmail(el.target.value)}}/>
             <input type="text" value={password} placeholder='Password' onChange={(el)=>{setPassword(el.target.value)}}/>
             <input type="submit" onClick={handleSubmit}/>
             <p onClick={()=>{setState(true)}}>Existing User ? Login</p>
         </div>}
    </div>
  )
}

export default LoginSignup