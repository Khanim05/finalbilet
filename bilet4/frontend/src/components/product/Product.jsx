import React from 'react'
import './product.css'
import {useDispatch} from 'react-redux'
import { addBasket } from '../../redux/features/basketSlice'


const Product = ({products}) => {
  let {image,title,price}=products
  let dispatch=useDispatch()
  return (
    <section id='card-area'>
      <div className='card'>
        <img className='image' src={image} alt=""/>
        <div className="content">
             <p className='price'>${price}</p>
        <p className='title'>{title}</p>
        <button className='addCard' onClick={()=>dispatch(addBasket(products))}>Add to card</button>
        </div>
      </div>
    </section>
   
  )
}

export default Product
