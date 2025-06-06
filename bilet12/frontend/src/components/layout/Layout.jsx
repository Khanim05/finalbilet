import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import {Outlet} from 'react-router'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
