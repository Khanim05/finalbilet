import React from 'react'
import { Link } from 'react-router'
import './list.css'
const List = () => {
  return (
    <div id='list-area'>
      <ul className='list'>
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
    </div>
  )
}

export default List
