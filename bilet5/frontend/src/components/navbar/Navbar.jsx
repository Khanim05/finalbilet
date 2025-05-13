import React from 'react'
import Logos from '../logos/Logos'
import List from '../list/List'
import Wrapper from '../wrapper/Wrapper'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="fixed">
      <div className='navbar-area'>
      <Logos/>
      <List/>
      <Wrapper/>
    </div>
    </div>
    
  )
}

export default Navbar
