import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicExample from './Component/Acco'

function App() {
  
  const [state,setState] = useState({
    name : "",
    email : "",
    skill : [""],
    hobbies : [""]
  })
  const handleadd = ()=>{
     setState({
      ...state,
      skill : [...state.skill,""]
     })
  }

  const handleChange = (e)=>{
    const {name,value} = e.target
    // if(isNaN(name)){
    setState({...state,[name] : value})
    // }else{
    //    let arr = [...state.skill]
    //    arr[name] = value
    //    setState({...state,skill : arr})
    // }
  }
  const handleDelete = (i)=>{
    let arr = [...state.skill]
    arr.splice(i,1)
    setState({...state,skill : arr})
    
  }
 
  const handleSkill = (e,index)=>{
     let arr = [...state.skill]
     arr[index] = e.target.value
     setState({...state,skill : arr})
     
  }
  console.log(state);
  return (
    <>
      <form action="">
         <input type="text" placeholder='Name' name='name'  onChange={handleChange}/>
         <input type="text" placeholder='Email' name='email'  onChange={handleChange}/>
        <input type='button' className='btn btn-secondary' value={"add"} onClick={handleadd}/>
        {
          state.skill.map((el,index)=>{
            return <>
                <input  type='text' name="skill" placeholder='Skills' onChange={(e)=>handleSkill(e,index)}/>
               {state.skill.length > 1 ? <input type="button" onClick={()=>handleDelete(index)} value={"del"} /> : ""}
            </>
          })
        }
        
      </form>
      <BasicExample/>
    </>
  )
}

export default App
