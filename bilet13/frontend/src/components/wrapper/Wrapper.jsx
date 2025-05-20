import React from 'react'
import './wrapper.css'
import { Link } from 'react-router'
import { IoMdSettings } from "react-icons/io";
<IoMdSettings />
import { FaBasketShopping } from "react-icons/fa6";
<FaBasketShopping />
import { RxHamburgerMenu } from "react-icons/rx";
<RxHamburgerMenu />
import { useSelector } from 'react-redux';

const Wrapper = () => {
  const {basket}=useSelector(p=>p.basket)
  const total=basket.reduce((acc,sum)=>acc+sum.count,0)
  return (
    <div id='wrapper-area'>
      <Link to='/admin'><IoMdSettings  className='icon' />
      </Link>
      <Link to='/basket'>
      <FaBasketShopping className='icon1' />
       <sup>{total}</sup>
     </Link>

      <div className="sidebar">
      <RxHamburgerMenu className='burger' />
      </div>
    </div>
  )
}

export default Wrapper
