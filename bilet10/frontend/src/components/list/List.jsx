import React from 'react'
import {Link} from 'react-router'
import './list.css'
const List = () => {
  return (
    <div id='list'>
      <ul className='list'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
        <li>
          <Link to='/catalog'>Catalogue</Link>
        </li>
        <li>
          <Link to='arrivals'>New arrivals</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default List
