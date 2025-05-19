import React from 'react'
import './wrapper.css'
import { Link } from 'react-router'
import { IoSettings } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

import { RxHamburgerMenu } from "react-icons/rx";
const Wrapper = () => {
  return (
    <div id='wrapper-area'>
      <Link to='/admin'>
      <IoSettings className='icon' />
      </Link>
      
      <Link to='/basket'>
     <FaCartShopping className='icon' />
     <sup>0</sup>
      </Link>

      <div className="sidebar">
        
     <RxHamburgerMenu className='burger' />
      </div>
      <button>Buy now</button>
    </div>
  )
}

export default Wrapper
