import { useState } from 'react'
import Navbar from './Navbar'

import Test from './Test'
import Gallery from './Gallery'
import Services from './Services'
import Testimonials from './Testimonials'
import AboutUs from './AboutUs'
import Footer from './Footer'
import NotFound from './NotFound'
import { Routes, Route } from 'react-router-dom'

function App() {
 

  return (

       <>

     <Navbar></Navbar>
       
 <Routes>
 
   <Route  path='/' element={[<Test></Test> , <Gallery></Gallery>, <Services></Services> , <Testimonials></Testimonials>]}/>
   <Route  path='/about' element={<AboutUs></AboutUs>}/>
   <Route path='*' element={<NotFound></NotFound>}> </Route>
 </Routes>

    <Footer></Footer>
   

       </>
  )
}

export default App
