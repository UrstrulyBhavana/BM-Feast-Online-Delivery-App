import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home.js'
import Cart from './Pages/Cart/Cart.js'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder.js'
import Footer from './Components/Footer/Footer.js'
import LoginPopup from './Components/LoginPopup/LoginPopup.js'

const App = () => {

     const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer/>
    </>

  )
}

export default App



