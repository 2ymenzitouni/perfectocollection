import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Dashboard from './pages/Dashboard/Dashboard'
import Navbar from './components/navbar/navbar'
function App() {
  return(
    <>
      <Navbar/>
      {/* <Home/>  */}
      <Product/>
      {/* /* <Cart/> */ }
      {/* <Dashboard/> */}
      <Footer/>
    </>
  )
}

export default App
