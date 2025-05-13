
import { Link } from "react-router";
import { FaShoppingCart } from "react-icons/fa";

import { FaUser } from "react-icons/fa";

import { RxHamburgerMenu } from "react-icons/rx";
import './wrapper.css'
import { useSelector } from "react-redux";


const Wrapper = () => {
  let {basket}=useSelector(p=>p.basket)
  let count=basket.reduce((acc,sum)=>acc+sum.count,0)
  return (
    <div id="wrapper-area">
      <Link to='/admin'>
        <FaUser className="icon" />
      </Link>
      <Link to='/basket'>
        <FaShoppingCart className="icon" />
        <sup>{count}</sup>
      </Link>
      <div className="menu">
             <RxHamburgerMenu className="burger" />
      </div>
    </div>
  );
};

export default Wrapper;
