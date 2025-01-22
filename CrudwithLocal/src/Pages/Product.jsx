import React, { useEffect, useState } from 'react'

function Product() {
    const [state,setState] = useState(JSON.parse(localStorage.getItem("data")) || [])
    const handleDelete = (i)=>{
        let a = state.filter((el)=>{
             return el.id != i
        })
        setState(a)
    }
    useEffect(()=>{
      localStorage.setItem("data",JSON.stringify(state))
    },[state])
  return (
    <div>
        {
            state.map((el)=>{
                return <>
                       <img src={el.img} /><br />
                       <p>{el.title} - {el.price}</p>
                       <button onClick={()=>handleDelete(el.id)}>Delete</button>
                       <button>Edit</button><br />
                </>
            })
        }
    </div>
  )
}

export default Product