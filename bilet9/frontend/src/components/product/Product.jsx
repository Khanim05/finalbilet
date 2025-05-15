import React from 'react'
import { useDispatch } from 'react-redux'
import { addBasket } from '../../redux/features/basket'
import { useNavigate } from "react-router";
import './product.css'

const Product = ({products}) => {
  const {image,text,title,price}=products
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <div className='card-area'>
      <div className="cards" onClick={()=>navigate(`detail/${products._id}`)}>
        <img src={image} alt="" className='image' />
        <div className="content">
          <h5 className='title'>{title}</h5>
          <p className='text'>{text}</p>
          <h5 className='price'>${price}</h5>
          <button className='addBasket'
          onClick={(e)=>{
            e.stopPropagation();
            dispatch(addBasket(products))
          }}
          >Add basket</button>
        </div>
      </div>
    </div>
  )
}

export default Product
