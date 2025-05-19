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
          <Link to='/gallery'>Gallery</Link>
        </li>
        <li>
          <Link to='/features'>Features</Link>
        </li>
        <li>
          <Link to='/review'>Reviews</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
      </ul>
    </div>
  )
}

export default List
