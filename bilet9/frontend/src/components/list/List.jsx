import React from 'react'
import {Link} from 'react-router'
import './list.css'

const List = () => {
  return (
    <div id='list-area'>
      <ul className='list'>
        <li>
          <Link to='/' style={{color:"rgb(11, 141, 248)"}}>Collection</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
        <li>
          <Link to='/catalog'>Catalogs</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default List
