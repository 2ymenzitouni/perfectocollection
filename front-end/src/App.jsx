import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Dashboard from './pages/Dashboard/Dashboard'
import AllProducts from './pages/AllProducts/AllProducts'
import {BrowserRouter , Routes , Route} from "react-router"
function App() {
  return(
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/allproducts' element={<AllProducts/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='*' element={<p className='font-bold text-xl'>Page not found</p>}/>

        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
