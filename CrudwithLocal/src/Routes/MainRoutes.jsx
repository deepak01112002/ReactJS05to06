import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Form from '../Pages/Form'
import Product from '../Pages/Product'
import About from '../Pages/About'
function MainRoutes() {
  return (
    <div>
        <Routes>
             <Route path='/' element={<Home/>} ></Route>
             <Route path='/form' element={<Form/>} ></Route>
             <Route path='/product' element={<Product/>} ></Route>
             <Route path='/about' element={<About/>} ></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes