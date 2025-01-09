import React, { useState } from 'react'
import ProductForm from './ProductForm'
import ProductList from './ProductList'

function Product() {
    const [swi, setSwi] = useState(true)
    const [state, setState] = useState({
        title: "",
        price: "",
        img: ""
    })
    const [arr, setArr] = useState([])

    const handleChange = (e) => {

        const { name, value } = e.target
        setState({ ...state, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setArr([...arr, state])
    }
    

    return (
        <div>
            <button onClick={() => setSwi(false)}>Product</button>
            <button onClick={() => setSwi(true)}>Form</button>
            {swi ? <ProductForm handleChange={handleChange} handleSubmit={handleSubmit} /> : <ProductList arr={arr} />}
        </div>
    )
}

export default Product