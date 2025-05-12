import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";

import { RxHamburgerMenu } from "react-icons/rx";

import { Link } from 'react-router';
import { useSelector } from 'react-redux';

import './wrapper.css'


const Wrapper = () => {

  let {basket}=useSelector(p=>p.basket)
const count=basket.reduce((acc,sum)=>acc+sum.count,0)
  return (
    <div>
      <section id='wrapper-area'>
      <div className="basket">
      <Link to='/wishlist' className='icon'>
      <FaHeart />
      <sup>0</sup>
      </Link>
      <Link to='/basket' className='icon'>
      <FaShoppingBasket />
      <sup>{count}</sup>
      </Link>

      </div>
      <div className="sidebar">
        <ul className='menu'>
            <li >
              <RxHamburgerMenu className='burger'/>
                 <ul className='dropdown'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/offer'>Offer</Link>
                        </li>
                        <li>
                            <Link to='/menu'>Menu</Link>
                        </li>
                        <li>
                            <Link to='/news'>News</Link>
                        </li>
                        <li>
                            <Link to='/gallery'>Gallery</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                      </ul>
            </li>
        </ul>
      </div>
      </section>
    </div>
  )
}

export default Wrapper
