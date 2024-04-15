import React from 'react'
import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom'
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import Home from '../Pages/Home/Home'
import Dishes from '../Pages/Dishes/Dishes'
import Booking from '../Pages/Booking/Booking'
import About from '../Pages/About/About'
import Notfound from '../Pages/Notfound/Notfound'

const LayoutRoutes = () => {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Dishes' element={<Dishes/>}/>
            <Route path='/services' element={<Booking/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/*' element={<Notfound/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes