import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addBasket } from '../../redux/featured/basket';
import './product.css'

const Product = ({products}) => {
  const {image,text,title,price}=products
  const dispatch=useDispatch()

  return (
    <div id='card-area'>
      <div className="cards">
        <div className="img">
          <p className='pos'>New Product</p>
          <img className='image' src={image} alt="" />
        </div>
        <div className="card-content">
          <p className='text'>{text}</p>
          <h6 className='title'>{title}</h6>
          <div className="icon-area">
            <FaStar className='star-icon' />
            <FaStar className='star-icon' />
            <FaStar className='star-icon' />
            <FaStar className='star-icon' />
            <FaStar className='star-icon' />
          </div>
          <p className='price'>${price}</p>
          <button onClick={()=>dispatch(addBasket(products))}>Add Basket</button>
        </div>
      </div>
    </div>
  )
}

export default Product
