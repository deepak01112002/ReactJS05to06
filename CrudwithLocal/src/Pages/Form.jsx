import React, { useEffect, useState } from 'react'
import {v4} from 'uuid'
function Form() {
    const [state,setState] = useState({
        title : "",
        img : "",
        price : "",
        id : v4()
    })
    const [arr,setArr] = useState(JSON.parse(localStorage.getItem("data"))||[])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setState({...state,[name] : value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setArr([...arr,state])
        setState({
            title : "",
            img : "",
            price : "",
            id : v4()
        })
        
    }
    useEffect(()=>{
        localStorage.setItem("data", JSON.stringify(arr))
    },[arr])
  return (
    <div>
        <form onSubmit={handleSubmit}>
             <input type="text" value={state.title} name='title' placeholder='Title' onChange={handleChange}/>
             <input type="text" name='img' value={state.img} placeholder='Image' onChange={handleChange}/>
             <input type="text" name='price' value={state.price} placeholder='Price' onChange={handleChange}/>
             <input type="submit" />
        </form>
    </div>
  )
}

export default Form