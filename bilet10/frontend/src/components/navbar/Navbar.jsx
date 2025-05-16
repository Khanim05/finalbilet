import React from 'react'
import Logo from '../logo/Logo'
import Wrapper from '../wrapper/Wrapper'
import Search from '../search/Search'
import './navbar.css'

const Navbar = () => {
  return (
    <div id='navbar'>
       <div className='navbar-area'>
      <Search/>
      <Logo/>
      <Wrapper/>
    </div>
    <hr />
    </div>
   
  )
}

export default Navbar
