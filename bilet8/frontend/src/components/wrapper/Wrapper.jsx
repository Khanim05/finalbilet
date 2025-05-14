
import './Wrapper.css'
import { IoBasketOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import {Link} from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../../redux/featured/product';

const Wrapper = () => {
  let {basket}=useSelector(p=>p.basket)
  const count=basket.reduce((acc,sum)=>acc+sum.count,0)
  const dispatch=useDispatch()
  return (
    <div id='wrapper-area'>
      <div className="wrapper">
        <div className="input-area">
          <input type="text" placeholder='Search...' onChange={(e)=>dispatch(search(e.target.value))}/>
          <div className="back">
            <CiSearch  className='search' />
          </div>
          
        </div>
        <Link to='/admin'><FaRegUser  className='icon'/></Link>
        <Link to='/basket'>
        <IoBasketOutline className='icon' />
        <sup>{count}</sup>
        </Link>
        <div className="menubar">
          <RxHamburgerMenu className='burger' />
        </div>
      </div>
      
    </div>
  )
}

export default Wrapper
