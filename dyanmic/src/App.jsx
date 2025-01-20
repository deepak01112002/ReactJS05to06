import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [state,setState] = useState({
    name : "",
    email : "",
    skill : [""]
  })
  const handleadd = ()=>{
     setState({
      ...state,
      skill : [...state.skill,""]
     })
  }

  const handleChange = (e)=>{
    const {name,value} = e.target
    if(isNaN(name)){
    setState({...state,[name] : value})
    }else{
       let arr = [...state.skill]
       arr[name] = value
       setState({...state,skill : arr})
    }
  }

  console.log(state);
  
  return (
    <>
      <form action="">
         <input type="text" placeholder='Name' name='name'  onChange={handleChange}/>
         <input type="text" placeholder='Email' name='email'  onChange={handleChange}/>
        <input type='button'value={"add"} onClick={handleadd}/>
        {
          state.skill.map((el,index)=>{
            return <>
                <input  type='text' name={index} placeholder='Skills' onChange={handleChange}/>
                <input type="button" value={"delete"} />
            </>
          })
        }
      </form>
    </>
  )
}

export default App
