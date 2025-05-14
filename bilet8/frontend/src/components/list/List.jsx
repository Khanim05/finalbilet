import React from 'react'
import './list.css'
import {Link} from 'react-router'

const List = () => {
  return (
    <div id='list'>
      <div className="list-area">
        <ul className='list'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <Link to='/features'>Features</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
        </ul>
        <div className="position">Hot</div>
      </div>
    </div>
  )
}

export default List
