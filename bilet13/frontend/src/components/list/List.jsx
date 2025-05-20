import React from 'react'
import './list.css'
import {Link} from 'react-router'
const List = () => {
  return (
    <div id='list-area'>
      <ul className='list'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/menu'>Menu</Link>
        </li>
        <li>
          <Link to='/special'>Specialties</Link>
        </li>
        <li>
          <Link to='/reserv'>Reservation</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default List
