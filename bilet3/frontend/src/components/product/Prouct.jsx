import React from 'react'
import { FaStar } from "react-icons/fa";
import './product.css'
import { useDispatch} from 'react-redux'
import { addBasket } from '../../redux/featured/basketSlice';

const Prouct = ({product}) => {
  let {image,title,price}= product
  const dispatch=useDispatch()
  return (
    <div className='card-area'>
      <img src={image} alt="" className='image' />
      <div className="content">
        <p className='title'>{title}</p>
        <p className='price'>${price}</p>
        <div className="icon-area">
        <FaStar className='icon' />
        <FaStar className='icon' />
        <FaStar className='icon' />
        <FaStar className='icon' /> 
        <FaStar className='icon' />
        </div>
        <button className='addProd' onClick={()=>dispatch(addBasket(product))}>Add basket</button>
      </div>
    </div>
  )
}

export default Prouct
