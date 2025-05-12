import React from 'react'
import { Link } from 'react-router'
import { FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import './wrapper.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from 'react-redux';

const Wrapper = () => {
  const {basket}=useSelector(p=>p.basket)
  let count=basket.reduce((acc,sum)=>acc+sum.count,0)
  return (
    <section id='wrapper-area'>
      <div className="basket">
        <Link to='/wishlist'><FaHeart className='icon' />
          <sup>0</sup>
        </Link>
        <Link to='/basket'><FaShoppingBasket className='icon' />
          <sup>{count}</sup>
        </Link>
      </div>

      <ul className='sidebar'>
        <li>
          <RxHamburgerMenu className='burger' />
          <ul className='dropdown'>
            <li>
              <Link to='/'>Home
              </Link>
            </li>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/about'>About us</Link>
            </li>
            <li>
              <Link to='/page'>Pages</Link>
            </li>
            <li>
              <Link to='/contact'>Contact us</Link>
            </li>
          </ul>
        </li>
      </ul>

    </section>

  )
}

export default Wrapper
