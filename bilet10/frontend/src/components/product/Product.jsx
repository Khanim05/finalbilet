import React from 'react'
import './product.css'
import {useDispatch} from 'react-redux'
import { addBasket } from '../../redux/features/basket'
import { useNavigate } from 'react-router'

const Product = ({product}) => {
  let dispatch=useDispatch()
  let navigate=useNavigate()
  return (
    <div id='card-area'>
      <div className="card-area1"
      onClick={()=>navigate(`detail/${product._id}`)}
      >
      <img src={product.image} alt="" className='image' />
            <div className="content1">
              <p className='title'>{product.title}</p>
              <p className='text'>{product.text}</p>
              <p className='price'>${product.price}</p>
              <button className='addCart' onClick={(e)=>{
                e.stopPropagation()
                dispatch(addBasket(product))}}>Add to cart</button>
             </div>
      </div>
    </div>
  )
}

export default Product
