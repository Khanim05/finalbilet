import React from 'react'
import './product.css'
import { useDispatch } from 'react-redux'
import { addBasket } from '../../redux/featured/basketSlice'
import { useNavigate } from "react-router";

const Product = ({product}) => {
    let {image,title,price}=product
    const dispatch=useDispatch()
    const navigate=useNavigate()
  return (
    <div id='card-area'>
        <div className="card" onClick={()=>navigate(`detail/${product._id}`)}>
            <img src={image} alt=""  className='image'/>
            <div className="content">
                <p className='title'>{title}</p>
                <p className='price'>${price}</p>
                <button className='addCard' onClick={(e)=>{dispatch(addBasket(product))
                    
                    e.stopPropagation()
                }}>Add to card</button>
            </div>
        </div>
      
    </div>
  )
}

export default Product
