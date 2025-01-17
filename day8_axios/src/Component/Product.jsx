import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Product() {
    const [state,setState] = useState([])
    useEffect(()=>{
      axios.get(`https://fakestoreapi.com/products`)
      .then((Res)=>{
          setState(Res.data)
      })
      .catch((err)=>{
          console.log(err);
      })
    },[])
  return (
    <div>
         {
            state.map((el,index)=>{

                return <div key={index}>
                 <div >
                    <img src={el.image} alt="" width={150}/>
                </div></div>
            })
         }
    </div>
  )
}

export default Product