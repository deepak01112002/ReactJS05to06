import React, { useState } from 'react'
import ProductList from './ProductList'

function ProductForm({handleChange,handleSubmit,state}) {
  
    
    
  return (
    <div>
       <form action="" method='' onSubmit={handleSubmit}>
            <input type="text" value={state.title} placeholder='Title' name='title' onChange={handleChange} required/>
            <input type="text" placeholder='Price' name='price'  onChange={handleChange} />
            <input type="text" placeholder='Image' name='img'  onChange={handleChange} />
            <input type="submit" /> 
       </form>
    </div>
  )
}

export default ProductForm