import React from 'react'
import Logo from '../logo/Logo'
import List from '../list/List'
import Wrapper from '../wrapper/Wrapper'
import './navbar.css'

const Navbar = () => {
  return (
      <section id='navbar-area'>
        <div className="fixed">
          <div className="div">
        <Logo/>
      <List/>
      <Wrapper/>
        </div>
        </div>
      </section>
      
   
  )
}

export default Navbar
