import React from 'react'
import './wrapper.css'
import { Link } from 'react-router' 
import { FaRegHeart } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

import { LuMenu } from "react-icons/lu";
const Wrapper = () => {
  return (
    <div id='wrapper-area'>
      <Link to='/admin'><IoSettingsOutline className='icon' /></Link>
      <Link to='/wishlist'>
     
<FaRegHeart className='icon'/>
      </Link>
      <Link to='/basket'>
      <MdOutlineShoppingCart className='icon' />
      <sup>0</sup></Link>
      <div className="sidebar">
<LuMenu className='burger'/>
      </div>
    </div>
  )
}

export default Wrapper
