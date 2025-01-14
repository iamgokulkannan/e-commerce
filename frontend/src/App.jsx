import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/collection'
import Cart from './pages/Cart'
import Contact from './pages/contact'
import Login from './pages/login'
import Order from './pages/order'
import PlaceOrder from './pages/placeOrder'
import Product from './pages/Product'
import Navbar from './components/navbar'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:-[7vw] lg:-[9vw]'> 
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/collection' element={<Collection />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/order" element={<Order />} />
      <Route path="/placeOrder" element={<PlaceOrder />} />
      <Route path="/product/:productId" element={<Product />} />
    </Routes>
    </div>
  )
}

export default App