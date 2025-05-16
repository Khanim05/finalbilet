
import { FaUserAlt } from "react-icons/fa";

import { FaRegHeart } from "react-icons/fa6";

import { MdShoppingCart } from "react-icons/md";

import { RxHamburgerMenu } from "react-icons/rx";
<RxHamburgerMenu />

import './wrapper.css'

import { Link } from "react-router";
const Wrapper = () => {
  return (
    <div id="wrapper">
      <Link to='/admin'><FaUserAlt className="icon" />
      </Link>
      <FaRegHeart className="icon" />
      <Link to='/basket'><MdShoppingCart className="icon" />
      <sup>0</sup>
      </Link>
      
      <div className="sidebar">
        <RxHamburgerMenu className="icon" />

      </div>
      
    </div>
  )
}

export default Wrapper
