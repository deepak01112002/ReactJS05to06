import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Pages/Form'
import Product from './Pages/Product'
import MainRoutes from './Routes/MainRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <MainRoutes/>
     
    </>
  )
}

export default App
