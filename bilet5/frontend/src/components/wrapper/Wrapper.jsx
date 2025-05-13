import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";
<FaShoppingBasket />

import { FaUser } from "react-icons/fa";
<FaUser />

import { Link } from 'react-router';

import { RxHamburgerMenu } from "react-icons/rx";
<RxHamburgerMenu />

import './wrapper.css'
import { useSelector } from 'react-redux';



const Wrapper = () => {

  let {basket}=useSelector(p=>p.basket)

  let count=basket.reduce((acc,sum)=>acc+sum.count,0)
  return (
    <div id='wrapper-area'>
      <div className="basket">
        
        <Link to='/basket'><FaShoppingBasket className='icon' />
      <sup className='count'>{count}</sup>
      </Link>
      </div>
      
      <Link to='/admin'><FaUser className='icon' />
      </Link>

      <div className='siderbar'>
         <RxHamburgerMenu className='burger ' />
      </div>
      
    </div>
  )
}

export default Wrapper
