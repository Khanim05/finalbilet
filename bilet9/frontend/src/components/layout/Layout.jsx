import React from 'react'
import { Outlet } from 'react-router'
import Foters from '../Footer/Foters'
import Navbar from '../navbar/Navbar'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Foters/>
    </div>
  )
}

export default Layout
