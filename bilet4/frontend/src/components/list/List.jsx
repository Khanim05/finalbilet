import React from 'react'
import { Link } from "react-router";
import './list.css'

const List = () => {
  return (
    <div id='list-area'>
      <ul className='list'>
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
        <li>
            <Link to='/admin'>Admin</Link>
        </li>
      </ul>
    </div>
  )
}

export default List
