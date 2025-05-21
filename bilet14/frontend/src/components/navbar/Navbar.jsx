import React from 'react'
import Logo from '../logo/Logo'
import List from '../list/List'
import Wrapper from '../wrapper/Wrapper'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="fixed">
      <div className='navbar-area'>
      <Logo/>
      <List/>
      <Wrapper/>
    </div>
    </div>
    
  )
}

export default Navbar
