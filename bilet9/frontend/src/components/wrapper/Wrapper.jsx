import React from 'react'
import './wrapper.css'
import { IoSearch } from "react-icons/io5";
<IoSearch />
import { FaShoppingBasket } from "react-icons/fa";
<FaShoppingBasket />
import { FaUser } from "react-icons/fa";
<FaUser />
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
<IoMenu />




const Wrapper = () => {
  let {basket}=useSelector(p=>p.basket)
  let count=basket.reduce((acc,sum)=>acc+sum.count,0)
  return (
    <div id='wrapper-area'>
      <div className="wrapper">
        <Link><IoSearch className='icon' />
        </Link>
        
        <Link to='/admin'>
        <FaUser className='icon' />
        </Link>
        <Link to='/basket'>
        <FaShoppingBasket className='icon' />
        <sup>{count}</sup>
        </Link>
        <div className="sidebar">
          <IoMenu className='menu' />
        </div>
      </div>
    </div>
  )
}

export default Wrapper
